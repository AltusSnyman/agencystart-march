/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                main: '#F8FAFC',
                surface: '#FFFFFF',
                primary: '#0F172A',
                secondary: '#64748B',
                accent: '#2563EB',
                'accent-light': '#3B82F6',
                'accent-dark': '#1D4ED8',
                cta: '#F97316',
                'cta-dark': '#EA580C',
                muted: '#F1F5F9',
            },
            fontFamily: {
                sans: ['DM Sans', 'sans-serif'],
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'marquee': 'marquee 30s linear infinite',
                'marquee-reverse': 'marquee-reverse 30s linear infinite',
                'glass-shimmer': 'glass-shimmer 3s ease-in-out infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-100%)' },
                },
                'marquee-reverse': {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(0%)' },
                },
                'glass-shimmer': {
                    '0%, 100%': { opacity: '0.5' },
                    '50%': { opacity: '0.8' },
                },
            }
        },
    },
    plugins: [],
}
