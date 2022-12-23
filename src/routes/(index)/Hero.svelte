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

<div id="hero" class="flex items-center py-12 w-full h-full bg-primary">
	<div class="container mx-auto px-6">
		<div class="flex flex-wrap xl:flex-nowrap items-center gap-20 mx-auto mb-20">
			<div class="w-full xl:w-2/4">
				<h1 id="slogan" class="text-3xl font-bold text-white lg:text-5xl xl:text-7xl">
					Let's Make Your Scholarship Journey a Lovable One
				</h1>
				<div class="flex items-center gap-x-4 mt-10">
					<ButtonPrimary classes="bg-white text-primary px-8 py-3">Get Started</ButtonPrimary>
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
							<ButtonSecondary classes="border-white text-white px-8 py-3" iconPosition={'left'}>
								<span slot="icon" class="w-6 h-6 block">
									<PlayCircular />
								</span>
								Learn More
							</ButtonSecondary>
						</Trigger>
					</Modal>
				</div>
			</div>
			<div class="w-full xl:w-2/4">
				<img
					src="/images/hero-image.png"
					alt="Group of Aemers students"
					class="object-cover md:w-3/4 w-full xl:w-full"
				/>
			</div>
		</div>

		<!-- <a href="#application">
			<Scroll />
		</a> -->
	</div>
</div>

<style>
	#slogan {
		line-height: 1.1 !important;
	}
</style>
