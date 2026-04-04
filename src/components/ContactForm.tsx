"use client"

import { useState } from "react"

interface FormState {
  name: string
  company: string
  email: string
  phone: string
  message: string
}

type Status = "idle" | "loading" | "success" | "error"

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  })
  const [status, setStatus] = useState<Status>("idle")
  const [errorMsg, setErrorMsg] = useState("")

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus("loading")
    setErrorMsg("")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })

      const data = await res.json()

      if (!res.ok) {
        setErrorMsg(data.error ?? "Bir hata oluştu.")
        setStatus("error")
        return
      }

      setStatus("success")
    } catch {
      setErrorMsg("Bağlantı hatası. Lütfen tekrar deneyin.")
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <div className="mt-8 rounded-xl bg-[#fff1c9] p-8 text-center">
        <p className="text-xl font-bold text-black">Mesajınız alındı!</p>
        <p className="mt-2 text-slate-600">
          En kısa sürede size dönüş yapacağız.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-slate-500">
            Ad Soyad
          </span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Adınız Soyadınız"
            className="w-full rounded-xl border border-black/10 px-4 py-3 text-base text-black outline-none transition focus:border-[#e0ae1a]"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-slate-500">
            Firma
          </span>
          <input
            type="text"
            name="company"
            value={form.company}
            onChange={handleChange}
            placeholder="Firma adı"
            className="w-full rounded-xl border border-black/10 px-4 py-3 text-base text-black outline-none transition focus:border-[#e0ae1a]"
          />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-slate-500">
            E-posta
          </span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="ornek@firma.com"
            className="w-full rounded-xl border border-black/10 px-4 py-3 text-base text-black outline-none transition focus:border-[#e0ae1a]"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-slate-500">
            Telefon
          </span>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+90 5xx xxx xx xx"
            className="w-full rounded-xl border border-black/10 px-4 py-3 text-base text-black outline-none transition focus:border-[#e0ae1a]"
          />
        </label>
      </div>

      <label className="block">
        <span className="mb-2 block text-sm font-semibold text-slate-500">
          Mesajınız
        </span>
        <textarea
          name="message"
          rows={6}
          value={form.message}
          onChange={handleChange}
          placeholder="Şantiye sayınız, ekip yapınız veya görmek istediğiniz modülleri yazabilirsiniz."
          className="w-full rounded-xl border border-black/10 px-4 py-3 text-base text-black outline-none transition focus:border-[#e0ae1a]"
        />
      </label>

      {status === "error" && (
        <p className="text-sm text-red-600">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="cursor-pointer rounded-xl bg-[#f4c542] px-8 py-4 text-base font-bold text-black transition hover:bg-[#e0ae1a] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? "Gönderiliyor..." : "Formu Gönder"}
      </button>
    </form>
  )
}
