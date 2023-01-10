<script>
	import Subheading from '$lib/components/Subheading.svelte';
	import ButtonPrimary from '$lib/components/ButtonPrimary.svelte';
	import { Mail } from '$lib/components/Icons';
</script>

<section class="relative w-full h-full px-12 py-20 lg:py-40 bg-[#F7F8FD]">
	<div class="container mx-auto">
		<div class="flex flex-wrap lg:flex-nowrap">
			<div class="w-full lg:w-2/4 lg:pr-16">
				<Subheading text="Transfer Mentoring in the US" />
				<span class="font-bold text-secondary text-2xl md:text-3xl xl:text-5xl xl:leading-snug"
					>Already in the US? Transfer to a better program</span
				>
				<p class="text-lighterColor text-base leading-[1.9] mt-2 mb-6 text-justify">
					Congratulations! You have already accomplished your dream of coming to the US. But, are
					you sure you are not missing out? If you are not fully satisfied with your current program
					or your location, Aemers can help you out with that. Schedule a free session with Dr.
					Rashid to find out about opportunities in big cities with more affordable programs.
				</p>

				<a href="/go"><ButtonPrimary>Schedule a free session</ButtonPrimary></a>
				<div class="flex flex-wrap md:flex-nowrap gap-4 md:gap-0 mt-10">
					<div class="w-full md:w-2/4">
						<div class="flex items-center gap-4">
							<img
								src="/images/mamoon-small.png"
								alt="Mamoon Rashid"
								class="object-cover rounded-full w-16"
							/>
							<div class="flex flex-col gap-1">
								<span class="text-xl font-bold">Dr. Mamoon Rashid</span>
								<span class="text-sm text-primary">CEO & Founder</span>
							</div>
						</div>
					</div>
					<div class="w-full md:w-2/4">
						<div class="flex items-center gap-4">
							<div class="w-16 h-16 flex items-center justify-center bg-primary text-white rounded">
								<span class="block w-5 h-5"><Mail /></span>
							</div>
							<div class="flex flex-col gap-1">
								<span class="text-base font-bold">Email Us to Learn More</span>
								<a href="mailto:contact@aemers.com" class="text-xl font-bold text-primary"
									>contact@aemers.com</a
								>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="w-full lg:w-2/4 py-10 lg:py-0">
				<div class="relative w-full h-full">
					<img
						src="/images/mamoon-big.png"
						alt="Dr. Mamoon Rashid"
						class="object-cover w-auto h-full rounded-lg"
					/>
					<div
						class="floating-info animate-bounce-slow flex items-center gap-6 absolute -bottom-16 -left-5 text-white px-6 py-4 md:px-10 md:py-8 rounded-md"
					>
						<span class="text-lg md:text-2xl lg:text-3xl font-bold">15+<br />Years</span>
						<span class="text-base md:text-lg lg:text-xl">Of experience in<br />US admission</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.floating-info {
		background: linear-gradient(45deg, #a789ff 0%, #6b3aff 54%, #7443ff 100%);
	}
</style>
