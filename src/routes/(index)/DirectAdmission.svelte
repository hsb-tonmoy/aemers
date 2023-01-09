<script>
	import Subheading from '$lib/components/Subheading.svelte';
	import ButtonPrimary from '$lib/components/ButtonPrimary.svelte';
</script>

<section class="relative w-full h-full px-6 py-6 lg:py-20 bg-cover bg-center bg-no-repeat">
	<div class="container mx-auto px-6 py-20">
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
				<a href="/go"><ButtonPrimary>Enroll now!</ButtonPrimary></a>
			</div>
			<div class="w-full lg:w-2/4 py-10 lg:py-0">
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
