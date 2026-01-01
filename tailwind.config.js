/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                premium: {
                    gold: "#C5A88E",
                    "gold-light": "#E7D3C0",
                    "gold-dark": "#8A7560",
                    dark: "#010100",
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['"Playfair Display"', 'serif'],
            },
            animation: {
                'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
                'float-slow': 'float-slow 6s ease-in-out infinite',
                'pulse-slow': 'pulse-slow 8s infinite',
            },
            keyframes: {
                'fade-in-up': {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                'float-slow': {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                'pulse-slow': {
                    '0%, 100%': { opacity: '0.05', transform: 'scale(1)' },
                    '50%': { opacity: '0.1', transform: 'scale(1.1)' },
                },
            }
        },
    },
    plugins: [],
}
