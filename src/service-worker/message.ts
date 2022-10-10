export default (event: ExtendableEvent) => {
	if (event?.data?.type === 'skipWaiting') {
		self.skipWaiting();
	}
};
