<script lang="ts">
	import Textfield from '@smui/textfield';
	import * as Button from '@smui/button';
	import * as Dialog from '@smui/dialog';

	import { benchmarks, benchmarksOpen } from '$lib/stores/benchmarks';

	$: isFormInvalid = Object.values($benchmarks).some((value) => value === 0);
</script>

<Dialog.default
	bind:open={$benchmarksOpen}
	scrimClickAction={isFormInvalid ? '' : 'close'}
	escapeKeyAction={isFormInvalid ? '' : 'close'}
	aria-labelledby="benchmarks-title"
	aria-describedby="benchmarks-content"
>
	<Dialog.Title id="benchmarks-title">Atualizar RMs</Dialog.Title>
	<Dialog.Content id="benchmarks-content">
		<p>Informe seus RMs e seu grupo para calcular a planilha</p>
		<div class="input-container">
			<Textfield
				bind:value={$benchmarks.deadlift}
				type="number"
				variant="outlined"
				label="Deadlift RM"
				suffix="㎏"
				style="width: 100%;"
				input$pattern="\d+"
				input$inputmode="numeric"
				input$min={1}
			/>
		</div>
		<div class="input-container">
			<Textfield
				bind:value={$benchmarks.backSquat}
				type="number"
				variant="outlined"
				label="Back Squat RM"
				suffix="㎏"
				style="width: 100%;"
				input$pattern="\d+"
				input$inputmode="numeric"
				input$min={1}
			/>
		</div>
		<div class="input-container">
			<Textfield
				bind:value={$benchmarks.benchPress}
				type="number"
				variant="outlined"
				label="Beanch Press RM"
				suffix="㎏"
				style="width: 100%;"
				input$pattern="\d+"
				input$inputmode="numeric"
				input$min={1}
			/>
		</div>
		<div class="input-container">
			<Textfield
				bind:value={$benchmarks.shoulderPress}
				type="number"
				variant="outlined"
				label="Shoulder Press RM"
				suffix="㎏"
				style="width: 100%;"
				input$pattern="\d+"
				input$inputmode="numeric"
				input$min={1}
			/>
		</div>
	</Dialog.Content>
	<Dialog.Actions class="actions">
		<span class="version">v3.0.0</span>
		<Button.default action="accept" disabled={isFormInvalid}>
			<Button.Label>Fechar</Button.Label>
		</Button.default>
	</Dialog.Actions>
</Dialog.default>

<style>
	.input-container {
		margin: 1rem 0;
	}
	.version {
		font-family: var(
			--mdc-typography-subtitle1-font-family,
			var(--mdc-typography-font-family, Roboto, sans-serif)
		);
		font-size: 14px;
		padding-left: 16px;
		opacity: 0.6;
	}
	.actions {
		justify-content: space-between;
	}
</style>
