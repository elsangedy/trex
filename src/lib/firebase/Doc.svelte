<script lang="ts">
	import type { DocumentReference } from 'firebase/firestore';

	import { docStore } from './store';

	interface $$Slots {
		default: { data: any; ref: DocumentReference };
		loading: {};
	}

	export let ref: string | DocumentReference;
	export let watch: boolean = false;
	export let initialData: any = undefined;

	let store = docStore(ref, watch, initialData);
</script>

{#if !!$store && !!store.ref}
	<slot data={$store} ref={store.ref} />
{:else}
	<slot name="loading" />
{/if}
