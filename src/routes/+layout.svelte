<script>
	import '../app.postcss';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	import { page_title } from '$lib/components/stores';

	export let data;
</script>

<svelte:head>
	<title>{$page_title} | Aemers LLC</title>
</svelte:head>

<Header site_logo={data.site_settings.site_logo} services={data.services.data} />
<main>
	<slot />
</main>
<Footer site_logo={data.site_settings.site_logo} />

<style lang="postcss" global>
	:root {
		--primary: #7443ff;
		--secondary: #232323;
		--bgColor: #f9f7ff;
		--lightColor: #727272;
		--borderColor: #e3d9ff;
		--lighterColor: #898989;
	}

	.block-heading {
		@apply font-bold text-2xl md:text-3xl lg:text-5xl;
		line-height: 1.3 !important;
	}
</style>
