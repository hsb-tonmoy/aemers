<script>
	import ButtonPrimary from '$lib/components/ButtonPrimary.svelte';
</script>

<div class="px-6 py-12 md:py-32 w-full text-secondary">
	<section class="container mx-auto w-full">
		<div class="flex flex-wrap items-center gap-6 md:gap-0">
			<div class="flex flex-col justify-center items-start gap-6 w-full md:w-2/4 md:px-8 lg:px-20">
				<h3 class="block-heading">Visit Our Collection of Printed Materials</h3>
				<span class="text-sm lg:text-base"
					>Books, Large Posters, Learning Materials and many more to help you in learning.</span
				>
				<a href="/service/printed-publication-materials">
					<ButtonPrimary>Explore Now</ButtonPrimary>
				</a>
			</div>
			<div class="w-full md:w-2/4">
				<img
					src="/images/printedMaterial.png"
					alt="Visit Our Collection of Print Materials"
					class="object-cover w-full h-full"
				/>
			</div>
		</div>
	</section>
</div>
