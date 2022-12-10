<script lang="ts">
	export let reviews: any[] = [];
</script>

<div class="px-6 py-12 md:py-32 w-full text-secondary">
	<section class="container mx-auto w-full">
		<h3 class="block-heading">Student Testimonials</h3>
		<span class="text-base lg:text-lg text-primary mb-4"
			>Here is what our students say about us!</span
		>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 text-left">
			{#each reviews as review (review.id)}
				<div class="flex flex-col gap-y-3 border-2 border-borderColor rounded-2xl px-6 py-4">
					<img
						src={review.student_photo ||
							`https://ui-avatars.com/api/?name=${encodeURIComponent(
								review.student_name
							)}&background=FFA26D&format=svg&rounded=true&bold=true`}
						alt={review.student_name}
						class="w-16 h-16 rounded-full"
					/>
					<h6 class="font-bold text-secondary text-base md:text-xl">
						{review.student_name}
					</h6>
					<span class="text-primary text-sm md:text-base">{review.institution}</span>
					<p class="text-secondary text-sm md:text-base">
						{@html review.review}
					</p>
				</div>
			{/each}
		</div>
	</section>
</div>
