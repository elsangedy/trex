<script lang="ts">
	import { onDestroy } from 'svelte';
	import { doc, setDoc } from 'firebase/firestore';

	import * as Button from '@smui/button';
	import * as Dialog from '@smui/dialog';
	import * as Radio from '@smui/radio';
	import * as FormField from '@smui/form-field';

	import { auth, docStore, firestore } from '$lib/firebase';
	import { feedbacksOpen } from '$lib/stores/feedbacks';

	const FEEDBACK_RECOVERY_CONFIG = [
		{
			value: '1',
			label: 'Nenhuma Recuperação'
		},
		{
			value: '2',
			label: 'Muito Pouco Recuperado'
		},
		{
			value: '3',
			label: 'Pouco Recuperado'
		},
		{
			value: '4',
			label: 'Recuperação Moderada'
		},
		{
			value: '5',
			label: 'Boa Recuperação'
		},
		{
			value: '6',
			label: 'Recuperação Muito Boa'
		},
		{
			value: '7',
			label: 'Recuperação Muito Boa'
		},
		{
			value: '8',
			label: 'Recuperação Muito Boa'
		},
		{
			value: '9',
			label: 'Recuperação Muito Boa'
		},
		{
			value: '10',
			label: 'Recuperado'
		}
	];

	const FEEDBACK_EFFORT_CONFIG = [
		{
			value: '1',
			label: 'Muito Leve'
		},
		{
			value: '2',
			label: 'Leve'
		},
		{
			value: '3',
			label: 'Leve'
		},
		{
			value: '4',
			label: 'Moderado'
		},
		{
			value: '5',
			label: 'Moderado'
		},
		{
			value: '6',
			label: 'Moderado'
		},
		{
			value: '7',
			label: 'Intenso'
		},
		{
			value: '8',
			label: 'Intenso'
		},
		{
			value: '9',
			label: 'Muito Intenso'
		},
		{
			value: '10',
			label: 'Máximo'
		}
	];

	const date = new Date();
	const dateId =
		date.getFullYear() +
		'-' +
		(date.getMonth() + 1).toString().padStart(2, '0') +
		'-' +
		date.getDate().toString().padStart(2, '0');
	const userId = auth.currentUser?.email!;

	const feedbackRef = doc(firestore, 'feedbacks', dateId);

	let recovery = '';
	let effort = '';
	const store = docStore(feedbackRef, false, {} as Record<string, any>);
	const unsubscribe = store.subscribe((value) => {
		const data = value?.[userId];
		recovery = data?.recovery || '';
		effort = data?.effort || '';
	});
	onDestroy(() => {
		unsubscribe();
	});

	let loading = false;

	const handleSubmit = async () => {
		if (!recovery) {
			alert('Informe como está sua reciperação');
			return;
		}
		if (!effort) {
			alert('Informe como foi seu treino');
			return;
		}
		loading = true;
		try {
			await setDoc(
				feedbackRef,
				{ [userId]: { name: auth.currentUser?.displayName, recovery, effort } },
				{ merge: true }
			);
			alert('Obrigado pelo feedback!');
		} catch (error) {
			alert('Erro ao enviar feedback');
		} finally {
			loading = false;
			$feedbacksOpen = false;
		}
	};
</script>

<Dialog.default
	bind:open={$feedbacksOpen}
	aria-labelledby="feedback-title"
	aria-describedby="feedback-content"
>
	<Dialog.Title id="feedback-title">Feedback</Dialog.Title>
	<Dialog.Content id="feedback-content">
		<p>COMO ESTÁ SUA RECUPERAÇÃO?</p>
		{#each FEEDBACK_RECOVERY_CONFIG as option}
			<FormField.default style="display: flex">
				<Radio.default bind:group={recovery} value={option.value} />
				<span slot="label">{option.value.padStart(2, '0')} - {option.label}</span>
			</FormField.default>
		{/each}
		<hr />
		<p>COMO FOI O TREINO HOJE?</p>
		{#each FEEDBACK_EFFORT_CONFIG as option}
			<FormField.default style="display: flex">
				<Radio.default bind:group={effort} value={option.value} />
				<span slot="label">{option.value.padStart(2, '0')} - {option.label}</span>
			</FormField.default>
		{/each}
	</Dialog.Content>
	<Dialog.Actions>
		<Button.default action="close" disabled={loading}>
			<Button.Label>Fechar</Button.Label>
		</Button.default>
		<Button.default action="" variant="raised" disabled={loading} on:click={handleSubmit}>
			<Button.Label>Enviar</Button.Label>
		</Button.default>
	</Dialog.Actions>
</Dialog.default>
