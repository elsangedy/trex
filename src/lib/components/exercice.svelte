<script type="ts">
  import * as List from '@smui/list'

  export let name: string
  export let sets: number
  export let reps: number | string
  export let repsMax: number | undefined = undefined
  export let weight: number | undefined = undefined
  export let weightPercent: number | undefined = undefined
  export let weightPercentMax: number | undefined = undefined

  $: weightComputed = weight ? (weight * (weightPercent || 100)) / 100 : false
  $: weightMaxComputed = weight ? (weight * (weightPercentMax || 100)) / 100 : false
</script>

<List.Item>
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