<script lang="ts">
	import { doc, getDoc } from 'firebase/firestore';
	import {
		createUserWithEmailAndPassword,
		signInWithEmailAndPassword,
		fetchSignInMethodsForEmail,
		updateProfile
	} from 'firebase/auth';

	import * as Button from '@smui/button';
	import * as Dialog from '@smui/dialog';
	import * as Textfield from '@smui/textfield';

	import { auth, firestore } from '$lib/firebase';

	async function handleSubmit() {
		try {
			// get form data
			// @ts-ignore
			const formData = new FormData(this);
			const email = formData.get('email') as string;
			const password = (formData.get('password') as string) || 'trex2023prid3';

			// check password
			if (password.length < 6) {
				throw new Error('A senha deve conter 6 ou mais caracteres');
			}

			// check if the athlete is authorized
			const ref = doc(firestore, 'athletes', email);
			const athlete = await getDoc(ref);
			if (!athlete.exists()) {
				throw new Error('Você não está autorizado a acessar o app');
			}

			// check if the user has an account
			const signInMethods = await fetchSignInMethodsForEmail(auth, email);
			const hasAccount = signInMethods.length > 0;

			// sign-in or create account
			if (hasAccount) {
				await signInWithEmailAndPassword(auth, email, password);
			} else {
				const { user } = await createUserWithEmailAndPassword(auth, email, password);
				const { name } = athlete.data();
				await updateProfile(user, {
					displayName: name
				});
			}
		} catch (e: any) {
			alert(e.message);
		}
	}
</script>

<Dialog.default
	open
	scrimClickAction=""
	escapeKeyAction=""
	aria-labelledby="signin-title"
	aria-describedby="signin-content"
>
	<form method="POST" on:submit|preventDefault={handleSubmit}>
		<Dialog.Title id="signin-title">T-REX STR&COND</Dialog.Title>
		<Dialog.Content id="signin-content">
			<p>O maior programa de Futebol Americano da América do Sul.</p>
			<Textfield.default
				value=""
				type="email"
				variant="outlined"
				style="width: 100%;"
				label="Informe seu e-mail"
				input$name="email"
				input$inputmode="email"
				input$autocomplete="off"
			/>
		</Dialog.Content>
		<Dialog.Actions>
			<span class="version">v5.0.0</span>
			<Button.default type="submit" variant="raised" action="">
				<Button.Label>Entrar</Button.Label>
			</Button.default>
		</Dialog.Actions>
	</form>
</Dialog.default>

<style>
	.version {
		font-family: var(
			--mdc-typography-subtitle1-font-family,
			var(--mdc-typography-font-family, Roboto, sans-serif)
		);
		font-size: 14px;
		padding-left: 16px;
		opacity: 0.6;
		flex: 1;
	}
</style>
