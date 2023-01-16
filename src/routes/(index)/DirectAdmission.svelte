<script>
	import Subheading from '$lib/components/Subheading.svelte';
	import ButtonPrimary from '$lib/components/ButtonPrimary.svelte';
	import { Phone, CheckMark } from '$lib/components/Icons';

	const features = ['Fast & Efficient', 'Affordable Package', 'Scholarship Opportunities'];
</script>

<section class="relative w-full h-full px-12 py-20 lg:py-40 bg-cover bg-center bg-no-repeat">
	<div class="container mx-auto">
		<div class="flex flex-wrap lg:flex-nowrap">
			<div class="w-full lg:w-2/4 lg:pr-16">
				<Subheading text="Direct Admission to a US University" />
				<span class="font-bold text-secondary text-2xl md:text-3xl xl:text-5xl xl:leading-snug"
					>Open a file with us today and land in the US soon!</span
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
								src="/images/tasnim.jpg"
								alt="Mamoon Rashid"
								class="object-cover rounded-full w-16"
							/>
							<div class="flex flex-col gap-1">
								<span class="text-xl font-bold">Syeda Tasnim Hassan</span>
								<span class="text-sm text-primary">Administrative Manager</span>
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
									>+88 0132 648 0510</a
								>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="flex items-center w-full lg:w-2/4 py-10 lg:py-0">
				<iframe
					style="aspect-ratio: 16/9;"
					width="100%"
					height="auto"
					src="https://www.youtube.com/embed/g-iO6JQWUbY"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowfullscreen
				/>
			</div>
		</div>
	</div>
</section>

<style>
	section {
		background-image: url('/images/section-bg.jpg');
	}
</style>
