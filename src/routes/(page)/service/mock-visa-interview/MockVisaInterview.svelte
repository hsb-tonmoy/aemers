<script>
	import {
		Infinity,
		Medal,
		PlayCircular,
		QuestionMarkCircular,
		Randomization,
		CheckMark
	} from '$lib/components/Icons';
	import Scroll from '$lib/components/Scroll.svelte';
	import Feature from './Feature.svelte';

	const features = [
		{
			heading: 'Unlimited Tests',
			description:
				'Take as many tests as you want. Practice again and again to prepare yourself for the Visa Interview!',
			icon: Infinity
		},
		{
			heading: 'Authentic Questions',
			description:
				'Test yourself with questions curated by our experts to simulate a real Visa Interview.',
			icon: QuestionMarkCircular
		},
		{
			heading: 'Randomization',
			description:
				'Prepare yourself with a variety of unique questions that cover all common scenarios.',
			icon: Randomization
		}
	];

	const premiumFeatures = [
		'Flexible scheduling.',
		'Foreign national interviewer.',
		'Authentic interview setting.',
		'Affordable pricing.'
	];
</script>

<section class="flex flex-col container mx-auto justify-between">
	<div class="flex flex-wrap xl:flex-nowrap gap-8 w-full py-20 md:py-28" id="hero">
		<div class="flex flex-col justify-center w-full xl:w-2/4 px-4 md:px-6 xl:px-10 2xl:px-20">
			<h6 class="font-bold text-xl md:text-2xl">Welcome to</h6>
			<h1 class="font-bold text-4xl md:text-5xl xl:text-6xl text-primary my-2">
				Mock Visa Interview
			</h1>
			<span class="text-lighterText text-sm mb-6"
				>Here you can take free simulated visa interviews. You can evaluate yourself with multiple
				authentic and unique questions.</span
			>
			<div class="flex items-center gap-x-4">
				<a href="https://app.aemers.com/mock_visa_interview" target="_blank" rel="noreferrer">
					<button
						class="text-white font-bold bg-primary hover:bg-primaryDarker border border-primary py-2 px-4 rounded-2xl"
						>Start for Free</button
					>
				</a>
				<a href="/contact">
					<button
						class="inline-flex gap-x-2 items-center font-bold text-primary bg-white hover:text-white hover:bg-primary hover: border border-primary py-2 px-4 rounded-2xl"
						><span class="w-4 h-4 block"><Medal /></span> Go Premium</button
					>
				</a>
			</div>
		</div>
		<div class="w-full xl:w-2/4 h-[45vh]">
			<div class="hero w-full h-full bg-cover bg-center" />
		</div>
	</div>

	<a href="#prepare">
		<Scroll />
	</a>
</section>

<div
	id="prepare"
	class="flex flex-col items-center justify-center container mx-auto min-h-screen py-20 md:py-28"
>
	<h6 class="font-bold text-xl md:text-2xl">Prepare yourself for</h6>
	<h1 class="font-bold text-4xl md:text-5xl xl:text-6xl text-primary my-2">
		Visa Interview for Free
	</h1>
	<img
		src="/images/mock_visa_mockup.jpg"
		alt="Mock Visa Interview Free"
		class="w-full xl:w-3/4 object-cover"
	/>
	<div class="flex flex-wrap md:flex-nowrap gap-10 items-center mt-10 px-6">
		{#each features as feature}
			<Feature {...feature} />
		{/each}
	</div>
</div>

<!-- <div class="bg-primary px-6 py-20 md:py-28 text-white">
	<section class="container mx-auto flex flex-col">
		<h2 class="font-bold text-3xl md:text-4xl xl:text-5xl my-2">
			Mock Test with A Real Interviewer!
		</h2>
		<div class="flex flex-wrap gap-y-10 items-center">
			<div class="flex flex-col justify-center w-full xl:w-3/4">
				<h6 class="inline-flex items-center gap-x-2 font-bold text-lg md:text-xl xl:text-2xl mt-6">
					<span class="bg-white w-[8%] md:w-[5%] xl:w-[3%] h-[2px]" />Only for $25
				</h6>
				<span class="text-sm md:text-base mt-2 mb-10">
					Take a mock interview with a native English speaking interviewer and conquer all your
					fears.
				</span>
				<div class="flex items-center gap-x-4">
					<a href="/contact">
						<button
							class="inline-flex gap-x-2 items-center font-bold text-primary bg-white hover:text-white hover:bg-primaryDarker border border-white hover:border-primary py-2 px-6 rounded-2xl"
							><span class="w-4 h-4 block"><Medal /></span> Go Premium</button
						>
					</a>
					<button
						class="inline-flex gap-x-2 items-center font-bold text-white bg-primary hover:text-primary hover:bg-white border border-white py-2 px-6 rounded-2xl"
						><span class=" w-5 h-5 block"><PlayCircular /></span> Watch Demo</button
					>
				</div>
			</div>
			<div class="w-full xl:w-1/4 flex flex-col gap-y-6">
				{#each premiumFeatures as feature}
					<li class="flex items-center gap-x-2 text-lg md:text-xl font-medium">
						<div
							class="inline-flex items-center bg-transparent border-2 border-white rounded-md p-px md:p-[2px] w-5 h-5 md:w-6 md:h-6 xl:w-7 xl:h-7"
						>
							<span class="w-full block"><CheckMark /></span>
						</div>
						{feature}
					</li>
				{/each}
			</div>
		</div>
	</section>
</div> -->
<style>
	.hero {
		background-image: url('/images/visa_interview.jpg');
	}
</style>
