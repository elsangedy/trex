<script>
	import { User } from 'sveltefire';

	import Login from '$lib/components/login.svelte';
	import Program from '$lib/components/program.svelte';
	import Feedback from '$lib/components/feedback.svelte';
	import Benchmarks from '$lib/components/benchmarks.svelte';
</script>

<User>
	<Program />
	<Feedback />
	<Benchmarks />

	<div slot="signedOut">
		<Login />
	</div>
</User>
