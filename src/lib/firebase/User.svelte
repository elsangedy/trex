<script lang="ts">
	import type { User } from 'firebase/auth';

	import { userStore } from './store';

	interface $$Slots {
		default: { user: User };
		loading: {};
		signedOut: {};
	}

	const user = userStore();
</script>

{#if $user}
	<slot user={$user} />
{:else if $user === undefined}
	<slot name="loading" />
{:else}
	<slot name="signedOut" />
{/if}
