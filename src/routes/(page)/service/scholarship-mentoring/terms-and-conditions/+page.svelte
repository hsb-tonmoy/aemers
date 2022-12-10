<script>
	export let data;

	import { page_title } from '$lib/components/stores';

	$page_title = data.tandc[0].name;
</script>

<div class="container mx-auto px-6 py-20">
	<div class="mx-auto prose w-full">
		{@html data.tandc[0].body}
	</div>
</div>
