<script type="ts">
  import List from '@smui/list'
  import Radio from '@smui/radio'
  import Textfield from '@smui/textfield'
  import FormField from '@smui/form-field'
  import IconButton from '@smui/icon-button'
  import * as Button from '@smui/button'
  import * as Dialog from '@smui/dialog'
  import * as TopAppBar from '@smui/top-app-bar'

  import { config } from '$lib/stores/config'

  import Exercice from '$lib/components/exercice.svelte'

  let topAppBar: TopAppBar.TopAppBarComponentDev
  let open = $config.firstOpen || $config.group === 0 || $config.backSquat === 0 || $config.benchPress === 0

  $: isFormInvalid = $config.group === 0 || $config.backSquat === 0 || $config.benchPress === 0
</script>

<TopAppBar.default bind:this={topAppBar} variant="standard">
  <TopAppBar.Row>
    <TopAppBar.Section>
      <TopAppBar.Title>STR & COND</TopAppBar.Title>
    </TopAppBar.Section>
    <TopAppBar.Section align="end" toolbar>
      <IconButton class="material-icons" on:click={() => (open = true)}>edit</IconButton>
    </TopAppBar.Section>
  </TopAppBar.Row>
</TopAppBar.default>

<TopAppBar.AutoAdjust {topAppBar}>
  <div class="accordion-container">
    <List twoLine>
      <Exercice name="Back Squat (Reconhecimento)" sets={1} reps={6} repsMax={12} weight={$config.backSquat} weightPercent={50} />
      <Exercice name="Back Squat" sets={$config.group} reps={3} repsMax={4} weight={$config.backSquat} weightPercent={60} />
      <Exercice name="Bench Press (Reconhecimento)" sets={1} reps={6} repsMax={12} weight={$config.benchPress} weightPercent={50} />
      <Exercice name="Bench Press" sets={$config.group} reps={3} repsMax={4} weight={$config.benchPress} weightPercent={60} />
      <Exercice name="1 Leg Hip Lift + Shoulder Complex" sets={3} reps={8} repsMax={12} />
      <Exercice name="Lateral Ball Slam + Front Ball Slam" sets={3} reps={8} repsMax={12} />
      <Exercice name="1 Leg RDL + Banded Spider Jump" sets={3} reps={8} repsMax={12} />
    </List>
  </div>
</TopAppBar.AutoAdjust>

<Dialog.default
  bind:open
  scrimClickAction={isFormInvalid ? '' : 'close'}
  escapeKeyAction={isFormInvalid ? '' : 'close'}
  aria-labelledby="edit-modal-title"
  aria-describedby="edit-modal-content"
>
  <Dialog.Title id="edit-modal-title">Atualizar RMs</Dialog.Title>
  <Dialog.Content id="edit-modal-content">
    <p>Informe seus RMs e seu grupo para calcular a planilha</p>
    <div class="input-container">
      <Textfield
        bind:value={$config.backSquat}
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
        bind:value={$config.benchPress}
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
    <div class="input-container" style="display: flex; flex-direction: column;">
      {#each [1, 2, 3] as option}
        <FormField>
          <Radio bind:group={$config.group} value={option} touch />
          <span slot="label">Grupo {option.toString().padStart(2, '0')}</span>
        </FormField>
      {/each}
    </div>
  </Dialog.Content>
  <Dialog.Actions style="justify-content: space-between;">
    <span class="version">v1.2.0</span>
    <Button.default action="accept" disabled={isFormInvalid}>
      <Button.Label>Fechar</Button.Label>
    </Button.default>
  </Dialog.Actions>
</Dialog.default>

<style>
.accordion-container {
  margin: 1rem 0;
}
.input-container {
  margin: 1rem 0;
}
.version {
  font-family: var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));
  font-size: 14px;
  padding-left: 16px;
  opacity: .6;
}
</style>