
/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'barlow-condensed': ['Barlow Condensed'],
        'sarpanch': ['Sarpanch'],
      },
      colors: {
        'backgroun-primary':"#2E2E2E",
        'backgroun-secondary':"#4E4E4E",
        'btn-primary':"#DBA3B6",
      },
      boxShadow: {
        'btn':'1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px',
      },
    },
    
    
    
  },
  plugins: [],
}
