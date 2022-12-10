<script>
	import { getAssetURL } from '$lib/utils/getAssetURL';
	import ButtonPrimary from '$lib/components/ButtonPrimary.svelte';
	import ButtonSecondary from '$lib/components/ButtonSecondary.svelte';

	export let data;

	import { page_title } from '$lib/components/stores';

	$page_title = data.mentor.full_name;
</script>

<div class="container mx-auto px-6 py-20">
	<div class="flex flex-wrap md:flex-nowrap justify-center md:justify-start items-center gap-8">
		<img
			src={getAssetURL(data.mentor.mentor_photo)}
			alt={data.mentor.full_name}
			class="w-60 object-cover rounded-full"
		/>
		<div class="flex flex-col">
			<h1 class="font-bold text-2xl md:text-3xl">{data.mentor.full_name}</h1>
			<span class="text-primary text-sm md:text-base mt-1">{data.mentor.highlight}</span>
			<p class="text-lightColor text-sm md:text-base my-6">{data.mentor.summary}</p>
			<div class="grid grid-cols-3 gap-4">
				<div class="flex flex-col">
					<span class="text-lightColor text-xs">Current Location</span>
					<span class="text-secondary font-bold text-base mt-1">{data.mentor.current_location}</span
					>
				</div>
				<div class="flex flex-col">
					<span class="text-lightColor text-xs white">Accepting Students from</span>
					<span class="text-secondary font-bold text-base mt-1"
						>{data.mentor.accepting_students_from}</span
					>
				</div>
				<div class="flex flex-col">
					<span class="text-lightColor text-xs">Price</span>
					<span class="text-secondary font-bold text-base mt-1"
						>{data.mentor.currency + data.mentor.price}</span
					>
				</div>
			</div>
			<div class="flex items-center gap-4 mt-6">
				<ButtonPrimary>Get in Touch</ButtonPrimary>
				<ButtonSecondary>Request a Demo</ButtonSecondary>
			</div>
		</div>
	</div>
	<div class="prose w-full mt-10 md:ml-6">
		<h6 class="font-bold text-primary text-2xl">About</h6>
		{@html data.mentor.about_mentor}
	</div>
</div>
