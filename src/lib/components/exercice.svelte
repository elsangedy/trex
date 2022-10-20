<script type="ts">
  import * as List from '@smui/list'
  import * as Button from '@smui/button'
  import * as Dialog from '@smui/dialog'

  export let name: string
  export let sets: number
  export let reps: number | string
  export let repsMax: number | undefined = undefined
  export let weight: number | undefined = undefined
  export let weightPercent: number | undefined = undefined
  export let weightPercentMax: number | undefined = undefined
  export let video: string | undefined = undefined

  $: weightComputed = weight ? (weight * (weightPercent || 100)) / 100 : false
  $: weightMaxComputed = weight ? (weight * (weightPercentMax || 100)) / 100 : false

  let open = false

  const handleOpen = () => {
    if (video) {
      open = true
    }
  }
</script>

<List.Item on:click={handleOpen}>
  <List.Text>
    <List.PrimaryText>{name}</List.PrimaryText>
    <List.SecondaryText>{sets} x {reps}{#if repsMax}~{repsMax}{/if}reps</List.SecondaryText>
  </List.Text>
  {#if weightComputed}
  <List.Meta>
    <div>{weightComputed}kg {#if weightPercentMax}~ {weightMaxComputed}{/if}kg</div>
    <div>{#if weightPercent}{weightPercent}% {#if weightPercentMax}~ {weightPercentMax}{/if}%{/if}</div>
  </List.Meta>
  {/if}
</List.Item>

<Dialog.default
  bind:open
  fullscreen
  aria-labelledby="video-modal-title"
  aria-describedby="video-modal-content"
>
  <Dialog.Header>
    <Dialog.Title id="video-modal-title" style="margin-left: 8px;">{name}</Dialog.Title>
  </Dialog.Header>
  <Dialog.Content id="video-modal-content">
    {#if video}
      <!-- svelte-ignore a11y-media-has-caption -->
      <video src={video} class="video" controls autoplay>
        Desculpa, o seu navegador não suporta vídeos incorporados,
        mas você pode <a href={video}>baixá-lo</a>
        e assistir pelo seu reprodutor de mídia favorito!
      </video>
    {/if}
  </Dialog.Content>
  <Dialog.Actions>
    <Button.default action="close">
      <Button.Label>Fechar</Button.Label>
    </Button.default>
  </Dialog.Actions>
</Dialog.default>

<style>
.video {
  width: 100%;
}
</style>