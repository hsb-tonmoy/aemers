<script>
	import { getAssetURL } from '$lib/utils/getAssetURL';
	import Card from './ServiceCard/Card.svelte';
	export let data = [];
</script>

<div class="bg-primary px-6 py-12 md:py-32 w-full">
	<section class="container mx-auto w-full text-center">
		<h3 class="block-heading text-white mb-2">SAT Preparation</h3>
		<span class="text-base lg:text-lg text-white">Prepare for yourself for upcoming SAT Exam.</span>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 text-left">
			{#each data as item}
				<Card
					img={getAssetURL(item.Featured_Image)}
					img_alt={item.Name}
					heading={item.Name}
					description={item.Summary}
					button={item.Button_Text}
					url={'/service/' + item.Slug}
					whiteBG={true}
				/>
			{/each}
		</div>
	</section>
</div>
