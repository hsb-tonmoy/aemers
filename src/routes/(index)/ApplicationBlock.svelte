<script>
	import ButtonPrimary from '$lib/components/ButtonPrimary.svelte';
</script>

<div class="container mx-auto w-full px-6">
	<section id="application" class="flex flex-wrap items-center">
		<div class="flex flex-col justify-center items-start gap-6 w-full md:w-2/4 md:px-8 lg:px-20">
			<h3 class="block-heading">Get admitted to a university in the USA</h3>
			<span class="text-secondary text-sm lg:text-base"
				>We are dedicated to helping you reach the highest of your potential.</span
			>
			<a href="https://app.aemers.com" target="_blank" rel="noreferrer">
				<ButtonPrimary>Start Application</ButtonPrimary></a
			>
		</div>
		<div class="w-full md:w-2/4">
			<img
				src="/images/person1.png"
				alt="Student in Aemers T-shirt"
				class="object-cover w-full h-full"
			/>
		</div>
	</section>
</div>
