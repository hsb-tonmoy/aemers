<script lang="ts">
	import { Spinner } from 'flowbite-svelte';
	export let type: string = 'submit';
	export let defaultClass: string =
		'inline-flex items-center justify-center bg-primary disabled:bg-borderColor border border-primary disabled:border-borderColor text-white font-semibold text-sm md:text-base rounded-md';
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

<style lang="postcss">
	button {
		transition: 0.5s;
		background-size: 200% auto;
		background-image: linear-gradient(
			90deg,
			rgba(137, 96, 255, 1) 0%,
			rgba(125, 79, 254, 1) 54%,
			rgba(116, 67, 255, 1) 100%
		);
	}
	button:hover {
		background-position: right center; /* change the direction of the change here */
	}
</style>
