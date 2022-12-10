<script lang="ts">
	import ButtonPrimary from '$lib/components/ButtonPrimary.svelte';
	export let img: string;
	export let img_alt: string;
	export let heading: string;
	export let description: string;
	export let button: string;
	export let url: string = '#';
	export let whiteBG: boolean = false;
</script>

<div class="card flex flex-col {whiteBG ? 'bg-white' : 'bg-bgColor'} rounded-2xl">
	<img src={img} class="object-cover" alt={img_alt} />
	<div class="p-6 flex flex-col">
		<h6 class="text-secondary font-bold text-lg md:text-xl mb-1">
			{heading}
		</h6>
		<span class="text-lightColor text-xs md:text-sm">{description}</span>
		<a href={url} class="mt-4">
			<ButtonPrimary>{button}</ButtonPrimary>
		</a>
	</div>
</div>
