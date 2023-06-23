<script lang="ts">
	import { onAuthStateChanged, signOut } from 'firebase/auth';
	import { FirebaseApp, User } from 'sveltefire';

	import * as IconButton from '@smui/icon-button';
	import * as TopAppBar from '@smui/top-app-bar';

	import { browser } from '$app/environment';

	import { auth, firestore } from '$lib/firebase';
	import { benchmarksOpen } from '$lib/stores/benchmarks';

	let topAppBar: TopAppBar.default;

	let loading: boolean = true;

	if (browser) {
		onAuthStateChanged(auth, (user) => {
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
					<!-- <IconButton.default class="material-icons" on:click={() => ($benchmarksOpen = true)}> -->
					<IconButton.default class="material-icons" on:click={() => signOut(auth)}>
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
