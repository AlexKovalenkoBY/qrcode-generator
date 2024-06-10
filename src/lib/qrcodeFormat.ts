import { ref } from 'vue'

export type QRCodeFormat = 'vcard'
export const qrcodeFormat = ref<QRCodeFormat>('vcard')

export function setQrcodeFormat(format: QRCodeFormat) {
  qrcodeFormat.value = format
}
