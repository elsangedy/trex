<script lang="ts">
	import List from '@smui/list';
	import * as Accordion from '@smui-extra/accordion';

	import Exercice from '$lib/components/exercice.svelte';

	const dayOfWeek = new Date().getDay();
</script>

<div class="accordion-container">
	<Accordion.default>
		<Accordion.Panel open={dayOfWeek === 1}>
			<Accordion.Header>Segunda-feira</Accordion.Header>
			<Accordion.Content>
				<List twoLine>
					<Exercice name="Warmup / Core" sets={1} time="10min" media="/media/warmup.png" />
					<Exercice name="Clean Complex" sets={1} time="5min" />
					<Exercice name="Hang Power Clean" sets={5} reps={5} />
					<Exercice name="Back Squat" sets={5} reps={5} />
					<Exercice name="1 Arm DB Bench Press" sets={3} reps="8 + 8" />
					<Exercice name="Lateral Step Up" sets={3} reps="8 + 8" />
					<Exercice name="1 DB 1 Leg RDL" sets={3} reps="8 + 8" />
					<Exercice name="Kneeling Low To High Woodchop" sets={3} reps="12 + 12" />
					<Exercice name="Cool Down" sets={1} time="5min" />
				</List>
			</Accordion.Content>
		</Accordion.Panel>
		<Accordion.Panel open={dayOfWeek === 2}>
			<Accordion.Header>Terça-feira</Accordion.Header>
			<Accordion.Content>
				<List twoLine>
					<Exercice name="Warmup / Core" sets={1} time="10min" media="/media/warmup.png" />
					<Exercice name="ATY" sets={1} time="10min" />
					<Exercice name="Deadlift" sets={5} reps={5} />
					<Exercice name="Push Press" sets={5} reps={5} />
					<Exercice name="1 Arm DB Row" sets={3} reps="8 + 8" />
					<Exercice name="BB Split Squat" sets={3} reps="8 + 8" />
					<Exercice name="Shoulder Complex" sets={3} reps="8 + 8 + 8" />
					<Exercice name="AB Wheel Rollout" sets={3} reps={12} />
					<Exercice name="Cool Down" sets={1} time="5min" />
				</List>
			</Accordion.Content>
		</Accordion.Panel>
		<Accordion.Panel open={dayOfWeek === 4}>
			<Accordion.Header>Quinta-feira</Accordion.Header>
			<Accordion.Content>
				<List twoLine>
					<Exercice name="Warmup / Core" sets={1} time="10min" media="/media/warmup.png" />
					<Exercice name="Clean Complex" sets={1} time="10min" />
					<Exercice name="Hang Power Clean" sets={5} reps={5} />
					<Exercice name="Bench Press" sets={5} reps={5} />
					<Exercice name="Inverted Row" sets={3} reps={12} />
					<Exercice name="DB Bulgarian Squat" sets={3} reps="8 + 8" />
					<Exercice name="Banded Good Morning" sets={3} reps={12} />
					<Exercice name="Wall Ball Throw" sets={3} reps="8 + 8" />
					<Exercice name="Cool Down" sets={1} time="5min" />
				</List>
			</Accordion.Content>
		</Accordion.Panel>
		<Accordion.Panel open={dayOfWeek === 5}>
			<Accordion.Header>Sexta-feira</Accordion.Header>
			<Accordion.Content>
				<List twoLine>
					<Exercice name="Warmup / Core" sets={1} time="10min" media="/media/warmup.png" />
					<Exercice name="Tempo Squat" sets={1} time="10min" />
					<Exercice name="Front Squat" sets={5} reps={5} />
					<Exercice name="Pull Ups" sets={5} reps="MAX" />
					<Exercice name="Kneeling 1 Arm DB Press" sets={3} reps="8 + 8" />
					<Exercice name="KB Swings" sets={3} reps={12} />
					<Exercice name="1 Arm Overhead Carry" sets={3} reps="20 + 20" />
					<Exercice name="Banded Punch" sets={3} reps="8 + 8" />
					<Exercice name="Bicep Curls" sets={3} reps="10 + 10" />
					<Exercice name="Skull Crushers" sets={3} reps="10 + 10" />
					<Exercice name="Cool Down" sets={1} time="5min" />
				</List>
			</Accordion.Content>
		</Accordion.Panel>
	</Accordion.default>
</div>

<style>
	.accordion-container {
		margin: 1rem 0;
	}
</style>
