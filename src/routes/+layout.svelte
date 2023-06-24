<script lang="ts">
	import { onAuthStateChanged } from 'firebase/auth';
	import { FirebaseApp, User } from 'sveltefire';

	import * as IconButton from '@smui/icon-button';
	import * as TopAppBar from '@smui/top-app-bar';

	import { browser } from '$app/environment';

	import { auth, firestore } from '$lib/firebase';
	import { feedbacksOpen } from '$lib/stores/feedbacks';
	import { benchmarksOpen } from '$lib/stores/benchmarks';

	let topAppBar: TopAppBar.default;

	let loading: boolean = true;

	if (browser) {
		onAuthStateChanged(auth, () => {
			loading = false;
		});
	}
</script>

<FirebaseApp {auth} {firestore}>
	<TopAppBar.default bind:this={topAppBar} variant="standard">
		<TopAppBar.Row>
			<TopAppBar.Section>
				<TopAppBar.Title>STR & COND</TopAppBar.Title>
			</TopAppBar.Section>
			<User>
				<TopAppBar.Section align="end" toolbar>
					<IconButton.default class="material-icons" on:click={() => ($feedbacksOpen = true)}>
						chat
					</IconButton.default>
					<IconButton.default class="material-icons" on:click={() => ($benchmarksOpen = true)}>
						edit
					</IconButton.default>
				</TopAppBar.Section>
			</User>
		</TopAppBar.Row>
	</TopAppBar.default>

	<TopAppBar.AutoAdjust {topAppBar}>
		{#if !loading}
			<slot />
		{/if}
	</TopAppBar.AutoAdjust>
</FirebaseApp>
