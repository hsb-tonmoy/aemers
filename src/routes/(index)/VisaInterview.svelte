<script>
	import Subheading from '$lib/components/Subheading.svelte';
</script>

<section class="bg-cover bg-no-repeat px-12 pt-40 pb-20">
	<div class="flex flex-wrap xl:flex-nowrap items-center gap-10 container mx-auto pt-20">
		<div class="w-full xl:w-2/4">
			<Subheading text="Visa Interview" />
			<span class="font-bold text-secondary text-2xl md:text-3xl xl:text-5xl xl:leading-snug"
				>Does Visa Interview seem daunting to you? Aemers is here to make it a lot easier!</span
			>
			<p class="text-lighterColor leading-[1.9] mt-2 mb-6 text-justify">
				Here at Aemers, you get access to multiple Visa Interview preparation resources. You can
				self-evaluate your interview skills with our online simulator for FREE. It is an automated
				system with unique and authentic questions to prepare you for every scenario. However, if
				you prefer a more personalized approach, you can book a premium one-on-one session with our
				CEO, Dr. Rashid. Dr. Rashid has years of experience with visa interview preparation.
			</p>
		</div>
		<div class="w-full xl:w-2/4 grid gap-6 md:grid-0 grid-cols-1 md:grid-cols-2 xl:mt-20">
			<div
				class="card relative flex flex-col items-center bg-white rounded-lg px-12 py-6 md:row-start-1 md:col-start-1"
			>
				<img class="w-14 object-cover" src="/images/microphone.svg" alt="Microphone icon" />
				<h6 class="font-bold text-secondary text-lg md:text-xl mt-6 mb-4">
					Free Mock Visa Interview with a Simulator
				</h6>
				<span class="text-lightColor text-sm md:text-base pb-6"
					>Practice and track your visa interview preparation with our free mock visa simulator</span
				>

				<a
					class="absolute bottom-0 mx-auto"
					href="https://app.aemers.com/mock_visa_interview"
					target="_blank"
					rel="noreferrer"
				>
					<button class="rounded-t-full text-white px-6 py-2 font-bold">Start Now!</button>
				</a>
			</div>
			<div
				class="card relative flex flex-col items-center bg-white rounded-lg px-12 py-6 md:row-start-2 md:col-start-2"
			>
				<img class="w-52 object-cover" src="/images/visa_mamoon.png" alt="Microphone icon" />
				<h6 class="font-bold text-secondary text-lg md:text-xl mt-6 mb-4">
					Mock Visa Interview with Dr. Rashid
				</h6>
				<span class="text-lightColor text-sm md:text-base pb-6"
					>Practice your interview skills with an industry leading expert</span
				>
				<a
					class="absolute bottom-0 mx-auto"
					href="https://app.aemers.com/mock_visa_interview"
					target="_blank"
					rel="noreferrer"
				>
					<button class="rounded-t-full text-white px-6 py-2 font-bold">Schedule Now!</button>
				</a>
			</div>
		</div>
	</div>
</section>

<style>
	section {
		background-image: url('/images/bg-wave.svg');
	}

	.card {
		box-shadow: 0px 10px 30px 0px
			rgba(0.011718749999989342, 0.011718749999989342, 0.011718749999989342, 0.07);
	}

	button {
		transition: 0.5s;
		background-size: 200% auto;
		background-image: linear-gradient(
			90deg,
			rgba(137, 96, 255, 1) 0%,
			rgba(125, 79, 254, 1) 54%,
			rgba(116, 67, 255, 1) 100%
		);
	}
	button:hover {
		background-position: right center; /* change the direction of the change here */
	}
</style>
