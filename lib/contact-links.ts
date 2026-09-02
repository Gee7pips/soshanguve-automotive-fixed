export const SCHOOL_EMAIL = "soshanguve.technical@gmail.com"
export const WHATSAPP_NUMBER = "27820985985"

export function openEmail(subject: string, body: string) {
  const params = new URLSearchParams({
    view: "cm",
    fs: "1",
    to: SCHOOL_EMAIL,
    su: subject,
    body,
  })
  window.open(`https://mail.google.com/mail/?${params.toString()}`, "_blank", "noopener,noreferrer")
}

export function openWhatsApp(message: string) {
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer")
}
