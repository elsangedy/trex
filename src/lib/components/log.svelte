<script lang="ts">
	import { onMount } from 'svelte';
	import { setDoc, type DocumentReference } from 'firebase/firestore';

	export let ref: DocumentReference;

	onMount(() => {
		setDoc(
			ref,
			{
				lastAccess: new Intl.DateTimeFormat('pt-BR', {
					dateStyle: 'short',
					timeStyle: 'medium'
				}).format(new Date())
			},
			{ merge: true }
		).catch(() => {
			console.log('Failed log');
		});
	});
</script>
