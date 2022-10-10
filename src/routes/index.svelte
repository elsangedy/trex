<script type="ts">
  import List from '@smui/list'
  import Radio from '@smui/radio'
  import Textfield from '@smui/textfield'
  import FormField from '@smui/form-field'
  import IconButton from '@smui/icon-button'
  import * as Button from '@smui/button'
  import * as Dialog from '@smui/dialog'
  import * as TopAppBar from '@smui/top-app-bar'
  import * as Accordion from '@smui-extra/accordion'

  import { config } from '$lib/stores/config'

  import Exercice from '$lib/components/exercice.svelte'

  let topAppBar: TopAppBar.TopAppBarComponentDev
  let open = $config.firstOpen

  const dayOfWeek = new Date().getDay()

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
    <Accordion.default>
      <Accordion.Panel open={dayOfWeek === 1}>
        <Accordion.Header>
          Segunda-feira
          <span slot="description">90% do RM</span>
        </Accordion.Header>
        <Accordion.Content>
          <List twoLine>
            <Exercice name="Back Squat (Reconhecimento)" sets={1} reps={6} repsMax={12} weight={$config.backSquat} weightPercent={50} />
            <Exercice name="Back Squat (Warm-up)" sets={1} reps={6} repsMax={12} weight={$config.backSquat} weightPercent={70} />
            <Exercice name="Back Squat" sets={1} reps={2} repsMax={3} weight={$config.backSquat} weightPercent={90} />
            <Exercice name="Bench Press (Reconhecimento)" sets={1} reps={6} repsMax={12} weight={$config.benchPress} weightPercent={50} />
            <Exercice name="Bench Press (Warm-up)" sets={1} reps={6} repsMax={12} weight={$config.benchPress} weightPercent={70} />
            <Exercice name="Bench Press" sets={1} reps={2} repsMax={3} weight={$config.benchPress} weightPercent={90} />
            <Exercice name="Front Ball Slam" sets={3} reps={8} repsMax={12} />
            <Exercice name="Pull Ups" sets={3} reps={8} repsMax={12} />
            <Exercice name="1 Leg RDL" sets={3} reps={8} repsMax={12} />
          </List>
        </Accordion.Content>
      </Accordion.Panel>

      <Accordion.Panel open={dayOfWeek === 3}>
        <Accordion.Header>
          Quarta-feira
          <span slot="description">85% do RM</span>
        </Accordion.Header>
        <Accordion.Content>
          <List twoLine>
            <Exercice name="Back Squat (Reconhecimento)" sets={1} reps={6} repsMax={12} weight={$config.backSquat} weightPercent={50} />
            <Exercice name="Back Squat (Warm-up)" sets={1} reps={6} repsMax={12} weight={$config.backSquat} weightPercent={70} />
            <Exercice name="Back Squat" sets={1} reps={3} repsMax={4} weight={$config.backSquat} weightPercent={85} />
            <Exercice name="Bench Press (Reconhecimento)" sets={1} reps={6} repsMax={12} weight={$config.benchPress} weightPercent={50} />
            <Exercice name="Bench Press (Warm-up)" sets={1} reps={6} repsMax={12} weight={$config.benchPress} weightPercent={70} />
            <Exercice name="Bench Press" sets={1} reps={3} repsMax={4} weight={$config.benchPress} weightPercent={85} />
            <Exercice name="Banded Spider Jump" sets={3} reps={8} repsMax={12} />
            <Exercice name="Inverted Row" sets={3} reps={8} repsMax={12} />
            <Exercice name="1 Leg Plyo Curl" sets={3} reps={8} repsMax={12} />
          </List>
        </Accordion.Content>
      </Accordion.Panel>

      <Accordion.Panel open={dayOfWeek === 5}>
        <Accordion.Header>
          Sexta-feira
          <span slot="description">95% do RM</span>
        </Accordion.Header>
        <Accordion.Content>
          <List twoLine>
            <Exercice name="Back Squat (Reconhecimento)" sets={1} reps={6} repsMax={12} weight={$config.backSquat} weightPercent={50} />
            <Exercice name="Back Squat (Warm-up)" sets={1} reps={6} repsMax={12} weight={$config.backSquat} weightPercent={70} />
            <Exercice name="Back Squat" sets={1} reps={1} repsMax={2} weight={$config.backSquat} weightPercent={95} />
            <Exercice name="Bench Press (Reconhecimento)" sets={1} reps={6} repsMax={12} weight={$config.benchPress} weightPercent={50} />
            <Exercice name="Bench Press (Warm-up)" sets={1} reps={6} repsMax={12} weight={$config.benchPress} weightPercent={70} />
            <Exercice name="Bench Press" sets={1} reps={1} repsMax={2} weight={$config.benchPress} weightPercent={95} />
            <Exercice name="Lateral Ball Slam" sets={3} reps={8} repsMax={12} />
            <Exercice name="Shoulder Complex" sets={3} reps={8} repsMax={12} />
            <Exercice name="1 Leg Hip Lift" sets={3} reps={8} repsMax={12} />
          </List>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion.default>
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
    <span class="version">v1.1.0</span>
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