import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				},
				'custom-green': {
					DEFAULT: 'hsla(168, 80%, 18%, 1)',
					50: 'hsla(168, 80%, 18%, 0.5)',
					75: 'hsla(168, 80%, 18%, 0.75)',
					hover: 'hsla(168, 85%, 20%, 1)'
				},
				"customwhite-color": {
					DEFAULT: 'hsla(0,0%,100%,1)',
					50: 'hsla(0,0%,100%,1)',
					75: 'hsla(0,0%,100%,1)',
					hover: 'hsla(0,0%,100%,1)'
				},
				"customeyollow-color": {
					DEFAULT: "hsla(45,97%,50%,1)",
					50: 'hsla(45,97%,50%,1)',
					75: 'hsla(45,97%,50%,1)',
					hover: 'hsla(45,97%,50%,1)'
				},
				"customblue-color": {
					DEFAULT: "hsla(217,89%,61%,1)",
					50: 'hsla(217,89%,61%,1)',
					75: 'hsla(217,89%,61%,1)',
					hover: 'hsla(217,89%,61%,1)'
				},
				"custom-black": {
					DEFAULT: "hsla(0,0%,12%,1)",
					50: 'hsla(0,0%,12%,1)',
					75: 'hsla(0,0%,12%,1)',
					hover: 'hsla(0,0%,12%,1)'
				},
				"custom-blue-color": {
					DEFAULT: "hsla(205,100%,15%,1)",
					50: 'hsla(205,100%,15%,1)',
					75: 'hsla(205,100%,15%,1)',
					hover: 'hsla(205,100%,15%,1)'
				},
				"custom-light-green-color": {
					DEFAULT: "hsla(205,100%,15%,1)",
					50: 'hsla(205,100%,15%,1)',
					75: 'hsla(205,100%,15%,1)',
					hover: 'hsla(205,100%,15%,1)'
				},
				"custom-backgroud-white-color": {
					DEFAULT: "hsla(30,100%,98%,1)",
					50: 'hsla(30,100%,98%,1)',
					75: 'hsla(30,100%,98%,1)',
					hover: 'hsla(30,100%,98%,1)'
				},
				"custome-dark-green": {
					DEFAULT: "hsla(168,80%,6%,1)",
					50: 'hsla(168,80%,6%,1)',
					75: 'hsla(168,80%,6%,1)',
					hover: 'hsla(168,80%,6%,1)'
				},
				"custom-dark-blue": {
					DEFAULT: "hsla(205,100%,15%,1)",
					50: 'hsla(205,100%,15%,1)',
					75: 'hsla(205,100%,15%,1)',
					hover: 'hsla(205,100%,15%,1)'
				},
				"custom-prink-color": {
					DEFAULT: "hsla(338,100%,94%,1)",
					50: 'hsla(338,100%,94%,1)',
					75: 'hsla(338,100%,94%,1)',
					hover: 'hsla(338,100%,94%,1)'
				},
				"custome-light-prink": {
					DEFAULT: "hsla(27,57%,94%,1)",
					50: 'hsla(27,57%,94%,1)',
					75: 'hsla(27,57%,94%,1)',
					hover: 'hsla(27,57%,94%,1)'
				},
				"custom-light-blue": {
					DEFAULT: "hsla(213,100%,96%,1)",
					50: 'hsla(213,100%,96%,1)',
					75: 'hsla(213,100%,96%,1)',
					hover: 'hsla(213,100%,96%,1)'
				},
				"custom-light-green": {
					DEFAULT: "hsla(169, 30%, 87%, 1)",
					50: "hsla(169, 30%, 87%, 1)",
					75: "hsla(169, 30%, 87%, 1)",
					hover: "hsla(169, 30%, 87%, 1)"
				},
				"custom-grey-color": {
					DEFAULT: "hsla(45,34%,18%,1)",
					50: "hsla(45,34%,18%,1)",
					75: "hsla(45,34%,18%,1)",
					hover: "hsla(45,34%,18%,1)"
				},
				"custom-dark-verun-color": {
					DEFAULT: "hsla(338, 65%, 29%, 1)",
					50: "hsla(338, 65%, 29%,1)",
					75: "hsla(338, 65%, 29%, 1)",
					hover: "hsla(338, 65%, 29%, 1)"
				},
				"custom-little-dark-color": {
					DEFAULT: "hsla(337,29%,55%,1)",
					50: "hsla(337, 29%, 55%, 1)",
					75: "hsla(337, 29%, 55%, 1)",
					hover: "hsla(337, 29%, 55%, 1)"
				},
				"custom-moderate-blue-color": {
					DEFAULT: "hsla(208,40%,33%,1)",
					50: "hsla(208,40%,33%,1)",
					75: "hsla(208,40%,33%,1)",
					hover: "hsla(208,40%,33%,1)"
				},
				"custom-blue-light-color": {
					DEFAULT: "hsla(208,63%,16%,1)",
					50: "hsla(208,63%,16%,1)",
					75: "hsla(208,63%,16%,1)",
					hover: "hsla(208,63%,16%,1)"
				},
				"custom-light-green-col-background": {
					DEFAULT: "hsla(168,80%,18%,0.9)",
					50: "hsla(168,80%,18%,0.9)",
					75: "hsla(168,80%,18%,0.9)",
					hover: "hsla(168,80%,18%,0.9)"
				},
				"custom-light-yellow-background-color": {
					DEFAULT: "hsla(27,39%,53%,0.9)",
					50: "hsla(27,39%,53%,0.9)",
					75: "hsla(27,39%,53%,0.9)",
					hover: "hsla(27,39%,53%,0.9)"
				},
				"custom-pro-trip-background-color": {
					DEFAULT: "hsla(27, 100%, 58%, 0.1)",
					50: "hsla(27, 100%, 58%, 0.1)",
					75: "hsla(27, 100%, 58%, 0.1)",
					hover: "hsla(27, 100%, 58%, 0.1)"
				},
				"Custom-White-Color": {
					DEFAULT: "hsla(0, 0%, 95%, 1)",
					50: "hsla(0, 0%, 95%, 1)",
					75: "hsla(0, 0%, 95%, 1)",
					hover: "hsla(0, 0%, 95%, 1)"
				},
				"custom-border-yellow-color": {
					DEFAULT: "hsla(27,100%,58%,1)",
					50: "hsla(27,100%,58%,1)",
					75: "hsla(27,100%,58%,1)",
					hover: "hsla(27, 100%, 58%, 1)"
				},

			}, borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				oxygen: ['Oxygen', 'sans-serif'],
				sans: ['var(--font-open-sans)', 'Arial', 'sans-serif'],
				poppins: ['Poppins', 'sans-serif']

			},
			fontSize: {
				'1.125': '1.125rem',
				"1.5": "1.5 rem"
			},
			width: {
				'58.062': '58.0625rem',
			},
		},

	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
