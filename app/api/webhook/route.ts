import { NextRequest, NextResponse } from "next/server";

const VERIFY_TOKEN = process.env.WHATSAPP_VERIFY_TOKEN!;
const PHONE_NUMBER_ID = process.env.WHATSAPP_PHONE_NUMBER_ID!;
const WHATSAPP_TOKEN = process.env.WHATSAPP_TOKEN!;

// ─── GET: verificación del webhook con Meta ─────────────────────────────────
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const mode = searchParams.get("hub.mode");
  const token = searchParams.get("hub.verify_token");
  const challenge = searchParams.get("hub.challenge");

  // Acepta tanto la variable de entorno como el valor hardcodeado por seguridad
  const validToken = VERIFY_TOKEN || "plancito_verify_2024";

  if (mode === "subscribe" && token === validToken) {
    console.log("✅ Webhook verificado por Meta");
    return new NextResponse(challenge, { status: 200 });
  }

  console.log(`❌ Token inválido. Recibido: "${token}", Esperado: "${validToken}"`);
  return new NextResponse("Forbidden", { status: 403 });
}

// ─── POST: recibe mensajes entrantes ────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Verificar que es un evento de WhatsApp
    if (body.object !== "whatsapp_business_account") {
      return NextResponse.json({ error: "Not a WhatsApp event" }, { status: 400 });
    }

    const entry = body.entry?.[0];
    const changes = entry?.changes?.[0];
    const value = changes?.value;

    // Ignorar eventos que no son mensajes (ej: status updates)
    if (!value?.messages?.[0]) {
      return NextResponse.json({ status: "no message" }, { status: 200 });
    }

    const message = value.messages[0];
    const from = message.from; // número del usuario
    const messageType = message.type;

    // Solo procesamos mensajes de texto
    if (messageType !== "text") {
      await sendWhatsAppMessage(
        from,
        "Por ahora solo entiendo mensajes de texto. ¡Contame qué planes buscás! 📍"
      );
      return NextResponse.json({ status: "ok" }, { status: 200 });
    }

    const userMessage = message.text.body.trim();
    console.log(`📩 Mensaje de ${from}: ${userMessage}`);

    // Generar respuesta con IA
    const reply = await generatePlancito(userMessage, from);

    // Enviar respuesta por WhatsApp
    await sendWhatsAppMessage(from, reply);

    return NextResponse.json({ status: "ok" }, { status: 200 });
  } catch (error) {
    console.error("Webhook error:", error);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}

// ─── Enviar mensaje por WhatsApp ────────────────────────────────────────────
async function sendWhatsAppMessage(to: string, text: string) {
  const url = `https://graph.facebook.com/v19.0/${PHONE_NUMBER_ID}/messages`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${WHATSAPP_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      messaging_product: "whatsapp",
      to,
      type: "text",
      text: { body: text },
    }),
  });

  if (!response.ok) {
    const err = await response.json();
    console.error("Error enviando mensaje:", err);
    throw new Error("WhatsApp send failed");
  }

  return response.json();
}

// ─── Generar respuesta con IA (Groq) ────────────────────────────────────────
async function generatePlancito(userMessage: string, userPhone: string): Promise<string> {
  const GROQ_API_KEY = process.env.GROQ_API_KEY;

  if (!GROQ_API_KEY) {
    return fallbackResponse(userMessage);
  }

  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${GROQ_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama-3.1-8b-instant",
        max_tokens: 1024,
        messages: [
          {
            role: "system",
            content: `Sos Plancito, un asistente de planes urbanos para Argentina. Tu personalidad es cercana, práctica, honesta y con onda. Hablás en argentino (vos, che, dale, etc.).

Tu objetivo: cuando alguien te dice dónde está, cuándo quiere salir y qué mood tiene, le recomendás 3-5 planes concretos y honestos.

Formato de respuesta (siempre):
- Usá emojis con moderación
- Planes numerados y cortos
- Incluí precio estimado (gratis / bajo / medio)
- Al final: una recomendación sincera de cuál elegirías vos
- Sin rodeos, sin texto de relleno
- Máximo 300 palabras

Si el mensaje no tiene suficiente info, preguntá solo lo esencial: zona, horario y presupuesto.

Ejemplos de planes que podés recomendar: cafés tranquilos, parques, eventos culturales, ferias, bares, actividades gratuitas, paseos, restaurantes baratos, cines, museos, etc.`,
          },
          {
            role: "user",
            content: userMessage,
          },
        ],
      }),
    });

    if (!response.ok) {
      console.error("Groq API error:", await response.text());
      return fallbackResponse(userMessage);
    }

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error("Groq error:", error);
    return fallbackResponse(userMessage);
  }
}

// ─── Respuesta fallback si no hay IA configurada ────────────────────────────
function fallbackResponse(message: string): string {
  const lower = message.toLowerCase();

  if (
    lower.includes("hola") ||
    lower.includes("buenas") ||
    lower.includes("hey")
  ) {
    return `¡Hola! Soy Plancito 👋

Te ayudo a encontrar planes cerca tuyo. Contame:
1️⃣ ¿En qué zona estás?
2️⃣ ¿Para cuándo? (hoy, esta semana...)
3️⃣ ¿Qué presupuesto tenés? (gratis, bajo, sin límite)
4️⃣ ¿Qué mood? (tranqui, evento, cita, amigos, solo...)

¡Y te armo el plancito! 🗺️`;
  }

  return `Recibí tu mensaje: "${message}"

Para armarte el mejor plancito necesito saber:
📍 ¿Dónde estás? (barrio o ciudad)
🕐 ¿Para cuándo?
💸 ¿Cuánto querés gastar?
🎭 ¿Qué tipo de plan buscás?

Contame y te respondo en segundos 🙌`;
}
