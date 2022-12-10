<script>
	import ButtonSecondary from '$lib/components/ButtonSecondary.svelte';
</script>

<div class="bg-primary px-6 py-12 md:py-32 w-full text-white">
	<section class="container mx-auto w-full">
		<div class="flex flex-wrap items-center gap-6 md:gap-0">
			<div class="flex flex-col justify-center items-start gap-6 w-full md:w-2/4 md:px-8 lg:px-20">
				<h3 class="block-heading">
					Join Our Bootcamp <br /> Every Month!
				</h3>
				<span class="text-sm lg:text-base "
					>Attend our monthly bootcamp to envigorate your admission game!</span
				>
				<a href="https://kb.aemers.com/" target="_blank" rel="noreferrer">
					<ButtonSecondary whiteBG={true}>Register Now</ButtonSecondary>
				</a>
			</div>
			<div class="w-full md:w-2/4">
				<img
					src="/images/bootcampBG.png"
					alt="Free Knowledgebase"
					class="object-cover w-full h-full"
				/>
			</div>
		</div>
		<div class="flex flex-col md:flex-row items-center gap-8 mt-8">
			<img
				src="/images/bootcamp-1.png"
				alt="Bootcamp students"
				class="object-cover w-full h-full"
			/>
			<img
				src="/images/bootcamp-2.png"
				alt="Bootcamp students"
				class="object-cover w-full h-full"
			/>
			<img
				src="/images/bootcamp-3.png"
				alt="Bootcamp students"
				class="object-cover w-full h-full"
			/>
		</div>
	</section>
</div>
