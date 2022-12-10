<script>
	import { getAssetURL } from '$lib/utils/getAssetURL';
	import ButtonPrimary from '$lib/components/ButtonPrimary.svelte';
	export let data;
</script>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
	{#each data as mentor}
		<div class="flex flex-col gap-y-4 border border-borderColor p-6 rounded-2xl">
			<div class="flex items-center gap-3">
				<img
					src={getAssetURL(mentor.mentor_photo)}
					alt={mentor.full_name}
					class="w-12 object-cover rounded-full"
				/>
				<div class="flex flex-col">
					<h6 class="font-bold text-base md:text-lg">{mentor.full_name}</h6>
					<span class="text-primary text-sm md:text-base">{mentor.highlight}</span>
				</div>
			</div>
			<p class="text-lightColor text-sm md:text-base">{mentor.summary}</p>
			<div class="flex items-center justify-between mt-auto">
				<span class="font-bold text-lg md:text-xl">{mentor.currency || '৳'} {mentor.price}</span>
				<a href="/service/scholarship-mentoring/mentor/{mentor.id}">
					<ButtonPrimary>View Profile</ButtonPrimary>
				</a>
			</div>
		</div>
	{/each}
</div>
