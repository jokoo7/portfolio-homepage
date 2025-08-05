import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import dayjs from 'dayjs'
import 'dayjs/locale/id'

dayjs.locale('id') // Atur ke Bahasa Indonesia (opsional)

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string | Date) {
  return dayjs(date).format('DD MMMM YYYY')
}

export function formatDateTime(date: string | Date) {
  return dayjs(date).format('DD MMMM YYYY HH:mm')
}
