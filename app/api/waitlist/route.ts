import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, city, email, whatsapp, interests } = body;

    // Basic validation
    if (!name || !city || !email) {
      return NextResponse.json(
        { error: "Faltan campos requeridos." },
        { status: 400 }
      );
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      return NextResponse.json(
        { error: "Email inválido." },
        { status: 400 }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    const { error } = await supabase.from("waitlist").insert([
      {
        name: name.trim(),
        city: city.trim(),
        email: email.trim().toLowerCase(),
        whatsapp: whatsapp?.trim() || null,
        interests: interests || [],
      },
    ]);

    if (error) {
      console.error("Supabase error:", error);
      // Handle duplicate email gracefully
      if (error.code === "23505") {
        return NextResponse.json(
          { error: "Este email ya está registrado." },
          { status: 409 }
        );
      }
      return NextResponse.json(
        { error: "Error al guardar. Intentá de nuevo." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("API error:", err);
    return NextResponse.json(
      { error: "Error inesperado." },
      { status: 500 }
    );
  }
}
