<script lang="ts">
	import * as TopAppBar from '@smui/top-app-bar';
	import * as IconButton from '@smui/icon-button';

	import Login from '$lib/components/login.svelte';
	import Program from '$lib/components/program.svelte';
	import Feedback from '$lib/components/feedback.svelte';
	import Benchmarks from '$lib/components/benchmarks.svelte';

	import Doc from '$lib/firebase/Doc.svelte';
	import User from '$lib/firebase/User.svelte';

	import { feedbacksOpen } from '$lib/stores/feedbacks';
	import { benchmarksOpen } from '$lib/stores/benchmarks';

	let topAppBar: TopAppBar.default;
</script>

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
	<User let:user>
		<Doc ref={`athletes/${user.email}`} let:data={athlete} watch>
			<Program benchmarks={athlete.benchmarks} />

			<Feedback />

			<Benchmarks benchmarks={athlete.benchmarks} />

			<p slot="loading">Carregando dados do atleta...</p>
		</Doc>

		<p slot="loading">Verificando atenticação...</p>

		<div slot="signedOut">
			<Login />
		</div>
	</User>
</TopAppBar.AutoAdjust>
