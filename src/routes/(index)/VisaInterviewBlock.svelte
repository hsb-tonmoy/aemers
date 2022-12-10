<script lang="ts">
	import { getAssetURL } from '$lib/utils/getAssetURL';
	import Card from './ServiceCard/Card.svelte';
	export let data: any[] = [];
</script>

<div class="px-6 py-12 md:py-32 w-full text-secondary">
	<section class="container mx-auto w-full text-center">
		<h3 class="block-heading">Visa Interview Preparation</h3>
		<span class="text-base lg:text-lg text-primary mb-4"
			>Prepare yourself for the visa interview</span
		>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 text-left">
			{#each data as item}
				<Card
					img={getAssetURL(item.Featured_Image)}
					img_alt={item.Name}
					heading={item.Name}
					description={item.Summary}
					button={item.Button_Text}
					coming_soon={item.Service_Unavailable}
					url={item.External_Service ? item.External_Link : '/service/' + item.Slug}
				/>
			{/each}
		</div>
	</section>
</div>
