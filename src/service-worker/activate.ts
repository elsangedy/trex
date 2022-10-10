import { CACHE_NAME } from './constants';

const deleteOldCache = async () => {
	const cachesKeys = await caches.keys();
	const cachesToDelete = cachesKeys.filter((key) => key !== CACHE_NAME);
	await Promise.all(cachesToDelete.map((key) => caches.delete(key)));
};

export default (event: ExtendableEvent) => {
	console.log('activate service worker');
	event.waitUntil(deleteOldCache());
};
