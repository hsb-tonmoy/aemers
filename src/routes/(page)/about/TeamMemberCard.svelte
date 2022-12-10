<script>
	import { getAssetURL } from '$lib/utils/getAssetURL';
	import { LinkedIn, Web } from '$lib/components/Icons';

	export let name = '',
		position = '',
		photo = '',
		linkedin = '',
		website = '';
</script>

<div class="flex flex-col">
	<div class="rounded-xl bg-primary pt-6">
		<img src={getAssetURL(photo)} alt={name} class="object-cover w-full h-full" />
	</div>
	<span class="font-bold text-base md:text-lg mt-4">{name}</span>
	<span class="font-medium text-sm md:text-base text-primary mb-1">{position}</span>

	<div class="flex justify-center items-center gap-2">
		{#if linkedin}
			<a href={linkedin}><span class="block w-6 h-6"><LinkedIn /></span></a>
		{/if}
		{#if website}
			<a href={website}><span class="block w-6 h-6"><Web /></span></a>
		{/if}
	</div>
</div>
