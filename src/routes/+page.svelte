<script lang="ts">
	import * as List from '@smui/list';
	import * as Accordion from '@smui-extra/accordion';
	import * as Separator from '@smui/list/src/Separator.svelte';

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
				<Exercice name="Clean Complex" kind="skill" />
				<Separator.default />
				<Exercice
					name="Clean Pull"
					sets={5}
					reps={2}
					kind="power"
					media={`${IMAGE_URL_PREFIX}/clean-pull.gif`}
				/>
				<Separator.default />
				<Exercice
					name="Back Squat"
					sets={3}
					reps={3}
					kind="power"
					media={`${IMAGE_URL_PREFIX}/back-squat.gif`}
				/>
				<Separator.default />
				<Exercice
					name="1 Arm DB Bench Press"
					sets={3}
					reps="8 + 8"
					media={`${IMAGE_URL_PREFIX}/1-arm-db-bench-press.gif`}
				/>
				<Exercice
					name="Lateral Lunges"
					sets={3}
					reps="8 + 8"
					media={`${IMAGE_URL_PREFIX}/lateral-lunges.gif`}
				/>
				<Separator.default />
				<Exercice
					name="2 DB 1 Leg RDL"
					sets={3}
					reps="8 + 8"
					media={`${IMAGE_URL_PREFIX}/2-db-1-leg-rdl.gif`}
				/>
				<Exercice
					name="Band Spiderman Twist"
					sets={3}
					reps="8 + 8"
					media={`${IMAGE_URL_PREFIX}/band-spiderman-twist.gif`}
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
				<Exercice name="Warmup / Core" media={`${IMAGE_URL_PREFIX}/warmup.png`} kind="warmup" />
				<Separator.default />
				<Exercice
					name="Deadlift"
					sets={3}
					reps={3}
					kind="power"
					media={`${IMAGE_URL_PREFIX}/deadlift-side.gif`}
				/>
				<Separator.default />
				<Exercice
					name="Push Press"
					sets={3}
					reps={3}
					kind="power"
					media={`${IMAGE_URL_PREFIX}/push-press.gif`}
				/>
				<Separator.default />
				<Exercice
					name="1 Arm DB Row"
					sets={3}
					reps="8 + 8"
					media={`${IMAGE_URL_PREFIX}/1-arm-db-row.gif`}
				/>
				<Exercice
					name="BB Backward Lunges"
					sets={3}
					reps="8 + 8"
					media={`${IMAGE_URL_PREFIX}/bb-backward-lunges.gif`}
				/>
				<Separator.default />
				<Exercice
					name="Shoulder Complex"
					sets={3}
					reps="8 + 8 + 8"
					media={`${IMAGE_URL_PREFIX}/shoulder-complex-front.gif`}
				/>
				<Exercice
					name="AB Wheel Rollout"
					sets={3}
					reps={12}
					media={`${IMAGE_URL_PREFIX}/ab-wheel-rollout.gif`}
				/>
				<Separator.default />
				<Exercice name="Cool Down" />
			</List.default>
		</Accordion.Content>
	</Accordion.Panel>
	<Accordion.Panel open={dayOfWeek === 4}>
		<Accordion.Header>Quinta-feira</Accordion.Header>
		<Accordion.Content class="accordion-content">
			<List.default twoLine>
				<Exercice name="Warmup / Core" media={`${IMAGE_URL_PREFIX}/warmup.png`} kind="warmup" />
				<Separator.default />
				<Exercice name="Clean Complex" kind="skill" />
				<Separator.default />
				<Exercice
					name="Clean"
					sets={5}
					reps={2}
					kind="power"
					media={`${IMAGE_URL_PREFIX}/hang-squat-clean.gif`}
				/>
				<Separator.default />
				<Exercice
					name="Bench Press"
					sets={3}
					reps={3}
					kind="power"
					media={`${IMAGE_URL_PREFIX}/bench-press.gif`}
				/>
				<Separator.default />
				<Exercice
					name="Inverted Row"
					sets={3}
					reps={12}
					media={`${IMAGE_URL_PREFIX}/inverted-row.gif`}
				/>
				<Exercice
					name="DB Bulgarian Squat"
					sets={3}
					reps="8 + 8"
					media={`${IMAGE_URL_PREFIX}/db-bulgarian-squat.gif`}
				/>
				<Separator.default />
				<Exercice
					name="BB Good Morning"
					sets={3}
					reps={12}
					media={`${IMAGE_URL_PREFIX}/bb-good-morning.gif`}
				/>
				<Exercice
					name="Lateral Wall Ball Throw"
					sets={3}
					reps="8 + 8"
					media={`${IMAGE_URL_PREFIX}/lateral-wall-ball-throw.gif`}
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
				<Exercice name="Tempo Squat" kind="skill" />
				<Separator.default />
				<Exercice
					name="Front Squat"
					sets={3}
					reps={3}
					kind="power"
					media={`${IMAGE_URL_PREFIX}/front-squat.gif`}
				/>
				<Separator.default />
				<Exercice
					name="Pull Ups"
					sets={4}
					reps="MAX"
					kind="power"
					media={`${IMAGE_URL_PREFIX}/pull-ups.gif`}
				/>
				<Separator.default />
				<Exercice
					name="Kneeling 1 Arm DB Press"
					sets={3}
					reps="8 + 8"
					media={`${IMAGE_URL_PREFIX}/kneeling-1-arm-db-press.gif`}
				/>
				<Exercice name="KB Swings" sets={3} reps={12} media={`${IMAGE_URL_PREFIX}/kb-swings.gif`} />
				<Separator.default />
				<Exercice
					name="1 Side Suitcase Carry"
					sets={3}
					reps="20 + 20"
					media={`${IMAGE_URL_PREFIX}/1-side-suitcase-carry.gif`}
				/>
				<Exercice
					name="Banded Twist"
					sets={3}
					reps="8 + 8"
					media={`${IMAGE_URL_PREFIX}/banded-twist.gif`}
				/>
				<Separator.default />
				<Exercice
					name="Bicep Curls"
					sets={3}
					reps="10 + 10"
					media={`${IMAGE_URL_PREFIX}/bicep-curls.gif`}
				/>
				<Exercice
					name="Skull Crushers"
					sets={3}
					reps="10 + 10"
					media={`${IMAGE_URL_PREFIX}/skull-crushers.gif`}
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
