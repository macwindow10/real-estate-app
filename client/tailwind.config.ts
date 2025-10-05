import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: "class",
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		colors: {
			primary: {
				'50': '#fcfcfc',
				'100': '#f1f1f2',
				'200': '#e0e0e2',
				'300': '#c7c7cc',
				'400': '#a8a8af',
				'500': '#82828b',
				'600': '#57575f',
				'700': '#27272a',
				'800': '#111113',
				'900': '#040405',
				'950': '#000000'
			},
			secondary: {
				'50': '#fefcfc',
				'100': '#fdf2f2',
				'200': '#fae1e1',
				'300': '#f6c9c9',
				'400': '#f1abab',
				'500': '#eb8686',
				'600': '#e45a5a',
				'700': '#dc2828',
				'800': '#7c1414',
				'900': '#400a0a',
				'950': '#2c0707'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
};
export default config;
