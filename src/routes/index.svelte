<script type="ts">
  import List from '@smui/list'
  import Textfield from '@smui/textfield'
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

  $: isFormInvalid = $config.clean === 0 || $config.deadlift === 0 || $config.backSquat === 0 || $config.benchPress === 0
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
      <Accordion.Panel open={dayOfWeek === 2}>
        <Accordion.Header>
          Terça-feira
        </Accordion.Header>
        <Accordion.Content>
          <List twoLine>
            <Exercice name="Clean" sets={5} reps={3} weight={$config.clean} weightPercent={80} weightPercentMax={90} />
            <Exercice name="Back Squat + Box Jumps" sets={3} reps="3 + 5" weight={$config.backSquat} weightPercent={80} weightPercentMax={90} />
            <Exercice name="Pull Ups + Ball Slam" sets={3} reps="5 + 5" />
            <Exercice name="Kaneeing 1 Arm DB Press" sets={3} reps="8 + 8" />
            <Exercice name="Front Ball Slam" sets={3} reps="8 + 8" />
          </List>
        </Accordion.Content>
      </Accordion.Panel>

      <Accordion.Panel open={dayOfWeek === 4}>
        <Accordion.Header>
          Quinta-feira
        </Accordion.Header>
        <Accordion.Content>
          <List twoLine>
            <Exercice name="Clean" sets={5} reps={3} weight={$config.clean} weightPercent={80} weightPercentMax={90} />
            <Exercice name="Deadlift + Broad Jumps" sets={3} reps="3 + 5" weight={$config.deadlift} weightPercent={80} weightPercentMax={90} />
            <Exercice name="Bench Pres + Plyo Push Ups" sets={3} reps="3 + 10" weight={$config.benchPress} weightPercent={80} weightPercentMax={90} />
            <Exercice name="Split Squat" sets={3} reps="8 + 8" />
            <Exercice name="Lateral Ball Slam" sets={3} reps="8 + 8" />
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
        bind:value={$config.clean}
        type="number"
        variant="outlined"
        label="Clean RM"
        suffix="㎏"
        style="width: 100%;"
        input$pattern="\d+"
        input$inputmode="numeric"
        input$min={1}
      />
    </div>
    <div class="input-container">
      <Textfield
        bind:value={$config.deadlift}
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
  </Dialog.Content>
  <Dialog.Actions style="justify-content: space-between;">
    <span class="version">v1.3.0</span>
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