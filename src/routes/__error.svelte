<script type="ts" context="module">
  export function load({ error, status }: { error: Error; status: number}) {
    return { props: { error, status } };
  }
</script>

<script type="ts">
	export let error: Error;
	export let status: number;
</script>

<section>
  <h1>Erro :(</h1>
	<span>{status}: {error.message}</span>
</section>
