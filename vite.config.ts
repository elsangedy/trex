import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { SvelteKitPWA } from '@vite-pwa/sveltekit';

export default defineConfig({
	plugins: [
		sveltekit(),
		SvelteKitPWA({
			registerType: 'autoUpdate',
			injectRegister: 'auto',
			manifest: {
				name: 'T-Rex STR&COND',
				short_name: 'STR&COND',
				description: 'T-Rex STR&COND',
				theme_color: '#e21c21',
				background_color: '#e21c21',
				display: 'standalone',
				orientation: 'portrait',
				icons: [
					{
						src: '/favicon-16x16.png',
						sizes: '16x16',
						type: 'image/png',
						purpose: 'maskable any'
					},
					{
						src: '/favicon-32x32.png',
						sizes: '32x32',
						type: 'image/png',
						purpose: 'maskable any'
					},
					{
						src: '/android-chrome-192x192.png',
						sizes: '192x192',
						type: 'image/png',
						purpose: 'maskable any'
					},
					{
						src: '/android-chrome-512x512.png',
						sizes: '512x512',
						type: 'image/png',
						purpose: 'maskable any'
					}
				]
			}
		})
	],
	server: {
		open: true,
		host: true
	},
	build: {
		sourcemap: true
	}
});
