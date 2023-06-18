<script lang="ts">
	import * as List from '@smui/list';
	import * as Accordion from '@smui-extra/accordion';
	import * as Separator from '@smui/list/src/Separator.svelte';

	import { exercises } from '$lib/data';
	import { benchmarks } from '$lib/stores/benchmarks';
	import Exercice from '$lib/components/exercice.svelte';

	const dayOfWeek = new Date().getDay();
</script>

<Accordion.default>
	<Accordion.Panel open={dayOfWeek === 1}>
		<Accordion.Header>SEGUNDA</Accordion.Header>
		<Accordion.Content class="accordion-content">
			<List.default twoLine>
				<Exercice {...exercises.warmupAndCore} />
				<Separator.default />
				<Exercice {...exercises.cleanComplex} kind="skill" />
				<Separator.default />
				<Exercice {...exercises.hangClean} kind="lpo" prescription="3 x 5" />
				<Separator.default />
				<Exercice
					{...exercises.backSquat}
					kind="power"
					prescription="3 x 8"
					weightPercent={65}
					weight={$benchmarks.backSquat}
				/>
				<Separator.default />
				<Exercice {...exercises.pullUps} prescription="3 x MAX" />
				<Separator.default />
				<Exercice {...exercises.oneLegRdl} prescription="3 x 8 + 8" />
				<Separator.default />
				<Exercice {...exercises.shoulderComplex} prescription="3 x 8 + 8" />
				<Separator.default />
				<Exercice {...exercises.coolDown} />
			</List.default>
		</Accordion.Content>
	</Accordion.Panel>
	<Accordion.Panel open={dayOfWeek === 2}>
		<Accordion.Header>TERÇA</Accordion.Header>
		<Accordion.Content class="accordion-content">
			<List.default twoLine>
				<Exercice {...exercises.warmupAndCore} />
				<Separator.default />
				<Exercice {...exercises.shoulderAndCore} kind="skill" />
				<Separator.default />
				<Exercice
					{...exercises.deadlift}
					kind="power"
					prescription="3 x 8"
					weightPercent={65}
					weight={$benchmarks.deadlift}
				/>
				<Separator.default />
				<Exercice
					{...exercises.pushPress}
					kind="power"
					prescription="3 x 8"
					weightPercent={65}
					weight={$benchmarks.shoulderPress}
				/>
				<Separator.default />
				<Exercice {...exercises.lowToHighWoodchop} kind="warmup" prescription="3 x 8 + 8" />
				<Separator.default />
				<Exercice {...exercises.bulgarianSquat} prescription="3 x 8 + 8" />
				<Separator.default />
				<Exercice {...exercises.oneArmBenchPress} prescription="3 x 8 + 8" />
				<Separator.default />
				<Exercice {...exercises.coolDown} />
			</List.default>
		</Accordion.Content>
	</Accordion.Panel>
	<Accordion.Panel open={dayOfWeek === 4}>
		<Accordion.Header>QUINTA</Accordion.Header>
		<Accordion.Content class="accordion-content">
			<List.default twoLine>
				<Exercice {...exercises.warmupAndCore} />
				<Separator.default />
				<Exercice {...exercises.hipsAndCore} kind="skill" />
				<Separator.default />
				<Exercice {...exercises.powerClean} kind="lpo" prescription="3 x 5" />
				<Separator.default />
				<Exercice
					{...exercises.benchPress}
					kind="power"
					prescription="3 x 8"
					weightPercent={65}
					weight={$benchmarks.benchPress}
				/>
				<Separator.default />
				<Exercice {...exercises.splitSquat} prescription="3 x 8 + 8" />
				<Separator.default />
				<Exercice {...exercises.splitStanceOneArmPress} prescription="3 x 8 + 8" />
				<Separator.default />
				<Exercice {...exercises.oneLegHipThrust} prescription="3 x 8 + 8" />
				<Separator.default />
				<Exercice {...exercises.coolDown} />
			</List.default>
		</Accordion.Content>
	</Accordion.Panel>
	<Accordion.Panel open={dayOfWeek === 5}>
		<Accordion.Header>SEXTA</Accordion.Header>
		<Accordion.Content class="accordion-content">
			<List.default twoLine>
				<Exercice {...exercises.warmupAndCore} />
				<Separator.default />
				<Exercice {...exercises.shoulderAndCore} kind="skill" />
				<Separator.default />
				<Exercice
					{...exercises.frontSquat}
					kind="power"
					prescription="3 x 8"
					weightPercent={65}
					weight={$benchmarks.backSquat}
				/>
				<Separator.default />
				<Exercice
					{...exercises.bentOverRow}
					kind="power"
					prescription="3 x 8"
					weightPercent={65}
					weight={$benchmarks.benchPress}
				/>
				<Separator.default />
				<Exercice {...exercises.spidermanTwist} kind="warmup" prescription="3 x 8 + 8" />
				<Separator.default />
				<Exercice {...exercises.lateralLungeAndStepUp} prescription="3 x 8 + 8" />
				<Separator.default />
				<Exercice {...exercises.bisAndTris} prescription="3 x 8 + 8" />
				<Separator.default />
				<Exercice {...exercises.coolDown} />
			</List.default>
		</Accordion.Content>
	</Accordion.Panel>
</Accordion.default>

<style>
	:global(.accordion-content) {
		padding: 0 !important;
	}
</style>
