<script lang="ts">
	import { Spinner } from 'flowbite-svelte';
	export let type: string = 'submit';
	export let whiteBG: boolean = false;
	export let defaultClass: string = `inline-flex items-center justify-center border ${
		whiteBG
			? 'bg-white border-white text-primary hover:text-white'
			: 'bg-transparent border-primary'
	} disabled:bg-borderColor hover:bg-primary font-bold text-sm md:text-base rounded-xl`;
	export let classes: string = 'px-6 md:px-8 py-3';
	export let disabled: boolean = false;
	export let loading: boolean = false;

	export let iconPosition: 'left' | 'right' = undefined;
</script>

<button
	on:click
	disabled={loading || disabled}
	{type}
	class={`whitespace-nowrap ${defaultClass} ${classes}`}
>
	{#if iconPosition && iconPosition === 'left'}
		<div class="mr-2">
			<slot name="icon" />
		</div>
	{/if}
	<slot />
	{#if loading}
		<Spinner class="ml-2" color="primary" size="4" />
	{/if}
	{#if iconPosition && iconPosition === 'right' && !loading}
		<div class="ml-2">
			<slot name="icon" />
		</div>
	{/if}
</button>
