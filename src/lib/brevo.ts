export async function sendConfirmationEmail({
  name,
  email,
}: {
  name: string
  email: string
}) {
  const htmlContent = `
<!DOCTYPE html>
<html lang="tr">
<head><meta charset="UTF-8" /></head>
<body style="margin:0;padding:0;background:#f9f9f9;font-family:sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f9f9f9;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="560" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.06);">

          <tr>
            <td style="background:#f4c542;padding:28px 40px;">
              <p style="margin:0;font-size:22px;font-weight:800;color:#000;letter-spacing:-0.5px;">E-Şantiye</p>
            </td>
          </tr>

          <tr>
            <td style="padding:40px;">
              <p style="margin:0 0 16px;font-size:18px;font-weight:700;color:#000;">Merhaba ${name},</p>
              <p style="margin:0 0 16px;font-size:15px;color:#444;line-height:1.7;">
                Mesajınız bize ulaştı. Ekibimiz en kısa sürede sizinle iletişime geçecek.
              </p>
              <p style="margin:0 0 32px;font-size:15px;color:#444;line-height:1.7;">
                Bu sürede E-Şantiye hakkında daha fazla bilgi almak isterseniz bize
                <a href="mailto:bilgi@esantiye.com" style="color:#c89a00;text-decoration:none;">bilgi@esantiye.com</a>
                adresinden ulaşabilirsiniz.
              </p>
              <p style="margin:0;font-size:15px;color:#000;font-weight:600;">E-Şantiye Ekibi</p>
            </td>
          </tr>

          <tr>
            <td style="background:#f9f9f9;padding:20px 40px;border-top:1px solid #eee;">
              <p style="margin:0;font-size:12px;color:#999;text-align:center;">
                Bu e-posta otomatik olarak gönderilmiştir. Lütfen yanıtlamayınız.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`

  const res = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      "api-key": process.env.BREVO_API_KEY!,
    },
    body: JSON.stringify({
      sender: { name: "E-Şantiye", email: "bilgi@esantiye.com" },
      to: [{ email, name }],
      subject: "Mesajınızı aldık — E-Şantiye ekibi en kısa sürede dönecek",
      htmlContent,
    }),
  })

  if (!res.ok) {
    const body = await res.text()
    throw new Error(`Brevo ${res.status}: ${body}`)
  }
}
