<script>
	export let data;

	import { page_title } from '$lib/components/stores';

	$page_title = data.service.Name;
</script>

<div class="container mx-auto px-6 py-20">
	<div class="mx-auto prose w-full">
		{@html data.service.Description}
	</div>
</div>
