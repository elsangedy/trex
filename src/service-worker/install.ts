import { build } from '$service-worker';
import { CACHE_NAME } from './constants';

const addResourcesToCache = async (resources: string[]) => {
	const cache = await caches.open(CACHE_NAME);
	await cache.addAll(resources);
};

export default (event: ExtendableEvent) => {
	console.log('installing service worker');
	console.log(build);
	event.waitUntil(
		addResourcesToCache([
			...build,
			'/back-squat-box-jump.mp4',
			'/bench-press-plyo-push-up.mp4',
			'/deadlift-broad-jump.mp4',
			'/pull-up-ball-slam.mp4'
		])
	);
};
