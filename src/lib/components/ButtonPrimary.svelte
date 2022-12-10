<script lang="ts">
	import { Spinner } from 'flowbite-svelte';
	export let type: string = 'submit';
	export let defaultClass: string =
		'inline-flex items-center justify-center bg-primary disabled:bg-borderColor border border-primary disabled:border-borderColor text-white font-bold text-sm md:text-base rounded-xl';
	export let classes: string = 'px-6 md:px-8 py-3';
	export let disabled: boolean = false;
	export let loading: boolean = false;
</script>

<button
	on:click
	disabled={loading || disabled}
	{type}
	class={`whitespace-nowrap ${classes} ${defaultClass}`}
>
	<slot />
	{#if loading}
		<Spinner class="ml-2" color="white" size="4" />
	{/if}
</button>
