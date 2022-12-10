<script>
	import BeAMentorContent from './BeAMentorContent.svelte';

	import { page_title } from '$lib/components/stores';

	$page_title = 'Be a Mentor';
</script>

<section class="container mx-auto px-6 py-20">
	<p class="text-base mb-6">
		A mentor is nobody but who <i>knows</i> the way, then <i>goes</i> the way, and finally
		<i>shows</i> the way. If you received a scholarship at a US undergrad program and know the process
		ins and outs, then our mentorship bus has a seat reserved for you. Join our club to help aspiring
		international students seeking US undergrad scholarships. This is the best way to convert your free
		hours into precious time for those who need it and also enjoy great financial profit.
	</p>
	<BeAMentorContent />
</section>
