import type { Config } from 'tailwindcss';

const config: Config = {
	content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			screens: {
				'3xl': '1600px',
				'4xl': '1700px',
				'5xl': '1900px',
				'6xl': '2000px',
			},
			colors: {
				//Important! :  the primary theme color works differently for mix blend mode. Use ThemePrimaryMixBlend to get the theme color in mix blend mode, its a green color!
				ThemePrimary: '#f74ea1',
				ThemePrimaryHover: '#FD0D81',
				ThemePrimaryMixBlend: '#08b15e',
				ThemeSecondary: '#373737',
				Text_blogHeading: '#232528',
				Text_blogNormal: '#080708',
			},
		},
	},
	plugins: [],
};
export default config;
