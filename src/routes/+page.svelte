<script lang="ts">
	import * as List from '@smui/list';
	import * as Accordion from '@smui-extra/accordion';
	import * as Separator from '@smui/list/src/Separator.svelte';

	import { benchmarks } from '$lib/stores/benchmarks';
	import Exercice from '$lib/components/exercice.svelte';

	const dayOfWeek = new Date().getDay();

	const IMAGE_URL_PREFIX = 'https://ik.imagekit.io/29ddu02vk/trex';
</script>

<Accordion.default>
	<Accordion.Panel open={dayOfWeek === 1}>
		<Accordion.Header>Segunda-feira</Accordion.Header>
		<Accordion.Content class="accordion-content">
			<List.default twoLine>
				<Exercice name="Warmup / Core" media={`${IMAGE_URL_PREFIX}/warmup.png`} kind="warmup" />
				<Separator.default />
				<Exercice name="1 Arm Fly" prescription="3 x 10 + 10reps" />
				<Separator.default />
				<Exercice name="Copenhagen Iso Hold" prescription="3 x 30~45seg / lado" />
				<Separator.default />
				<Exercice name="Inverted Row Iso Hold" prescription="3 x 30~45seg / lado" />
				<Separator.default />
				<Exercice name="LPO Complex" kind="power" />
				<Separator.default />
				<Exercice name="Cool Down" />
			</List.default>
		</Accordion.Content>
	</Accordion.Panel>
	<Accordion.Panel open={dayOfWeek === 3}>
		<Accordion.Header>Quarta-feira</Accordion.Header>
		<Accordion.Content class="accordion-content">
			<List.default twoLine>
				<Exercice name="Warmup / Core" media={`${IMAGE_URL_PREFIX}/warmup.png`} kind="warmup" />
				<Separator.default />
				<Exercice name="Banded Rotation" prescription="3 x 10 + 10reps" />
				<Separator.default />
				<Exercice name="1 Leg Curl" prescription="3 x 10 + 10reps" />
				<Separator.default />
				<Exercice
					name="Back Squat"
					prescription="4 x 10reps"
					kind="power"
					media={`${IMAGE_URL_PREFIX}/back-squat.gif`}
					weightPercent={50}
					weight={$benchmarks.backSquat}
				/>
				<Separator.default />
				<Exercice
					name="Bench Press"
					prescription="4 x 10reps"
					kind="power"
					media={`${IMAGE_URL_PREFIX}/bench-press.gif`}
					weightPercent={50}
					weight={$benchmarks.benchPress}
				/>
				<Separator.default />
				<Exercice
					name="Pull Ups"
					prescription="4 x MAXreps"
					kind="skill"
					media={`${IMAGE_URL_PREFIX}/pull-ups.gif`}
				/>
				<Separator.default />
				<Exercice name="Cool Down" />
			</List.default>
		</Accordion.Content>
	</Accordion.Panel>
	<Accordion.Panel open={dayOfWeek === 5}>
		<Accordion.Header>Sexta-feira</Accordion.Header>
		<Accordion.Content class="accordion-content">
			<List.default twoLine>
				<Exercice name="Warmup / Core" media={`${IMAGE_URL_PREFIX}/warmup.png`} kind="warmup" />
				<Separator.default />
				<Exercice name="Reverse Hyper" prescription="3 x 30~45seg / lado" />
				<Separator.default />
				<Exercice name="1 Leg Box Squat" prescription="3 x 10 + 10reps" />
				<Separator.default />
				<Exercice
					name="Deadlift"
					prescription="4 x 10reps"
					kind="power"
					media={`${IMAGE_URL_PREFIX}/deadlift.gif`}
					weightPercent={50}
					weight={$benchmarks.deadlift}
				/>
				<Separator.default />
				<Exercice
					name="Shoulder Press"
					prescription="4 x 10reps"
					kind="power"
					media={`${IMAGE_URL_PREFIX}/shoulder-press.gif`}
					weightPercent={50}
					weight={$benchmarks.shoulderPress}
				/>
				<Separator.default />
				<Exercice
					name="KB Swings"
					prescription="4 x 10reps"
					kind="skill"
					media={`${IMAGE_URL_PREFIX}/kb-swings.gif`}
				/>
				<Separator.default />
				<Exercice name="Cool Down" />
			</List.default>
		</Accordion.Content>
	</Accordion.Panel>
</Accordion.default>

<style>
	:global(.accordion-content) {
		padding: 0 !important;
	}
</style>
