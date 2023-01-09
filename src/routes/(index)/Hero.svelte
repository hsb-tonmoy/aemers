<script>
	import Subheading from '$lib/components/Subheading.svelte';
	import ButtonPrimary from '$lib/components/ButtonPrimary.svelte';
</script>

<section class="relative w-full h-full px-6 py-20 bg-white">
	<img
		src="/images/stroke1.png"
		alt="brush stroke"
		class="animate-pulse absolute hidden md:block md:top-0 xl:top-20 xl:left-10 md:w-40 xl:w-60"
	/>
	<img
		src="/images/stroke2.png"
		alt="brush stroke"
		class="animate-pulse absolute hidden md:block md:bottom-10 xl:bottom-20 md:right-0 xl:right-20 md:w-40 xl:w-60"
	/>
	<img
		src="/images/dot1.png"
		alt="brush stroke"
		class="animate-bounce absolute hidden md:block top-20 md:right-10 xl:right-36 w-6"
	/>
	<img
		src="/images/dot2.png"
		alt="brush stroke"
		class="animate-bounce absolute hidden md:block md:bottom-10 xl:bottom-32 md:left-10 xl:left-20 w-6"
	/>
	<div class="container mx-auto flex flex-wrap md:flex-nowrap items-center">
		<div class="flex flex-col w-full md:w-3/5 xl:w-2/4">
			<Subheading text="Our Service" />
			<span class="font-bold text-secondary text-3xl md:text-4xl xl:text-6xl xl:leading-[72px]">
				Get enrolled to a US university
			</span>
			<span class="italic text-lg md:text-xl xl:text-3xl">Fast & Affordable</span>
			<div class="flex items-center gap-6 mt-6 md:mt-12">
				<a href="/go">
					<ButtonPrimary classes="px-8 py-3">Get Started</ButtonPrimary>
				</a>
				<div class="flex flex-col">
					<span class="text-lightColor text-sm">Contact Us</span>
					<a href="mailto:contact@aemers.com" class="text-secondary text-base font-bold"
						>contact@aemers.com</a
					>
				</div>
			</div>
		</div>
		<div class="w-full md:w-2/5 xl:w-2/4 mt-10 md:mt-0">
			<img
				src="/images/hero-image.png"
				alt="Person with Aemers shirt on"
				class="object-cover md:w-11/12 xl:w-3/4"
			/>
		</div>
	</div>
</section>
