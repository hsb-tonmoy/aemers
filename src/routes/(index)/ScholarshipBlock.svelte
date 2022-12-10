<script>
	import ButtonPrimary from '$lib/components/ButtonPrimary.svelte';
	import ButtonSecondary from '$lib/components/ButtonSecondary.svelte';
</script>

<div class="px-6 py-12 md:py-32 w-full text-secondary">
	<section class="container mx-auto w-full">
		<div class="flex flex-wrap items-center gap-6 md:gap-0">
			<div class="flex flex-col justify-center items-start gap-6 w-full md:w-2/4 md:px-8 lg:px-20">
				<h3 class="block-heading">
					Get Affordable Scholarship <span class="text-primary">Mentoring</span>
				</h3>
				<span class="text-sm lg:text-base"
					>Our expert mentors will guide you throughout your entire scholarship-seeking journey.</span
				>
				<div class="flex items-center gap-x-4">
					<a href="/service/scholarship-mentoring/find-a-mentor">
						<ButtonPrimary>Find Mentors</ButtonPrimary>
					</a>
					<a href="/service/scholarship-mentoring/be-a-mentor">
						<ButtonSecondary>Be a Mentor</ButtonSecondary>
					</a>
				</div>
			</div>
			<div class="w-full md:w-2/4">
				<img
					src="/images/mentorshipBG.png"
					alt="Scholarship Mentoring"
					class="object-cover w-full h-full"
				/>
			</div>
		</div>
	</section>
</div>
