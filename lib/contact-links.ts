export const SCHOOL_EMAIL = "soshanguve.technical@gmail.com"
export const WHATSAPP_NUMBER = "27820985985"

export function openEmail(subject: string, body: string) {
  const url = `mailto:${SCHOOL_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  window.location.href = url
}

export function openWhatsApp(message: string) {
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer")
}
