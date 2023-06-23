<script>
	import { User } from 'sveltefire';

	import Login from '$lib/components/login.svelte';
	import Program from '$lib/components/program.svelte';
</script>

<User>
	<Program />

	<div slot="signedOut">
		<Login />
	</div>
</User>
