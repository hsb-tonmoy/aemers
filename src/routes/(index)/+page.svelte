<script>
	import { page_title } from '$lib/components/stores';

	$page_title = 'Home';

	import Hero from './Hero.svelte';

	import DirectAdmission from './DirectAdmission.svelte';
	import F1Transfer from './F1Transfer.svelte';
	export let data;
</script>

<Hero />
<DirectAdmission />
<F1Transfer />
