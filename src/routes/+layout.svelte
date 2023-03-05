<script lang="ts">
	// import IconButton from '@smui/icon-button';
	import * as TopAppBar from '@smui/top-app-bar';

	// import { benchmarks, benchmarksOpen } from '$lib/stores/benchmarks';

	// import Benchmarks from '$lib/components/benchmarks.svelte';

	let topAppBar: TopAppBar.default;
</script>

<TopAppBar.default bind:this={topAppBar} variant="standard">
	<TopAppBar.Row>
		<TopAppBar.Section>
			<TopAppBar.Title>STR & COND</TopAppBar.Title>
		</TopAppBar.Section>
		<!-- <TopAppBar.Section align="end" toolbar>
			<IconButton class="material-icons" on:click={() => ($benchmarksOpen = true)}>edit</IconButton>
		</TopAppBar.Section> -->
	</TopAppBar.Row>
</TopAppBar.default>

<TopAppBar.AutoAdjust {topAppBar}>
	<slot />
</TopAppBar.AutoAdjust>

<!-- <Benchmarks /> -->
