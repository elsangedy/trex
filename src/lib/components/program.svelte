<script lang="ts">
	import * as List from '@smui/list';
	import * as Accordion from '@smui-extra/accordion';

	import { exercises, fullProgram, shortProgram } from '$lib/data';

	import Exercice from './exercice.svelte';

	export let benchmarks: Record<string, number> = {};
	export let program: 'full' | 'short' | undefined = 'full';
	const sessions = program === 'full' ? fullProgram : shortProgram;

	const dayOfWeek = new Date().getDay();
</script>

<Accordion.default>
	{#each sessions as session}
		<Accordion.Panel open={dayOfWeek === session.dayOfWeek}>
			<Accordion.Header>{session.title}</Accordion.Header>
			<Accordion.Content class="accordion-content">
				<List.default twoLine>
					<Exercice {...exercises.warmupAndCore} />
					<List.Separator />
					{#each session.exercises as exercise}
						<Exercice
							name={exercise.name}
							media={exercise.media}
							kind={exercise.kind}
							prescription={exercise.prescription}
							weight={exercise.benchmark ? benchmarks[exercise.benchmark] : undefined}
							weightText={exercise.weightText}
							weightPercent={exercise.weightPercent}
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
