import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const generateDiscColor = (name: string) => {
  const colors = [
    'bg-red-400',
    'bg-yellow-400',
    'bg-green-400',
    'bg-blue-400',
    'bg-indigo-400',
    'bg-purple-400',
    'bg-pink-400',
  ]

  // calculate the sum of all characters in the name string and use it as the index for the color array
  const index = name.length % colors.length

  return colors[index]
}
