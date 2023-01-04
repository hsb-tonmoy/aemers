<script>
	import { Phone, MapArrow, Mail } from '$lib/components/Icons';

	export let contactPage = false;
</script>

<section class="flex flex-col py-10 px-8 text-white bg-primary rounded-2xl">
	{#if !contactPage}
		<h6 class="font-bold text-xl md:text-2xl">Get in Touch</h6>
		<p class="text-sm md:text-base">
			Leave a message for us and we will get back to you in a moment!
		</p>
	{/if}
	<h6 class="font-bold text-lg md:text-xl">Aemers Bangladesh:</h6>
	<p class="font-semibold text-base md:text-lg">Tasnim Hassan</p>
	<span class="text-sm md:text-base">Administrative Manager, Aemers Bangladesh</span>
	<div class="flex flex-col gap-4 mt-6">
		<button class="inline-flex items-center gap-2">
			<div class="w-8 h-8 p-2 rounded-full bg-white">
				<span class="block text-primary"><Phone /></span>
			</div>
			+8801781373911
		</button>
		<button class="inline-flex items-center gap-2 text-left">
			<div class="w-8 h-8 p-2 rounded-full bg-white">
				<span class="block text-primary"><MapArrow /></span>
			</div>
			3/1 & 3/2, Block # A, Mirpur Rd, Dhaka – 1207, Bangladesh.
		</button>
		<button class="inline-flex items-center gap-2">
			<div class="w-8 h-8 p-2 rounded-full bg-white">
				<span class="block text-primary"><Mail /></span>
			</div>
			contact@aemers.com
		</button>
	</div>
	{#if contactPage}
		<hr class="w-full bg-borderColor h-px my-6" />
		<h6 class="font-bold text-lg md:text-xl">Aemers USA:</h6>
		<p class="font-semibold text-base md:text-lg">Dr. Mamoon Rashid</p>
		<span class="text-sm md:text-base">CEO, Aemers LLC</span>
		<div class="flex flex-col gap-4 mt-6">
			<button class="inline-flex items-center gap-2 text-left">
				<div class="w-8 h-8 p-2 rounded-full bg-white">
					<span class="block text-primary"><MapArrow /></span>
				</div>
				5101 Kenmare Loop, Richmond, VA 23234, USA
			</button>
			<button class="inline-flex items-center gap-2">
				<div class="w-8 h-8 p-2 rounded-full bg-white">
					<span class="block text-primary"><Mail /></span>
				</div>
				contact@aemers.com
			</button>
		</div>
	{/if}
</section>
