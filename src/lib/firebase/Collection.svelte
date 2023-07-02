<script lang="ts">
	import type { CollectionReference, Query } from 'firebase/firestore';

	import { collectionStore } from './store';

	interface $$Slots {
		default: { data: any[]; ref: CollectionReference | Query | null };
		loading: {};
	}

	export let ref: string | CollectionReference | Query;
	export let watch: boolean = false;
	export let initialData: any = undefined;

	let store = collectionStore(ref, watch, initialData);
</script>

{#if !!$store}
	<slot data={$store} ref={store.ref} />
{:else}
	<slot name="loading" />
{/if}
