export interface ContactNotificationData {
  name: string
  email: string
  company?: string
  service_interest: string
  message: string
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
}

function field(label: string, value: string): string {
  return `
    <div style="margin-bottom:16px;">
      <p style="margin:0 0 4px;font-size:11px;text-transform:uppercase;letter-spacing:0.08em;color:#71717A;font-weight:500;">${label}</p>
      <p style="margin:0;font-size:14px;color:#F5F5F5;">${value}</p>
    </div>
  `
}

function buildEmailHtml(data: ContactNotificationData): string {
  const { name, email, company, service_interest, message } = data
  const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000"
  const timestamp = new Date().toLocaleString("en-US", {
    timeZone: "America/Los_Angeles",
    dateStyle: "full",
    timeStyle: "short",
  })

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
</head>
<body style="margin:0;padding:0;background:#0C0C0E;font-family:Arial,sans-serif;color:#F5F5F5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0C0C0E;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">
        <tr>
          <td style="padding-bottom:28px;">
            <span style="font-family:monospace;font-size:20px;font-weight:700;color:#00C2A8;">AUSH</span>
            <span style="color:#71717A;font-size:13px;margin-left:8px;">Admin Notification</span>
          </td>
        </tr>
        <tr>
          <td style="background:#111113;border:1px solid #1C1C1F;border-radius:12px;padding:32px;">
            <h1 style="margin:0 0 6px;font-size:18px;font-weight:600;color:#F5F5F5;">New Contact Inquiry</h1>
            <p style="margin:0 0 24px;font-size:12px;color:#71717A;">${timestamp}</p>
            <hr style="border:none;border-top:1px solid #1C1C1F;margin:0 0 20px;">
            ${field("Name", escapeHtml(name))}
            ${field("Email", `<a href="mailto:${escapeHtml(email)}" style="color:#00C2A8;text-decoration:none;">${escapeHtml(email)}</a>`)}
            ${company ? field("Company", escapeHtml(company)) : ""}
            ${field("Service Interest", escapeHtml(service_interest))}
            <div style="margin-top:20px;">
              <p style="margin:0 0 8px;font-size:11px;text-transform:uppercase;letter-spacing:0.08em;color:#71717A;font-weight:500;">Message</p>
              <div style="background:#0C0C0E;border:1px solid #1C1C1F;border-radius:8px;padding:16px;">
                <p style="margin:0;font-size:14px;color:#A1A1AA;line-height:1.7;white-space:pre-wrap;">${escapeHtml(message)}</p>
              </div>
            </div>
            <div style="margin-top:28px;text-align:center;">
              <a href="${appUrl}/admin/contacts"
                 style="display:inline-block;background:#00C2A8;color:#0C0C0E;font-weight:600;font-size:14px;padding:12px 28px;border-radius:8px;text-decoration:none;">
                View in Dashboard →
              </a>
            </div>
          </td>
        </tr>
        <tr>
          <td style="padding-top:20px;text-align:center;">
            <p style="margin:0;font-size:11px;color:#71717A;">
              AUSH Consulting · Automated notification ·
              <a href="${appUrl}/admin" style="color:#71717A;">Dashboard</a>
            </p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`
}

export async function sendContactNotification(
  data: ContactNotificationData
): Promise<void> {
  const { Resend } = await import("resend")
  const resend = new Resend(process.env.RESEND_API_KEY!)
  const adminEmail =
    process.env.ADMIN_NOTIFICATION_EMAIL ?? "admin@aushconsulting.com"

  await resend.emails.send({
    from: "AUSH Consulting <notifications@aushconsulting.com>",
    to: [adminEmail],
    replyTo: data.email,
    subject: `New inquiry from ${data.name} — ${data.service_interest}`,
    html: buildEmailHtml(data),
  })
}
