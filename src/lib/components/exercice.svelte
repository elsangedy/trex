<script lang="ts">
	import * as List from '@smui/list';
	import * as Button from '@smui/button';
	import * as Dialog from '@smui/dialog';

	export let name: string;
	export let prescription: string | undefined = undefined;
	export let weight: number | undefined = undefined;
	export let weightPercent: number | undefined = undefined;
	export let weightPercentMax: number | undefined = undefined;
	export let media: string | undefined = undefined;
	export let kind: 'warmup' | 'skill' | 'power' | 'lpo' | undefined = undefined;

	$: weightComputed = weight ? (weight * (weightPercent || 100)) / 100 : false;
	$: weightMaxComputed = weight ? (weight * (weightPercentMax || 100)) / 100 : false;
	let open = false;

	const handleOpen = () => {
		if (media) {
			open = true;
		}
	};
</script>

<List.Item on:click={handleOpen} class={kind}>
	<List.Text>
		<List.PrimaryText class={prescription ? undefined : 'no-sets'}>{name}</List.PrimaryText>
		{#if prescription}
			<List.SecondaryText>
				{prescription}
			</List.SecondaryText>
		{/if}
	</List.Text>
	{#if weightComputed}
		<List.Meta>
			<div style="text-align: right">
				{weightComputed}kg{#if weightPercentMax} ~ {weightMaxComputed}kg{/if}
			</div>
			<div style="text-align: right">
				{#if weightPercent}{weightPercent}%{#if weightPercentMax} ~ {weightPercentMax}%{/if}{/if}
			</div>
		</List.Meta>
	{/if}
</List.Item>

{#if media}
	<Dialog.default
		bind:open
		fullscreen
		aria-labelledby="media-modal-title"
		aria-describedby="media-modal-content"
	>
		<Dialog.Header>
			<Dialog.Title id="media-modal-title" style="margin-left: 8px;">{name}</Dialog.Title>
		</Dialog.Header>
		<Dialog.Content id="media-modal-content" class="media-content">
			<img src={media} class="media" alt={name} />
		</Dialog.Content>
		<Dialog.Actions>
			<Button.default action="close">
				<Button.Label>Fechar</Button.Label>
			</Button.default>
		</Dialog.Actions>
	</Dialog.default>
{/if}

<style>
	:global(.no-sets) {
		margin-top: 3px !important;
		line-height: 56px !important;
	}
	.media {
		max-width: 100%;
		margin: 0 auto;
	}
	:global(.media-content) {
		padding: 0 !important;
		display: flex;
		align-items: center;
	}
	:global(.warmup) {
		background-color: rgb(0 255 252 / 24%);
	}
	:global(.skill) {
		background-color: rgb(254 255 0 / 24%);
	}
	:global(.power) {
		background-color: rgb(255 153 0 / 24%);
	}
	:global(.lpo) {
		background-color: rgb(255 0 0 / 24%);
	}
</style>
