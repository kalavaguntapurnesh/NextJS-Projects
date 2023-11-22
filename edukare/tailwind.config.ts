import type { Config } from 'tailwindcss'
const defaultTheme = require('tailwindcss/defaultTheme')

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container: {
        
      },
      colors: {
        main: '#1a2b6d',
        footer: '#EAEAEA'
      },
      fontFamily:{
        sans:['Inter', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}
export default config
