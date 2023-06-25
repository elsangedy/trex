<script lang="ts">
	import * as List from '@smui/list';
	import * as Accordion from '@smui-extra/accordion';

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
				<List.Separator />
				<Exercice {...exercises.cleanComplex} kind="skill" />
				<List.Separator />
				<Exercice {...exercises.hangClean} kind="lpo" prescription="3 x 5" />
				<List.Separator />
				<Exercice
					{...exercises.backSquat}
					kind="power"
					prescription="3 x 8"
					weightPercent={70}
					weight={$benchmarks.backSquat}
				/>
				<List.Separator />
				<Exercice {...exercises.pullUps} prescription="3 x MAX" />
				<Exercice {...exercises.oneLegRdl} prescription="3 x 8 + 8" />
				<Exercice {...exercises.shoulderComplex} prescription="3 x 8 + 8" />
				<List.Separator />
				<Exercice {...exercises.coolDown} />
			</List.default>
		</Accordion.Content>
	</Accordion.Panel>

	<Accordion.Panel open={dayOfWeek === 2}>
		<Accordion.Header>TERÇA</Accordion.Header>
		<Accordion.Content class="accordion-content">
			<List.default twoLine>
				<Exercice {...exercises.warmupAndCore} />
				<List.Separator />
				<Exercice {...exercises.shoulderAndCore} kind="skill" />
				<List.Separator />
				<Exercice
					{...exercises.deadlift}
					kind="power"
					prescription="3 x 8"
					weightPercent={70}
					weight={$benchmarks.deadlift}
				/>
				<List.Separator />
				<Exercice
					{...exercises.pushPress}
					kind="power"
					prescription="3 x 8"
					weightPercent={70}
					weight={$benchmarks.shoulderPress}
				/>
				<List.Separator />
				<Exercice {...exercises.lowToHighWoodchop} kind="warmup" prescription="3 x 8 + 8" />
				<Exercice {...exercises.bulgarianSquat} prescription="3 x 8 + 8" />
				<Exercice {...exercises.oneArmBenchPress} prescription="3 x 8 + 8" />
				<List.Separator />
				<Exercice {...exercises.coolDown} />
			</List.default>
		</Accordion.Content>
	</Accordion.Panel>

	<Accordion.Panel open={dayOfWeek === 4}>
		<Accordion.Header>QUINTA</Accordion.Header>
		<Accordion.Content class="accordion-content">
			<List.default twoLine>
				<Exercice {...exercises.warmupAndCore} />
				<List.Separator />
				<Exercice {...exercises.hipsAndCore} kind="skill" />
				<List.Separator />
				<Exercice {...exercises.powerClean} kind="lpo" prescription="3 x 5" />
				<List.Separator />
				<Exercice
					{...exercises.benchPress}
					kind="power"
					prescription="3 x 8"
					weightPercent={70}
					weight={$benchmarks.benchPress}
				/>
				<List.Separator />
				<Exercice {...exercises.splitSquat} prescription="3 x 8 + 8" />
				<Exercice {...exercises.splitStanceOneArmPress} prescription="3 x 8 + 8" />
				<Exercice {...exercises.oneLegHipThrust} prescription="3 x 8 + 8" />
				<List.Separator />
				<Exercice {...exercises.coolDown} />
			</List.default>
		</Accordion.Content>
	</Accordion.Panel>

	<Accordion.Panel open={dayOfWeek === 5}>
		<Accordion.Header>SEXTA</Accordion.Header>
		<Accordion.Content class="accordion-content">
			<List.default twoLine>
				<Exercice {...exercises.warmupAndCore} />
				<List.Separator />
				<Exercice {...exercises.shoulderAndCore} kind="skill" />
				<List.Separator />
				<Exercice
					{...exercises.frontSquat}
					kind="power"
					prescription="3 x 8"
					weightPercent={70}
					weight={$benchmarks.backSquat}
				/>
				<List.Separator />
				<Exercice
					{...exercises.bentOverRow}
					kind="power"
					prescription="3 x 8"
					weightPercent={70}
					weight={$benchmarks.benchPress}
				/>
				<List.Separator />
				<Exercice {...exercises.spidermanTwist} kind="warmup" prescription="3 x 8 + 8" />
				<Exercice {...exercises.lateralLungeAndStepUp} prescription="3 x 8 + 8" />
				<Exercice {...exercises.bisAndTris} prescription="3 x 10 + 10" />
				<List.Separator />
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
