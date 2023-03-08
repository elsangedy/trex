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
				<Exercice name="Warmup / Core" media="/media/warmup.png" kind="warmup" />
				<Separator.default />
				<Exercice name="Clean Complex" kind="skill" />
				<Separator.default />
				<Exercice
					name="Hang Power Clean"
					sets={5}
					reps={5}
					kind="power"
					media="/media/hang-power-clean.gif"
				/>
				<Separator.default />
				<Exercice name="Back Squat" sets={5} reps={5} kind="power" media="/media/back-squat.gif" />
				<Separator.default />
				<Exercice
					name="1 Arm DB Bench Press"
					sets={3}
					reps="8 + 8"
					media="/media/1-arm-db-bench-press.gif"
				/>
				<Exercice name="Lateral Step Up" sets={3} reps="8 + 8" media="/media/lateral-step-up.gif" />
				<Separator.default />
				<Exercice
					name="1 DB 1 Leg RDL"
					sets={3}
					reps="8 + 8"
					media="/media/1-db-1-leg-rdl-side.gif"
				/>
				<Exercice
					name="Kneeling Low To High Woodchop"
					sets={3}
					reps="12 + 12"
					media="/media/kneeling-low-to-high-woodchop.gif"
				/>
				<Separator.default />
				<Exercice name="Cool Down" />
			</List.default>
		</Accordion.Content>
	</Accordion.Panel>
	<Accordion.Panel open={dayOfWeek === 2}>
		<Accordion.Header>Terça-feira</Accordion.Header>
		<Accordion.Content class="accordion-content">
			<List.default twoLine>
				<Exercice name="Warmup / Core" media="/media/warmup.png" kind="warmup" />
				<Separator.default />
				<Exercice name="Deadlift" sets={5} reps={5} kind="power" media="/media/deadlift-side.gif" />
				<Separator.default />
				<Exercice name="Push Press" sets={5} reps={5} kind="power" media="/media/push-press.gif" />
				<Separator.default />
				<Exercice name="1 Arm DB Row" sets={3} reps="8 + 8" media="/media/1-arm-db-row.gif" />
				<Exercice name="BB Split Squat" sets={3} reps="8 + 8" media="/media/bb-split-squat.gif" />
				<Separator.default />
				<Exercice
					name="Shoulder Complex"
					sets={3}
					reps="8 + 8 + 8"
					media="/media/shoulder-complex-front.gif"
				/>
				<Exercice name="AB Wheel Rollout" sets={3} reps={12} media="/media/ab-wheel-rollout.gif" />
				<Separator.default />
				<Exercice name="Cool Down" />
			</List.default>
		</Accordion.Content>
	</Accordion.Panel>
	<Accordion.Panel open={dayOfWeek === 4}>
		<Accordion.Header>Quinta-feira</Accordion.Header>
		<Accordion.Content class="accordion-content">
			<List.default twoLine>
				<Exercice name="Warmup / Core" media="/media/warmup.png" kind="warmup" />
				<Separator.default />
				<Exercice name="Clean Complex" kind="skill" />
				<Separator.default />
				<Exercice
					name="Hang Squat Clean"
					sets={5}
					reps={5}
					kind="power"
					media="/media/hang-squat-clean.gif"
				/>
				<Separator.default />
				<Exercice
					name="Bench Press"
					sets={5}
					reps={5}
					kind="power"
					media="/media/bench-press.gif"
				/>
				<Separator.default />
				<Exercice name="Inverted Row" sets={3} reps={12} media="/media/inverted-row.gif" />
				<Exercice
					name="DB Bulgarian Squat"
					sets={3}
					reps="8 + 8"
					media="/media/db-bulgarian-squat.gif"
				/>
				<Separator.default />
				<Exercice
					name="Banded Good Morning"
					sets={3}
					reps={12}
					media="/media/banded-good-morning.gif"
				/>
				<Exercice name="Wall Ball Throw" sets={3} reps="8 + 8" media="/media/wall-ball-throw.gif" />
				<Separator.default />
				<Exercice name="Cool Down" />
			</List.default>
		</Accordion.Content>
	</Accordion.Panel>
	<Accordion.Panel open={dayOfWeek === 5}>
		<Accordion.Header>Sexta-feira</Accordion.Header>
		<Accordion.Content class="accordion-content">
			<List.default twoLine>
				<Exercice name="Warmup / Core" media="/media/warmup.png" kind="warmup" />
				<Separator.default />
				<Exercice
					name="Front Squat"
					sets={5}
					reps={5}
					kind="power"
					media="/media/front-squat.gif"
				/>
				<Separator.default />
				<Exercice name="Pull Ups" sets={5} reps="MAX" kind="power" media="/media/pull-ups.gif" />
				<Separator.default />
				<Exercice
					name="Kneeling 1 Arm DB Press"
					sets={3}
					reps="8 + 8"
					media="/media/kneeling-1-arm-db-press.gif"
				/>
				<Exercice name="KB Swings" sets={3} reps={12} media="/media/kb-swings.gif" />
				<Separator.default />
				<Exercice
					name="1 Arm Overhead Carry"
					sets={3}
					reps="20 + 20"
					media="/media/1-arm-overhead-carry.gif"
				/>
				<Exercice name="Banded Punch" sets={3} reps="8 + 8" media="/media/banded-punch.gif" />
				<Separator.default />
				<Exercice name="Bicep Curls" sets={3} reps="10 + 10" media="/media/bicep-curls.gif" />
				<Exercice name="Skull Crushers" sets={3} reps="10 + 10" media="/media/skull-crushers.gif" />
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
