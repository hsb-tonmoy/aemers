<script>
	import Features from './Features.svelte';
	import { page_title } from '$lib/components/stores';

	$page_title = 'Scholarship Mentorship';
</script>

<section class="w-full bg-primary text-white">
	<div class="flex flex-wrap justify-between container mx-auto px-6">
		<div class="flex flex-col justify-center gap-2 py-6 md:py-28 xl:py-6 w-full md:w-2/3 xl:w-2/4">
			<span class="text-base md:text-lg xl:text-xl font-light">Country's first</span>
			<span class="text-xl md:text-2xl xl:text-3xl">Affordable marketplace for</span>
			<span class="text-3xl md:text-4xl xl:text-5xl font-bold">Scholarship Mentoring</span>
			<div class="flex items-center gap-4 mt-4">
				<a href="/service/scholarship-mentoring/find-a-mentor"
					><button
						class="bg-white text-primary text-sm xl:text-base font-bold rounded-2xl px-8 py-3 border border-white whitespace-nowrap"
						>Find a Mentor</button
					></a
				>
				<a href="/service/scholarship-mentoring/be-a-mentor"
					><button
						class="bg-transparent hover:bg-white text-white hover:text-primary text-sm xl:text-base font-bold rounded-2xl px-8 py-3 border border-white whitespace-nowrap"
						>Be a Mentor</button
					></a
				>
			</div>
		</div>
		<div class="flex items-end justify-end w-full md:w-1/3 xl:w-2/4">
			<img
				src="/images/scholarship_model_1.png"
				alt="Scholarship Mentoring Model"
				class="object-contain h-full w-auto"
			/>
		</div>
	</div>
</section>
<section class="container mx-auto md:px-6">
	<div
		class="bg-white grid grid-cols-1 md:grid-cols-3 gap-4 p-4 xl:p-6 rounded-2xl shadow w-fit md:-translate-y-2/4"
	>
		<div class="bg-[#F9F6FF] border border-borderColor rounded-2xl flex flex-col p-4 xl:p-6 gap-2">
			<h6 class="text-primary text-base md:text-lg xl:text-2xl font-bold">Skilled Mentors</h6>
			<span class="text-lightColor text-xs xl:text-sm"
				>We onboard the best mentors who can give the best mentorship ever!</span
			>
		</div>
		<div class="bg-[#F9F6FF] border border-borderColor rounded-2xl flex flex-col p-4 xl:p-6 gap-2">
			<h6 class="text-primary text-base md:text-lg xl:text-2xl font-bold">Quality Mentorship</h6>
			<span class="text-lightColor text-xs xl:text-sm"
				>We maintain the quality by taking feedbacks constantly.</span
			>
		</div>
		<div class="bg-[#F9F6FF] border border-borderColor rounded-2xl flex flex-col p-4 xl:p-6 gap-2">
			<h6 class="text-primary text-base md:text-lg xl:text-2xl font-bold">Affordable Pricing</h6>
			<span class="text-lightColor text-xs xl:text-sm"
				>Our milestone based payment system is very affordable for students.</span
			>
		</div>
	</div>
</section>
<section class="container mx-auto py-8 md:py-10 xl:py-20 px-6">
	<Features />
</section>
<section class="w-full bg-primary py-6 md:py-10 xl:py-20">
	<div
		class="flex flex-wrap justify-center md:justify-between items-center gap-6 md:gap-0 container mx-auto px-6"
	>
		<h6 class="text-white text-xl md:text-2xl xl:text-4xl font-bold">
			Find Yourself a Mentor Now!
		</h6>
		<a href="/service/scholarship-mentoring/find-a-mentor"
			><button
				class="py-4 px-8 bg-white hover:bg-primary border border-white text-primary hover:text-white font-bold rounded-2xl"
				>Find a Mentor</button
			></a
		>
	</div>
</section>
