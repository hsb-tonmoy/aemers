<script>
	import { page_title } from '$lib/components/stores';

	$page_title = 'Home';

	import Hero from './Hero.svelte';

	export let data;
</script>

<Hero />
