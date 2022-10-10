import 'node-localstorage/register';
import { writable } from 'svelte/store';

interface Config {
	group: number;
	backSquat: number;
	benchPress: number;
	firstOpen: boolean;
}

export const config = writable<Config>(
	JSON.parse(
		localStorage.getItem('config') || '{"group":0,"backSquat":0,"benchPress":0,"firstOpen":true}'
	)
);

config.subscribe((value) => {
	localStorage.setItem(
		'config',
		JSON.stringify({
			...value,
			firstOpen: false
		})
	);
});
