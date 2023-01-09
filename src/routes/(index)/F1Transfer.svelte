<script>
	import Subheading from '$lib/components/Subheading.svelte';
	import ButtonPrimary from '$lib/components/ButtonPrimary.svelte';
	import { Phone, CheckMark } from '$lib/components/Icons';

	const features = ['Fast & Efficient', 'Affordable Package', 'Scholarship Opportunities'];
</script>

<section class="relative w-full h-full px-6 py-6 lg:py-20 bg-white">
	<div class="container mx-auto px-6 py-20">
		<div class="flex flex-wrap lg:flex-nowrap">
			<div class="w-full lg:w-2/4 lg:pr-16">
				<Subheading text="Transfer Mentoring in the US" />
				<span class="font-bold text-secondary text-2xl md:text-3xl xl:text-5xl xl:leading-snug"
					>Already in the US? Transfer to a better program</span
				>
				<p class="text-lighterColor text-base leading-[1.9] mt-2 mb-6 text-justify">
					Based on your profile, English proficiency and accomplishments, our team of mentors will
					help you get an admission to a US undergraduate program. Our priority remains on bringing
					you the highest amount of scholarship that your profile qualifies for.
				</p>
				<div class="mb-6">
					<ul class="flex flex-col gap-3">
						{#each features as feature}
							<li class="flex items-center gap-2">
								<div
									class="flex items-center justify-center bg-transparent border border-primary rounded-full w-4 h-4"
								>
									<span class="w-3 h-3 block text-primary"><CheckMark stroke={3} /></span>
								</div>
								<span class="text-lightColor">{feature}</span>
							</li>
						{/each}
					</ul>
				</div>
				<a href="/go"><ButtonPrimary>Enroll now!</ButtonPrimary></a>
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
								<span class="block w-5 h-5"><Phone /></span>
							</div>
							<div class="flex flex-col gap-1">
								<span class="text-base font-bold">Call Us to Learn More</span>
								<a href="tel:+8801781373911" class="text-xl font-bold text-primary"
									>+88 017813 73911</a
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
						class="object-cover w-auto h-full"
					/>
					<div class="floating-info flex absolute bottom-0 -left-5">15 years of experience</div>
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
