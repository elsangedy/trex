import { build } from '$service-worker';
import { CACHE_NAME } from './constants';

const addResourcesToCache = async (resources: string[]) => {
	const cache = await caches.open(CACHE_NAME);
	await cache.addAll(resources);
};

export default (event: ExtendableEvent) => {
	console.log('installing service worker');
	event.waitUntil(addResourcesToCache(build));
};
