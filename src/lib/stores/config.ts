import 'node-localstorage/register';
import { writable } from 'svelte/store';

interface Config {
	clean: number;
	deadlift: number;
	backSquat: number;
	benchPress: number;
	firstOpen: boolean;
}

const getConfig = (): Config => {
	const storageConfig = JSON.parse(localStorage.getItem('config') || '{}');
	return {
		clean: storageConfig.clean || 0,
		deadlift: storageConfig.deadlift || 0,
		backSquat: storageConfig.backSquat || 0,
		benchPress: storageConfig.benchPress || 0,
		firstOpen: storageConfig.firstOpen || true
	};
};

export const config = writable<Config>(getConfig());

config.subscribe((value) => {
	localStorage.setItem(
		'config',
		JSON.stringify({
			...value,
			firstOpen: false
		})
	);
});
