<script>
	import Subheading from '$lib/components/Subheading.svelte';
	import { Folder, File, I20 } from '$lib/components/Icons';
</script>

<section class="w-full h-full px-12 py-20 bg-white">
	<div class="container mx-auto">
		<div class="flex flex-col items-center justify-center">
			<Subheading text="Our Process" />
			<span class="font-bold text-secondary text-2xl md:text-3xl xl:text-5xl xl:leading-snug"
				>How it Works?</span
			>
			<div class="relative mt-6 flex flex-wrap md:flex-nowrap items-center justify-center gap-16">
				<div class="flex flex-col items-center text-center">
					<div
						class="circle flex justify-center items-center bg-white w-40 h-40 rounded-full drop-shadow-lg"
					>
						<span class="block w-14 h-14 text-primary"><Folder /></span>
					</div>
					<span class="font-bold text-xl xl:text-2xl mt-8 mb-3">Open a File</span>
					<p class="text-sm xl:text-base text-lightColor leading-relaxed">
						Meet a counselor and enroll into our service
					</p>
				</div>
				<div class="flex flex-col items-center text-center">
					<div
						class="circle flex justify-center items-center bg-white w-40 h-40 rounded-full drop-shadow-lg"
					>
						<span class="block w-14 h-14 text-primary"><File /></span>
					</div>
					<span class="font-bold text-xl xl:text-2xl mt-8 mb-3">Submit your Documents</span>
					<p class="text-sm xl:text-base text-lightColor leading-relaxed">
						Send your academic profile to your designated counselor
					</p>
				</div>
				<div class="flex flex-col items-center text-center">
					<div
						class="circle flex justify-center items-center bg-white w-40 h-40 rounded-full drop-shadow-lg"
					>
						<span class="block w-14 h-14 text-primary"><I20 /></span>
					</div>
					<span class="font-bold text-xl xl:text-2xl mt-8 mb-3">Receive your I-20</span>
					<p class="text-sm xl:text-base text-lightColor leading-relaxed">
						Receive your I-20, ace the Visa Interview and land in the USA
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.circle {
		border: double 10px transparent;
		background-image: linear-gradient(white, white),
			radial-gradient(circle at top left, #7443ff, #8960ff);
		background-origin: border-box;
		background-clip: content-box, border-box;
	}

	.arrow {
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}
</style>
