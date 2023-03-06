<script lang="ts">
	import * as List from '@smui/list';
	import * as Accordion from '@smui-extra/accordion';
	import * as Separator from '@smui/list/src/Separator.svelte';

	import Exercice from '$lib/components/exercice.svelte';

	const dayOfWeek = new Date().getDay();
</script>

<Accordion.default>
	<Accordion.Panel open={dayOfWeek === 1}>
		<Accordion.Header>Segunda-feira</Accordion.Header>
		<Accordion.Content class="accordion-content">
			<List.default twoLine>
				<Exercice
					name="Warmup / Core"
					sets={1}
					time="10min"
					media="/media/warmup.png"
					kind="warmup"
				/>
				<Separator.default />
				<Exercice name="Clean Complex" sets={1} time="5min" kind="skill" />
				<Separator.default />
				<Exercice name="Hang Power Clean" sets={5} reps={5} kind="power" />
				<Separator.default />
				<Exercice name="Back Squat" sets={5} reps={5} kind="power" />
				<Separator.default />
				<Exercice name="1 Arm DB Bench Press" sets={3} reps="8 + 8" />
				<Exercice name="Lateral Step Up" sets={3} reps="8 + 8" />
				<Separator.default />
				<Exercice name="1 DB 1 Leg RDL" sets={3} reps="8 + 8" />
				<Exercice name="Kneeling Low To High Woodchop" sets={3} reps="12 + 12" />
				<Separator.default />
				<Exercice name="Cool Down" sets={1} time="5min" />
			</List.default>
		</Accordion.Content>
	</Accordion.Panel>
	<Accordion.Panel open={dayOfWeek === 2}>
		<Accordion.Header>Terça-feira</Accordion.Header>
		<Accordion.Content class="accordion-content">
			<List.default twoLine>
				<Exercice
					name="Warmup / Core"
					sets={1}
					time="10min"
					media="/media/warmup.png"
					kind="warmup"
				/>
				<Separator.default />
				<Exercice name="ATY" sets={1} time="10min" kind="skill" />
				<Separator.default />
				<Exercice name="Deadlift" sets={5} reps={5} kind="power" />
				<Separator.default />
				<Exercice name="Push Press" sets={5} reps={5} kind="power" />
				<Separator.default />
				<Exercice name="1 Arm DB Row" sets={3} reps="8 + 8" />
				<Exercice name="BB Split Squat" sets={3} reps="8 + 8" />
				<Separator.default />
				<Exercice name="Shoulder Complex" sets={3} reps="8 + 8 + 8" />
				<Exercice name="AB Wheel Rollout" sets={3} reps={12} />
				<Separator.default />
				<Exercice name="Cool Down" sets={1} time="5min" />
			</List.default>
		</Accordion.Content>
	</Accordion.Panel>
	<Accordion.Panel open={dayOfWeek === 4}>
		<Accordion.Header>Quinta-feira</Accordion.Header>
		<Accordion.Content class="accordion-content">
			<List.default twoLine>
				<Exercice
					name="Warmup / Core"
					sets={1}
					time="10min"
					media="/media/warmup.png"
					kind="warmup"
				/>
				<Separator.default />
				<Exercice name="Clean Complex" sets={1} time="10min" kind="skill" />
				<Separator.default />
				<Exercice name="Hang Power Clean" sets={5} reps={5} kind="power" />
				<Separator.default />
				<Exercice name="Bench Press" sets={5} reps={5} kind="power" />
				<Separator.default />
				<Exercice name="Inverted Row" sets={3} reps={12} />
				<Exercice name="DB Bulgarian Squat" sets={3} reps="8 + 8" />
				<Separator.default />
				<Exercice name="Banded Good Morning" sets={3} reps={12} />
				<Exercice name="Wall Ball Throw" sets={3} reps="8 + 8" />
				<Separator.default />
				<Exercice name="Cool Down" sets={1} time="5min" />
			</List.default>
		</Accordion.Content>
	</Accordion.Panel>
	<Accordion.Panel open={dayOfWeek === 5}>
		<Accordion.Header>Sexta-feira</Accordion.Header>
		<Accordion.Content class="accordion-content">
			<List.default twoLine>
				<Exercice
					name="Warmup / Core"
					sets={1}
					time="10min"
					media="/media/warmup.png"
					kind="warmup"
				/>
				<Separator.default />
				<Exercice name="Tempo Squat" sets={1} time="10min" kind="skill" />
				<Separator.default />
				<Exercice name="Front Squat" sets={5} reps={5} kind="power" />
				<Separator.default />
				<Exercice name="Pull Ups" sets={5} reps="MAX" kind="power" />
				<Separator.default />
				<Exercice name="Kneeling 1 Arm DB Press" sets={3} reps="8 + 8" />
				<Exercice name="KB Swings" sets={3} reps={12} />
				<Separator.default />
				<Exercice name="1 Arm Overhead Carry" sets={3} reps="20 + 20" />
				<Exercice name="Banded Punch" sets={3} reps="8 + 8" />
				<Separator.default />
				<Exercice name="Bicep Curls" sets={3} reps="10 + 10" />
				<Exercice name="Skull Crushers" sets={3} reps="10 + 10" />
				<Separator.default />
				<Exercice name="Cool Down" sets={1} time="5min" />
			</List.default>
		</Accordion.Content>
	</Accordion.Panel>
</Accordion.default>

<style>
	:global(.accordion-content) {
		padding: 0 !important;
	}
</style>
