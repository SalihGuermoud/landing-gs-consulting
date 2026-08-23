import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, company, email, phone, message } = body;

    // Validation des champs requis
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Tous les champs obligatoires doivent être remplis." },
        { status: 400 }
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      console.warn(
        "RESEND_API_KEY n'est pas configurée dans les variables d'environnement. Message reçu :",
        { name, company, email, phone, message }
      );
      // Mode simulation sécurisé si la clé n'est pas encore saisie
      return NextResponse.json(
        { success: true, simulated: true },
        { status: 200 }
      );
    }

    const resend = new Resend(resendApiKey);
    const toEmail = process.env.CONTACT_NOTIFICATION_EMAIL || "guermoud.salih@gmail.com";
    const fromEmail = process.env.RESEND_FROM_EMAIL || "GS Consulting <onboarding@resend.dev>";

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: `[Nouveau Contact GS Consulting] Demande de ${name} (${company || "Particulier/Indépendant"})`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e4e4e7; border-radius: 16px; background-color: #ffffff;">
          <div style="background: linear-gradient(135deg, #2563eb, #4f46e5); padding: 20px 24px; border-radius: 12px; margin-bottom: 24px;">
            <h2 style="color: #ffffff; margin: 0; font-size: 20px; font-weight: 700;">Nouveau message reçu depuis votre site</h2>
            <p style="color: #e0e7ff; margin: 4px 0 0 0; font-size: 13px;">GS Consulting - Formulaire de contact</p>
          </div>
          
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr>
              <td style="padding: 10px 0; color: #71717a; font-size: 14px; width: 140px; font-weight: 600;">Nom :</td>
              <td style="padding: 10px 0; color: #18181b; font-size: 15px; font-weight: 700;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #71717a; font-size: 14px; font-weight: 600;">Entreprise :</td>
              <td style="padding: 10px 0; color: #18181b; font-size: 15px;">${company || "Non renseigné"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #71717a; font-size: 14px; font-weight: 600;">Email :</td>
              <td style="padding: 10px 0; font-size: 15px;"><a href="mailto:${email}" style="color: #2563eb; font-weight: 600; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #71717a; font-size: 14px; font-weight: 600;">Téléphone :</td>
              <td style="padding: 10px 0; font-size: 15px;"><a href="tel:${phone}" style="color: #18181b; text-decoration: none;">${phone || "Non renseigné"}</a></td>
            </tr>
          </table>

          <div style="background-color: #f8fafc; padding: 18px 20px; border-radius: 12px; border: 1px solid #e2e8f0; margin-top: 12px;">
            <h3 style="margin-top: 0; margin-bottom: 8px; color: #475569; font-size: 12px; text-transform: uppercase; letter-spacing: 0.8px; font-weight: 700;">Détails du projet / Message :</h3>
            <p style="color: #0f172a; font-size: 15px; line-height: 1.6; white-space: pre-wrap; margin: 0;">${message}</p>
          </div>

          <div style="margin-top: 32px; padding-top: 20px; border-top: 1px solid #f1f5f9; font-size: 12px; color: #94a3b8; text-align: center;">
            Cet email a été envoyé automatiquement depuis votre site <a href="https://www.gs-consulting.fr" style="color: #2563eb; text-decoration: none;">gs-consulting.fr</a>.
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Erreur Resend :", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (err: unknown) {
    console.error("Erreur interne API contact :", err);
    return NextResponse.json(
      { error: "Une erreur est survenue lors de l'envoi de votre message. Veuillez réessayer." },
      { status: 500 }
    );
  }
}
