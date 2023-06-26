<script lang="ts">
	import * as List from '@smui/list';
	import * as Accordion from '@smui-extra/accordion';

	import { exercises, program } from '$lib/data';
	import { benchmarks } from '$lib/stores/benchmarks';
	import Exercice from '$lib/components/exercice.svelte';

	const dayOfWeek = new Date().getDay();
</script>

<Accordion.default>
	{#each program as session}
		<Accordion.Panel open={dayOfWeek === session.dayOfWeek}>
			<Accordion.Header>{session.title}</Accordion.Header>
			<Accordion.Content class="accordion-content">
				<List.default twoLine>
					<Exercice {...exercises.warmupAndCore} kind="warmup" />
					<List.Separator />
					{#each session.exercises as exercise}
						<Exercice
							{...exercise}
							weight={exercise.benchmark ? $benchmarks[exercise.benchmark] : undefined}
						/>
						<List.Separator />
					{/each}
					<Exercice {...exercises.coolDown} />
				</List.default>
			</Accordion.Content>
		</Accordion.Panel>
	{/each}
</Accordion.default>

<style>
	:global(.accordion-content) {
		padding: 0 !important;
	}
</style>
