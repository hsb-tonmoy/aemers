<script>
	import { getAssetURL } from '$lib/utils/getAssetURL';
	import Card from './ServiceCard/Card.svelte';

	export let data = [];
</script>

<div class="px-6 py-12 md:py-32 w-full text-secondary">
	<section class="container mx-auto w-full text-center">
		<h3 class="block-heading">Other Services</h3>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 text-left">
			{#each data as item}
				{#if !item.hidden_from_list}
					<Card
						img={getAssetURL(item.Featured_Image)}
						img_alt={item.Name}
						heading={item.Name}
						description={item.Summary}
						button={item.Button_Text}
						url={'/service/' + item.Slug}
					/>
				{/if}
			{/each}
		</div>
	</section>
</div>
