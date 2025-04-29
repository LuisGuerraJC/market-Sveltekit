import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				primary: '#B5FF00',
				secondary: '#0D0D0D',
				third: '#181818'
			},
			fontFamily: {
				sans: ['Oswald', 'sans-serif'],
				serif: ['Merriweather', 'serif']
			}
		}
	},

	plugins: [typography]
} satisfies Config;
