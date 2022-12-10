<script>
	import ButtonSecondary from './ButtonSecondary.svelte';
</script>

<div class="w-full text-white">
	<div
		class="flex flex-wrap justify-between items-center gap-4 md:gap-0 bg-primary rounded-2xl px-8 md:px-12 lg:px-20 py-8 md:py-10 lg:py-12"
	>
		<div class="flex flex-col gap-2 w-full md:w-auto">
			<h6 class="font-bold text-2xl md:text-4xl lg:text-5xl">Want to Study in USA?</h6>
			<span class="text-sm md:text-base lg:text-lg"
				>Aemers makes it possible for you in just a few small steps...</span
			>
		</div>
		<div class="w-full md:w-auto">
			<a href="https://app.aemers.com" target="_blank" rel="noreferrer">
				<ButtonSecondary whiteBG={true}>Get Started</ButtonSecondary>
			</a>
		</div>
	</div>
</div>
