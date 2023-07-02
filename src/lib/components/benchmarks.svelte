<script lang="ts">
	import { doc, setDoc } from 'firebase/firestore';

	import * as Textfield from '@smui/textfield';
	import * as Button from '@smui/button';
	import * as Dialog from '@smui/dialog';

	import { browser } from '$app/environment';

	import { auth, firestore } from '$lib/firebase';
	import { benchmarksOpen } from '$lib/stores/benchmarks';

	const BENCHMARKS_CONFIG = [
		{
			id: 'frontSquat1Rm',
			label: 'Front Squat 1RM'
		},
		{
			id: 'benchPress1Rm',
			label: 'Bench Press 1RM'
		},
		{
			id: 'deadlift1Rm',
			label: 'Deadlift 1RM'
		},
		{
			id: 'shoulderPress1Rm',
			label: 'Shoulder Press 1RM'
		}
	];

	export let benchmarks: Record<string, number> = {};

	$: values = Object.assign({}, benchmarks);

	const athleteRef = doc(firestore, 'athletes', auth.currentUser?.email!);

	// TODO: delete when all athletes have their benchmarks updated
	if (browser) {
		const oldBenchmarks = localStorage.getItem('benchmarks');
		if (oldBenchmarks) {
			const oldBenchmarksData = JSON.parse(oldBenchmarks);
			setDoc(
				athleteRef,
				{
					benchmarks: {
						frontSquat1Rm: oldBenchmarksData.backSquat,
						benchPress1Rm: oldBenchmarksData.benchPress,
						deadlift1Rm: oldBenchmarksData.deadlift,
						shoulderPress1Rm: oldBenchmarksData.shoulderPress
					}
				},
				{ merge: true }
			)
				.then(() => {
					localStorage.removeItem('benchmarks');
				})
				.catch((e) => {
					console.error(e);
				});
		}
	}

	async function handleSubmit() {
		try {
			// get form data
			// @ts-ignore
			const formData = new FormData(this);
			const data: Record<string, number> = {};
			formData.forEach((value = '0', key) => {
				if (typeof value === 'string') {
					data[key] = parseInt(value, 10);
				}
			});

			// update athlete benchmarks
			await setDoc(athleteRef, { benchmarks: data }, { merge: true });

			alert('RMs atualizados com sucesso!');

			$benchmarksOpen = false;
		} catch (e: any) {
			alert(e.message);
		}
	}
</script>

<Dialog.default
	bind:open={$benchmarksOpen}
	escapeKeyAction=""
	scrimClickAction=""
	aria-labelledby="benchmarks-title"
	aria-describedby="benchmarks-content"
>
	<form method="POST" on:submit|preventDefault={handleSubmit}>
		<Dialog.Title id="benchmarks-title">Atualizar RMs</Dialog.Title>
		<Dialog.Content id="benchmarks-content">
			<p>Informe seus RMs para calcular a planilha</p>
			<div style="display: flex; flex-direction: column; gap: 1rem">
				{#each BENCHMARKS_CONFIG as benchmarkConfig}
					<Textfield.default
						value={values[benchmarkConfig.id] || ''}
						type="number"
						variant="outlined"
						label={benchmarkConfig.label}
						suffix="㎏"
						style="width: 100%;"
						input$name={benchmarkConfig.id}
						input$pattern="\d+"
						input$inputmode="numeric"
						input$min={1}
					/>
				{/each}
			</div>
		</Dialog.Content>
		<Dialog.Actions>
			<Button.default type="button" action="close">
				<Button.Label>Fechar</Button.Label>
			</Button.default>
			<Button.default type="submit" action="" variant="raised">
				<Button.Label>Salvar</Button.Label>
			</Button.default>
		</Dialog.Actions>
	</form>
</Dialog.default>
