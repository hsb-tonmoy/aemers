<script lang="ts">
	import { Menu, Close } from '$lib/components/Icons';
	import { MegaMenu } from 'flowbite-svelte';
	import { getAssetURL } from '$lib/utils/getAssetURL';
	import ButtonPrimary from '$lib/components/ButtonPrimary.svelte';
	let menuOpen: boolean = false;

	export let site_logo: string;

	export let services = [];
	// Group services by Service_Category into an array

	const servicesByCategory = services.reduce((acc, service) => {
		const { Name } = service.Service_Category;
		if (!acc[Name]) {
			acc[Name] = [];
		}
		acc[Name].push(service);
		return acc;
	}, {});

	// Create an array of objects with the category name and the services in that category

	const servicesArray = Object.keys(servicesByCategory).map((key) => ({
		category: key,
		services: servicesByCategory[key]
	}));
</script>

<header class="bg-white">
	<nav class="container mx-auto px-6 py-4 lg:flex lg:items-center lg:gap-x-8">
		<div class="flex items-center">
			<div>
				<a class="text-2xl font-bold text-gray-800 hover:text-gray-700 lg:text-3xl" href="/"
					><img src="/logo.png" alt="Aemers LLC" class="w-40" /></a
				>
			</div>

			<div class="flex lg:hidden">
				<button
					on:click={() => (menuOpen = !menuOpen)}
					type="button"
					class="text-gray-500 hover:text-gray-600 focus:text-gray-600 focus:outline-none"
					aria-label="toggle menu"
				>
					{#if !menuOpen}
						<span class="block w-6 h-6">
							<Menu />
						</span>
					{:else}
						<span class="block w-6 h-6">
							<Close />
						</span>
					{/if}
				</button>
			</div>
		</div>

		<div
			class="absolute {menuOpen
				? 'block translate-x-0 opacity-100 '
				: 'hidden opacity-0 -translate-x-full'} inset-x-0 z-20 w-full bg-white px-6 py-4 shadow-md transition-all duration-300 ease-in-out lg:relative lg:top-0 lg:mt-0 lg:flex lg:justify-evenly lg:w-full lg:translate-x-0 lg:items-center lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none"
		>
			<div
				class="lg:-px-8 flex flex-col space-y-4 lg:mt-0 lg:flex-row lg:justify-end lg:items-center lg:space-y-0 lg:gap-x-8"
			>
				<a id="services" class="navItem" href="#">Services</a>
				<MegaMenu items={servicesArray} let:item>
					<div class="mr-6">
						<span class="text-[#AFAFAF] text-xs font-semibold">{item.category}</span>
						<hr class="bg-borderColor h-px w-full mb-2 mt-1" />
						<div class="flex flex-col gap-2">
							{#each item.services as subitem}
								<a
									href={subitem.External_Service
										? subitem.External_Link
										: '/service/' + subitem.Slug}
									target={subitem.External_Service ? '_blank' : ''}
									><span class="text-secondary text-sm">{subitem.Name}</span></a
								>
							{/each}
						</div>
					</div>
				</MegaMenu>
				<a class="navItem" href="https://kb.aemers.com" target="_blank" rel="noreferrer"
					>Knowledgebase</a
				>
				<a class="navItem" href="/about">About Us</a>
				<a class="navItem" href="/contact">Contact Us</a>
			</div>
			<a href="https://app.aemers.com" target="_blank" rel="noreferrer">
				<ButtonPrimary classes="self-start px-6 py-2 uppercase">Get Started</ButtonPrimary>
			</a>
		</div>
	</nav>
</header>

<style type="postcss">
	.navItem {
		@apply transform text-secondary transition-colors duration-300 hover:text-primary;
	}
</style>
