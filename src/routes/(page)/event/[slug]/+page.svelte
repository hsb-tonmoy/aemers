<script>
	import EventContent from './EventContent.svelte';

	export let data;
</script>

<div class="container mx-auto px-6 py-20">
	<EventContent event={data.event} />
	<div class="mx-auto prose w-full mt-6">
		{@html event.description}
	</div>
</div>
