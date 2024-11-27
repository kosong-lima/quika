import { nextui } from "@nextui-org/react"

/** @type {import('tailwindcss').Config} */
export const content = [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
]

export const theme = {
    extend: {
        colors: {
            background: "var(--background)",
            foreground: "var(--foreground)",
        },
        backgroundImage: {
            'custom-gradient': 'linear-gradient(to top, #f3e7e9 0%, #e3eeff 99%, #e3eeff 100%)', // Gradient baru
            'glass': 'rgba(255, 255, 255, 0.1)',
        },
    },
}

export const plugins = [nextui()]

// background-image: linear-gradient(to top, #f3e7e9 0%, #e3eeff 99%, #e3eeff 100%);
// background-color: #E4E4E1;
//  background-image: radial-gradient(at top center, rgba(255,255,255,0.03) 0%, rgba(0,0,0,0.03) 100%), linear-gradient(to top, rgba(255,255,255,0.1) 0%, rgba(143,152,157,0.60) 100%);
//  	background-blend-mode: normal, multiply;

