import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

function createTransporter() {
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!user || !pass) {
    throw new Error(`SMTP credentials missing — SMTP_USER: ${user ? "set" : "undefined"}, SMTP_PASS: ${pass ? "set" : "undefined"}`);
  }

  return nodemailer.createTransport({
    host: "smtp.hostinger.com",
    port: 465,
    secure: true,
    auth: { user, pass },
    tls: { rejectUnauthorized: false },
  });
}

/* ─────────────────────────────────────────────────────────
   ADMIN NOTIFICATION EMAIL
   Sent to the Navchetna team when a new inquiry arrives.
   Design: Light, editorial, brand-matched.
───────────────────────────────────────────────────────── */
function adminTemplate(name: string, email: string, subject: string, message: string) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Contact Inquiry — Navchetna Technologies</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
</head>
<body style="margin:0;padding:0;background-color:#F4F3F1;font-family:'Inter',Arial,sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#F4F3F1;padding:48px 20px;">
    <tr>
      <td align="center">

        <!-- Email Card -->
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border:1px solid #E3E2DF;border-radius:4px;overflow:hidden;">

          <!-- Top accent bar -->
          <tr>
            <td style="height:3px;background:linear-gradient(90deg,#7d4835 0%,#C68B59 50%,#545B8C 100%);font-size:0;line-height:0;">&nbsp;</td>
          </tr>

          <!-- Header -->
          <tr>
            <td style="padding:36px 48px 28px;border-bottom:1px solid #EFEFED;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <p style="margin:0;font-size:20px;font-weight:600;letter-spacing:0.08em;color:#1A1917;font-family:Georgia,serif;">NAVCHETNA</p>
                    <p style="margin:2px 0 0;font-size:10px;letter-spacing:0.22em;color:#9E9C97;text-transform:uppercase;font-weight:500;font-family:'Inter',Arial,sans-serif;">Technologies</p>
                  </td>
                  <td align="right" style="vertical-align:middle;">
                    <span style="display:inline-block;background:#FDF3EE;border:1px solid #E8C9B8;border-radius:20px;padding:5px 14px;font-size:10px;font-weight:600;letter-spacing:0.10em;color:#7d4835;text-transform:uppercase;font-family:'Inter',Arial,sans-serif;">New Inquiry</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:40px 48px 36px;">

              <h1 style="margin:0 0 6px;font-size:22px;font-weight:600;color:#1A1917;font-family:Georgia,serif;letter-spacing:-0.01em;">Contact Form Submission</h1>
              <p style="margin:0 0 36px;font-size:14px;color:#787672;line-height:1.6;font-family:'Inter',Arial,sans-serif;">A new inquiry has arrived through the website contact form.</p>

              <!-- Sender details table -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
                <!-- Row: From -->
                <tr>
                  <td style="padding:0 0 10px;">
                    <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #E3E2DF;border-radius:3px;overflow:hidden;">
                      <tr>
                        <td style="padding:13px 18px;width:26%;background:#F7F6F4;border-right:1px solid #E3E2DF;">
                          <p style="margin:0;font-size:10px;font-weight:600;letter-spacing:0.12em;color:#9E9C97;text-transform:uppercase;font-family:'Inter',Arial,sans-serif;">From</p>
                        </td>
                        <td style="padding:13px 18px;">
                          <p style="margin:0;font-size:14px;color:#1A1917;font-weight:500;font-family:'Inter',Arial,sans-serif;">${name}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <!-- Row: Email -->
                <tr>
                  <td style="padding:0 0 10px;">
                    <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #E3E2DF;border-radius:3px;overflow:hidden;">
                      <tr>
                        <td style="padding:13px 18px;width:26%;background:#F7F6F4;border-right:1px solid #E3E2DF;">
                          <p style="margin:0;font-size:10px;font-weight:600;letter-spacing:0.12em;color:#9E9C97;text-transform:uppercase;font-family:'Inter',Arial,sans-serif;">Email</p>
                        </td>
                        <td style="padding:13px 18px;">
                          <a href="mailto:${email}" style="font-size:14px;color:#545B8C;text-decoration:none;font-weight:500;font-family:'Inter',Arial,sans-serif;">${email}</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <!-- Row: Subject -->
                <tr>
                  <td style="padding:0;">
                    <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #E3E2DF;border-radius:3px;overflow:hidden;">
                      <tr>
                        <td style="padding:13px 18px;width:26%;background:#F7F6F4;border-right:1px solid #E3E2DF;">
                          <p style="margin:0;font-size:10px;font-weight:600;letter-spacing:0.12em;color:#9E9C97;text-transform:uppercase;font-family:'Inter',Arial,sans-serif;">Subject</p>
                        </td>
                        <td style="padding:13px 18px;">
                          <p style="margin:0;font-size:14px;color:#1A1917;font-family:'Inter',Arial,sans-serif;">${subject}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Message block -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:36px;">
                <tr>
                  <td style="background:#F7F6F4;border:1px solid #E3E2DF;border-left:3px solid #C68B59;border-radius:3px;padding:22px 24px;">
                    <p style="margin:0 0 10px;font-size:10px;font-weight:600;letter-spacing:0.14em;color:#C68B59;text-transform:uppercase;font-family:'Inter',Arial,sans-serif;">Message</p>
                    <p style="margin:0;font-size:14px;color:#3E3C3A;line-height:1.85;white-space:pre-wrap;font-family:'Inter',Arial,sans-serif;">${message}</p>
                  </td>
                </tr>
              </table>

              <!-- CTA -->
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td style="border-radius:3px;background-color:#1A1917;">
                    <a href="mailto:${email}" style="display:inline-block;background:#1A1917;color:#ffffff;font-size:12px;font-weight:600;letter-spacing:0.10em;text-decoration:none;padding:13px 28px;border-radius:3px;text-transform:uppercase;font-family:'Inter',Arial,sans-serif;">Reply to ${name} &rarr;</a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#F7F6F4;padding:18px 48px;border-top:1px solid #EFEFED;text-align:center;">
              <p style="margin:0;font-size:11px;color:#9E9C97;letter-spacing:0.06em;font-family:'Inter',Arial,sans-serif;">&#169; 2026 NAVCHETNA TECHNOLOGIES &nbsp;&middot;&nbsp; ALL RIGHTS RESERVED</p>
            </td>
          </tr>

        </table>

        <!-- Outer footer note -->
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;margin-top:20px;">
          <tr>
            <td style="text-align:center;">
              <p style="margin:0;font-size:11px;color:#9E9C97;font-family:'Inter',Arial,sans-serif;">navchetna.tech</p>
            </td>
          </tr>
        </table>

      </td>
    </tr>
  </table>

