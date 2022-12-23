<script lang="ts">
	import type { ActionData } from './$types';
	import SubmitForm from './SubmitForm.svelte';
	import Success from './Success.svelte';

	export let form: ActionData;

	let succeed = false;

	$: if (form?.success) {
		succeed = true;
	}

	import { page_title } from '$lib/components/stores';

	$page_title = 'Apply Now';
</script>

<div class="container mx-auto px-6 py-20">
	<h1 class="block-heading mb-10">Let us help you get started</h1>
	{#if !succeed}
		<SubmitForm bind:succeed />
	{:else}
		<Success />
	{/if}
</div>
