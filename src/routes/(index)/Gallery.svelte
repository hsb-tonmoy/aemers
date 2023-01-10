<script>
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';

	import Subheading from '$lib/components/Subheading.svelte';

	const options = {
		rewind: true,
		perPage: 4,
		gap: '1rem',
		fixedWidth: '370px',
		fixedHeight: '470px',
		cover: true,
		pagination: false,
		lazyLoad: 'nearby',
		breakpoints: {
			1000: {
				perPage: 1
			}
		},
		classes: {
			arrows: 'splide__arrows gallery-arrows',
			arrow: 'splide__arrow gallery-arrow',
			prev: 'splide__arrow--prev gallery-prev',
			next: 'splide__arrow--next gallery-next'
		}
	};
</script>

<section class="flex flex-col px-12 py-20 lg:py-40">
	<div class="w-full h-full container mx-auto">
		<Subheading text="Our Gallery" />
		<span class="font-bold text-secondary text-2xl md:text-3xl xl:text-5xl xl:leading-snug"
			>Sneak peek into our events</span
		>
	</div>
	<div class="mt-10 px-6">
		<Splide {options} aria-labelledby="basic-example-heading" class="custom-class">
			{#each { length: 14 } as _, index}
				<SplideSlide>
					<img src={`/images/gallery/slide (${index + 1}).jpg`} alt={`Image ${index + 1}`} />
				</SplideSlide>
			{/each}
		</Splide>
	</div>
</section>

<style>
	:global(.gallery-arrows) {
		position: absolute;
		bottom: 0px;
		left: -50px;
	}

	:global(.gallery-arrow) {
		position: initial;
		top: 0;
		width: 36px;
		height: 36px;
		border-radius: 50%;
		background-image: linear-gradient(
			90deg,
			rgba(137, 96, 255, 1) 0%,
			rgba(125, 79, 254, 1) 54%,
			rgba(116, 67, 255, 1) 100%
		) !important;
	}

	:global(.gallery-arrow > svg) {
		fill: white !important;
	}

	:global(.gallery-next) {
		margin-top: 10px;
	}
</style>
