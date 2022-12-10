<script>
	import ButtonSecondary from '$lib/components/ButtonSecondary.svelte';
</script>

<div class="bg-primary px-6 py-12 md:py-32 w-full text-white">
	<section class="container mx-auto w-full">
		<div class="flex flex-wrap items-center gap-6 md:gap-0">
			<div class="flex flex-col justify-center items-start gap-6 w-full md:w-2/4 md:px-8 lg:px-20">
				<h3 class="block-heading">
					Visit Our Free Knowledgebase <sup><span class="text-base">BETA</span></sup>
				</h3>
				<span class="text-sm lg:text-base"
					>A goldmine with all the necessary information needed for studying in USA..</span
				>
				<a href="https://kb.aemers.com/" target="_blank" rel="noreferrer">
					<ButtonSecondary whiteBG={true}>Visit Now</ButtonSecondary>
				</a>
			</div>
			<div class="w-full md:w-2/4">
				<img
					src="/images/knowledgbaseBG.png"
					alt="Free Knowledgebase"
					class="object-cover w-full h-full"
				/>
			</div>
		</div>
	</section>
</div>
