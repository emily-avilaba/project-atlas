import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const {
      nombre,
      telefono,
      correo,
      mensaje,
      captchaValue,
    } = await request.json();

    if (!nombre || !telefono || !correo || !mensaje || !captchaValue) {
      return NextResponse.json(
        { message: "Faltan campos obligatorios." },
        { status: 400 }
      );
    }

    const captchaResponse = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          secret: process.env.RECAPTCHA_SECRET_KEY || "",
          response: captchaValue,
        }),
      }
    );

    const captchaResult = await captchaResponse.json();

    if (!captchaResult.success) {
      return NextResponse.json(
        { message: "No se pudo validar el reCAPTCHA." },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "PKF Guatemala <onboarding@resend.dev>",
      to: [process.env.CONTACT_EMAIL || "eavila@pkfguatemala.com"],
      replyTo: correo,
      subject: `Nueva consulta web - ${nombre}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>Nueva consulta desde PKF Guatemala</h2>

          <p><strong>Nombre:</strong> ${nombre}</p>
          <p><strong>Teléfono:</strong> ${telefono}</p>
          <p><strong>Correo:</strong> ${correo}</p>

          <p><strong>Mensaje:</strong></p>
          <p>${mensaje}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Error de Resend:", error);

      return NextResponse.json(
        { message: "No se pudo enviar el correo." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Formulario enviado correctamente." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error en formulario:", error);

    return NextResponse.json(
      { message: "Ocurrió un error al procesar el formulario." },
      { status: 500 }
    );
  }
}
