import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://ARGF0RCE.github.io',
	base: '/acps-lab-docs',
	integrations: [
		starlight({
			title: 'ACPS Lab Documentation',
			description: 'Documentation website for the Advanced Cyber Physical System Labs',
			favicon: '/iiitdmj-logo.jpg',
			logo: {
				src: './src/assets/iiitdmj-logo.jpg',
				alt: "PDPM IIITDMJ",
			},
			social: {
				github: 'https://github.com/ARGF0RCE/acps-lab-docs',
			},
			sidebar: [
				{
					label: 'Introduction',
					link: '/'
				},
				{
					label: 'Lab Documentation',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Cloud Computing Experiment', link: '/lab-docs/lab-cloud/' },
					],
				},
				{
					label: 'References',
					autogenerate: { directory: 'references' },
				},
			],
		}),
	],
});
