import type { Config } from 'tailwindcss'

export default {
  darkMode: ['class'],
  content: [
    './src/**/*.{ts,tsx,vue}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Inter Variable',
      },
    },
  },
} satisfies Config
