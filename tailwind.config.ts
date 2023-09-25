import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			background: {
				secondary: "#150E28",
				primary: "#D434FE",
			},
			colors: {
				secondary: "#150E28",
				purple: "#903AFF",
				primary: "#D434FE",
				darkPink: "#FF26B9",
			},
			fontFamily: {
				unica: ["Unica One", "cursive"],
				montserrat: ["Montserrat", "sans-serif"],
				tommy: ["MADE TOMMY Outline", "sans-serif"],
				typoHoop: ["Typo Hoop Demo", "sans-serif"],
				voces: ["Voces", "sans-serif"],
				volkhov: ["Volkhov", "sans-serif"],
			},
		},
	},
	plugins: [],
};
export default config;
