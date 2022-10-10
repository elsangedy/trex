import { CACHE_NAME } from './constants';

const staleWhileRevalidate = async (event: FetchEvent) => {
	const cache = await caches.open(CACHE_NAME);
	const cachedResponse = await cache.match(event.request);
	const fetchedResponse = fetch(event.request).then((networkResponse) => {
		cache.put(event.request, networkResponse.clone());
		return networkResponse;
	});
	return cachedResponse || fetchedResponse;
};

export default (event: FetchEvent) => {
	// Prevent Chrome Developer Tools error:
	// Failed to execute 'fetch' on 'ServiceWorkerGlobalScope': 'only-if-cached' can be set only with 'same-origin' mode
	//
	// See also https://stackoverflow.com/a/49719964/1217468
	if (event.request.cache === 'only-if-cached' && event.request.mode !== 'same-origin') {
		return;
	}

	event.respondWith(staleWhileRevalidate(event));
};
