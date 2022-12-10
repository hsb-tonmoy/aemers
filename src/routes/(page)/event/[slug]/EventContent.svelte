<script>
	import { Clock, Calendar, MapPin } from '$lib/components/Icons';
	import { convertDate } from '$lib/components/convertDate';

	export let event;
</script>

<div class="flex flex-wrap gap-6">
	{#if event.date_and_time}
		<div class="inline-flex items-center gap-1">
			<span class="text-primary block w-5 h-5"><Clock /></span>
			<span class="text-primary font-medium text-base">{convertDate(event.date_and_time)}</span>
		</div>
	{/if}
	{#if event.location}
		<div class="inline-flex items-center gap-1">
			<span class="text-primary block w-5 h-5"><MapPin /></span>
			<span class="text-primary font-medium text-base">{event.location}</span>
		</div>
	{/if}
</div>
