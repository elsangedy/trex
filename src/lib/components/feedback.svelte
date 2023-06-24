<script lang="ts">
	import * as Button from '@smui/button';
	import * as Dialog from '@smui/dialog';
	import * as Radio from '@smui/radio';
	import * as FormField from '@smui/form-field';

	import { feedbacksOpen } from '$lib/stores/feedbacks';
	import { doc, setDoc } from 'firebase/firestore';
	import { auth, firestore } from '$lib/firebase';
	import { docStore, userStore } from 'sveltefire';

	const user = userStore(auth);

	const ref = doc(
		firestore,
		'feedbacks',
		new Date().toISOString().slice(0, 10),
		'scores',
		$user?.email!
	);

	let score = '';
	const currentScore = docStore<{ score: string }>(firestore, ref);
	currentScore.subscribe((value) => {
		score = value?.score || '';
	});

	const handleSubmit = async () => {
		try {
			await setDoc(ref, { score, name: $user?.displayName });
			alert('Obrigado pelo feedback!');
		} catch (error) {
			alert('Erro ao enviar feedback');
		} finally {
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
		<p>De uma nota de como esta se sentindo após o treino:</p>
		{#each ['1', '2', '3', '4', '5'] as option}
			<FormField.default style="display: flex">
				<Radio.default bind:group={score} value={option} />
				<span slot="label">{option}</span>
			</FormField.default>
		{/each}
	</Dialog.Content>
	<Dialog.Actions>
		<Button.default action="close">
			<Button.Label>Fechar</Button.Label>
		</Button.default>
		<Button.default action="" variant="raised" on:click={handleSubmit}>
			<Button.Label>Enviar</Button.Label>
		</Button.default>
	</Dialog.Actions>
</Dialog.default>
