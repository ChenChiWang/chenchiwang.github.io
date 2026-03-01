import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'Cascadia Code', 'Consolas', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        bg: '#0d1117',
        surface: '#161b22',
        border: '#30363d',
        'text-primary': '#e6edf3',
        'text-muted': '#8b949e',
        accent: '#58a6ff',
        green: '#3fb950',
        orange: '#f0883e',
      },
    },
  },
  plugins: [],
}
export default config
