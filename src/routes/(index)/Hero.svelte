<script lang="ts">
	import ButtonPrimary from '$lib/components/ButtonPrimary.svelte';
	import ButtonSecondary from '$lib/components/ButtonSecondary.svelte';

	import Scroll from '$lib/components/Scroll.svelte';

	import { Modal, Content, Trigger } from 'sv-popup';

	import { PlayCircular } from '$lib/components/Icons';
	import { onMount } from 'svelte';

	onMount(() => {
		const header: HTMLElement | null = document.querySelector('header');
		const headerHeight = header!.getBoundingClientRect().height;

		const hero: HTMLElement | null = document.getElementById('hero');
		hero!.style.height = `calc(100vh - ${headerHeight}px)`;
	});
</script>

<div
	id="hero"
	class="flex flex-col justify-center py-12 w-full h-full bg-cover bg-center bg-no-repeat"
>
	<div class="container mx-auto px-6 text-center">
		<div class="mx-auto max-w-7xl self-center mb-20">
			<h1 id="slogan" class="text-3xl font-bold text-secondary lg:text-5xl xl:text-7xl">
				Let's Make Your <span class="text-primary">Scholarship</span> <br /> Journey a Lovable One
			</h1>

			<div class="flex justify-center items-center gap-x-4 mt-10">
				<ButtonPrimary>Get Started</ButtonPrimary>
				<Modal>
					<Content>
						<iframe
							style="aspect-ratio: 16/9;"
							width="100%"
							height="auto"
							src="https://www.youtube.com/embed/g-iO6JQWUbY"
							title="YouTube video player"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						/>
					</Content>
					<Trigger>
						<ButtonSecondary iconPosition={'left'}>
							<span slot="icon" class="w-6 h-6 block">
								<PlayCircular />
							</span>
							Learn More
						</ButtonSecondary>
					</Trigger>
				</Modal>
			</div>
		</div>

		<a href="#application">
			<Scroll />
		</a>
	</div>
</div>

<style>
	#slogan {
		line-height: 1.3 !important;
	}

	#hero {
		background-image: url('/images/home_bg.png');
	}
</style>
