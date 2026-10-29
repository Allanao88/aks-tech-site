export const WHATSAPP_NUMBER = '5511964644711'

export const DEFAULT_WHATSAPP_MESSAGE =
  'Olá! Gostaria de conhecer as soluções da AKS - Tech.'

export interface LeadMessageParams {
  name: string
  email: string
  service: string
  message: string
}

export function buildLeadMessage({
  name,
  email,
  service,
  message,
}: LeadMessageParams): string {
  return [
    'Olá! Vim pelo site da AKS - Tech.',
    '',
    `Nome: ${name.trim()}`,
    `E-mail: ${email.trim()}`,
    `Serviço de interesse: ${service}`,
    '',
    'Sobre meu projeto:',
    message.trim(),
  ].join('\n')
}

export function buildWhatsappUrl(
  text: string = DEFAULT_WHATSAPP_MESSAGE,
): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
}
