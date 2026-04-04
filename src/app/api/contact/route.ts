import { NextRequest } from "next/server"
import { appendContactRow } from "@/lib/googleSheets"
import { sendConfirmationEmail } from "@/lib/brevo"

export const runtime = "nodejs"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, company, email, phone, message } = body

    if (!name?.trim() || !email?.trim()) {
      return Response.json(
        { error: "Ad Soyad ve E-posta zorunludur." },
        { status: 400 },
      )
    }

    const trimmed = {
      name: name.trim(),
      company: company?.trim() ?? "",
      email: email.trim(),
      phone: phone?.trim() ?? "",
      message: message?.trim() ?? "",
    }

    const [sheetsResult, emailResult] = await Promise.allSettled([
      appendContactRow(trimmed),
      sendConfirmationEmail({ name: trimmed.name, email: trimmed.email }),
    ])

    if (sheetsResult.status === "rejected") {
      console.error("Google Sheets hatası:", sheetsResult.reason)
    }
    if (emailResult.status === "rejected") {
      console.error("Brevo email hatası:", emailResult.reason)
    }

    return Response.json({ success: true })
  } catch {
    return Response.json({ error: "Sunucu hatası. Lütfen tekrar deneyin." }, { status: 500 })
  }
}
