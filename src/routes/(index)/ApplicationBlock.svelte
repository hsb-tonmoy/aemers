<script>
	import ButtonPrimary from '$lib/components/ButtonPrimary.svelte';
</script>

<div class="container mx-auto w-full px-6 py-20">
	<section id="application" class="flex flex-wrap items-center">
		<div class="flex flex-col justify-center items-center gap-6 w-full">
			<h6 class="text-lg md:text-2xl xl:text-4xl">Start your journey with our</h6>
			<h3 class="block-heading">Interactive <span class="text-primary">Webapp</span></h3>
			<span class="text-secondary text-center text-sm lg:text-lg"
				>Submit and track your application through our highly interactive website.
			</span>
			<a href="https://app.aemers.com" target="_blank" rel="noreferrer">
				<ButtonPrimary>Start Application</ButtonPrimary></a
			>
		</div>
		<img
			src="/images/app.aemers-mockup.png"
			alt="app.aemers interactive webapp"
			class="mt-10 object-cover w-full h-full"
		/>
	</section>
</div>
