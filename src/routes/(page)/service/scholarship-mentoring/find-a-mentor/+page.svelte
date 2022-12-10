<script>
	import Mentors from './Mentors.svelte';

	export let data;

	import { page_title } from '$lib/components/stores';

	$page_title = 'Find a Mentor';
</script>

<div class="container mx-auto px-6 py-20">
	<Mentors data={data.mentors} />
</div>
