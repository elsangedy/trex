import { get, writable } from 'svelte/store';
import { persisted } from './persisted';

export const benchmarks = persisted(
	'benchmarks',
	{
		deadlift: 0,
		backSquat: 0,
		benchPress: 0,
		shoulderPress: 0
	},
	{
		storage: 'local'
	}
);

export const benchmarksOpen = writable(Object.values(get(benchmarks)).some((value) => !value));
