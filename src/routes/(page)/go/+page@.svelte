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

<section class="w-full">
	<div class="page flex items-center justify-center py-32 bg-cover bg-no-repeat">
		<h1 class="text-white font-bold text-2xl md:text-3xl xl:text-5xl">{$page_title}</h1>
	</div>
	<div class="container mx-auto px-6 py-20">
		<h1 class="block-heading mb-10">Let us help you get started</h1>
		{#if !succeed}
			<SubmitForm bind:succeed />
		{:else}
			<Success />
		{/if}
	</div>
</section>

<style>
	.page {
		background-image: url('/images/page-bg.jpg');
	}
</style>