</body>
</html>`;
}

/* ─────────────────────────────────────────────────────────
   USER CONFIRMATION EMAIL
   Sent to the person who submitted the contact form.
   Design: Light, editorial, brand-matched.
───────────────────────────────────────────────────────── */
function userTemplate(name: string, subject: string, message: string) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>We received your message — Navchetna Technologies</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
</head>
<body style="margin:0;padding:0;background-color:#F4F3F1;font-family:'Inter',Arial,sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#F4F3F1;padding:48px 20px;">
    <tr>
      <td align="center">

        <!-- Email Card -->
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border:1px solid #E3E2DF;border-radius:4px;overflow:hidden;">

          <!-- Top accent bar -->
          <tr>
            <td style="height:3px;background:linear-gradient(90deg,#7d4835 0%,#C68B59 50%,#545B8C 100%);font-size:0;line-height:0;">&nbsp;</td>
          </tr>

          <!-- Header -->
          <tr>
            <td style="padding:36px 48px 28px;border-bottom:1px solid #EFEFED;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <p style="margin:0;font-size:20px;font-weight:600;letter-spacing:0.08em;color:#1A1917;font-family:Georgia,serif;">NAVCHETNA</p>
                    <p style="margin:2px 0 0;font-size:10px;letter-spacing:0.22em;color:#9E9C97;text-transform:uppercase;font-weight:500;font-family:'Inter',Arial,sans-serif;">Technologies</p>
                  </td>
                  <td align="right" style="vertical-align:middle;">
                    <span style="display:inline-block;background:#F0F4ED;border:1px solid #C8DCBA;border-radius:20px;padding:5px 14px;font-size:10px;font-weight:600;letter-spacing:0.10em;color:#3A6B2A;text-transform:uppercase;font-family:'Inter',Arial,sans-serif;">Received</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Hero confirmation strip -->
          <tr>
            <td style="background:#F7F6F4;padding:28px 48px;border-bottom:1px solid #EFEFED;text-align:center;">
              <!-- Checkmark circle -->
              <table cellpadding="0" cellspacing="0" style="margin:0 auto 16px;">
                <tr>
                  <td style="width:48px;height:48px;background:linear-gradient(135deg,#7d4835,#C68B59);border-radius:50%;text-align:center;vertical-align:middle;">
                    <span style="font-size:22px;color:#ffffff;line-height:48px;font-family:'Inter',Arial,sans-serif;">&#10003;</span>
                  </td>
                </tr>
              </table>
              <p style="margin:0 0 4px;font-size:18px;font-weight:600;color:#1A1917;font-family:Georgia,serif;letter-spacing:-0.01em;">Message Received</p>
              <p style="margin:0;font-size:13px;color:#787672;font-family:'Inter',Arial,sans-serif;">We'll get back to you within one business day.</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:40px 48px 36px;">

              <p style="margin:0 0 20px;font-size:15px;color:#1A1917;font-weight:500;font-family:'Inter',Arial,sans-serif;">Hi ${name},</p>
              <p style="margin:0 0 14px;font-size:14px;color:#504E4C;line-height:1.8;font-family:'Inter',Arial,sans-serif;">Thank you for reaching out to <strong style="color:#7d4835;font-weight:600;">Navchetna Technologies</strong>. We appreciate you taking the time to contact us.</p>
              <p style="margin:0 0 14px;font-size:14px;color:#504E4C;line-height:1.8;font-family:'Inter',Arial,sans-serif;">This email is to confirm that we have successfully received your inquiry. We have forwarded your message to the appropriate team member for review, and they are currently looking into the details you provided.</p>
              <p style="margin:0 0 14px;font-size:14px;color:#504E4C;line-height:1.8;font-family:'Inter',Arial,sans-serif;">We strive to provide thorough and timely responses to all inquiries. You can expect to hear back from us with a comprehensive reply within <strong style="color:#1A1917;font-weight:600;">one business day</strong>.</p>
              <p style="margin:0 0 32px;font-size:14px;color:#504E4C;line-height:1.8;font-family:'Inter',Arial,sans-serif;">Thank you for your patience and for your interest in our work.</p>

              <!-- Message recap -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:20px;">
                <tr>
                  <td style="background:#F7F6F4;border:1px solid #E3E2DF;border-left:3px solid #9E9C97;border-radius:3px;padding:20px 22px;">
                    <p style="margin:0 0 8px;font-size:10px;font-weight:600;letter-spacing:0.14em;color:#9E9C97;text-transform:uppercase;font-family:'Inter',Arial,sans-serif;">Your Message</p>
                    <p style="margin:0 0 6px;font-size:13px;font-weight:600;color:#3E3C3A;font-family:'Inter',Arial,sans-serif;">${subject}</p>
                    <p style="margin:0;font-size:13px;color:#787672;line-height:1.75;white-space:pre-wrap;font-family:'Inter',Arial,sans-serif;">${message}</p>
                  </td>
                </tr>
              </table>

              <!-- Response time note -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:36px;">
                <tr>
                  <td style="background:#F7F6F4;border:1px solid #E3E2DF;border-left:3px solid #1A1917;border-radius:3px;padding:20px 22px;">
                    <p style="margin:0 0 8px;font-size:10px;font-weight:600;letter-spacing:0.14em;color:#1A1917;text-transform:uppercase;font-family:'Inter',Arial,sans-serif;">Response Time</p>
                    <p style="margin:0;font-size:13px;color:#787672;line-height:1.75;font-family:'Inter',Arial,sans-serif;">Our team typically responds within one business day. For urgent matters, please call us directly at the number provided on our website.</p>
                  </td>
                </tr>
              </table>

              <p style="margin:0 0 4px;font-size:12px;color:#9E9C97;font-style:italic;font-family:'Inter',Arial,sans-serif;">This is an automated confirmation from Navchetna Technologies.</p>
              <p style="margin:14px 0 0;font-size:14px;color:#504E4C;font-family:'Inter',Arial,sans-serif;">Best regards,<br /><strong style="color:#1A1917;font-weight:600;">The Navchetna Technologies Team</strong></p>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#F7F6F4;padding:18px 48px;border-top:1px solid #EFEFED;text-align:center;">
              <p style="margin:0;font-size:11px;color:#9E9C97;letter-spacing:0.06em;font-family:'Inter',Arial,sans-serif;">&#169; 2025 NAVCHETNA TECHNOLOGIES &nbsp;&middot;&nbsp; ALL RIGHTS RESERVED</p>
            </td>
          </tr>

        </table>

        <!-- Outer footer note -->
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;margin-top:20px;">
          <tr>
            <td style="text-align:center;">
              <p style="margin:0;font-size:11px;color:#9E9C97;font-family:'Inter',Arial,sans-serif;">navchetna.tech</p>
            </td>
          </tr>
        </table>

      </td>
    </tr>
  </table>

</body>
</html>`;
}

export async function POST(req: NextRequest) {
  const { name, email, subject, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  let transporter;
  try {
    transporter = createTransporter();
  } catch (err: unknown) {
    const error = err as { message?: string };
    console.error("Transporter init error:", error?.message);
    return NextResponse.json({ error: error?.message ?? "SMTP config error" }, { status: 500 });
  }

  try {
    // Send notification to admin
    await transporter.sendMail({
      from: `"Navchetna Contact" <${process.env.SMTP_USER}>`,
      to: process.env.MAIL_TO,
      replyTo: email,
      subject: `[Contact] ${subject || "New Inquiry"} — ${name}`,
      html: adminTemplate(name, email, subject || "No subject", message),
    });

    // Send confirmation to user
    await transporter.sendMail({
      from: `"Navchetna Technologies" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "We received your message — Navchetna Technologies",
      html: userTemplate(name, subject || "Your inquiry", message),
    });

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    const error = err as { message?: string; code?: string; response?: string };
    console.error("SMTP error:", error?.message, error?.code, error?.response);
    return NextResponse.json(
      { error: `Failed to send email: ${error?.message ?? "Unknown error"}` },
      { status: 500 }
    );
  }
}
