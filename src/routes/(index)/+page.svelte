<script>
	import Hero from './Hero.svelte';
	import ApplicationBlock from './ApplicationBlock.svelte';
	import KnowledgebaseBlock from './KnowledgebaseBlock.svelte';
	import VisaInterviewBlock from './VisaInterviewBlock.svelte';
	import PrintedMaterialBlock from './PrintedMaterialBlock.svelte';
	import ContactBlock from './ContactBlock.svelte';
	import CTABanner from '$lib/components/CTABanner.svelte';

	import { page_title } from '$lib/components/stores';

	$page_title = 'Home';

	export let data;
</script>

<Hero />
<ApplicationBlock />
<KnowledgebaseBlock />
<VisaInterviewBlock data={data.visa_interview_services.data} />
<PrintedMaterialBlock />
<!-- <StudentReviewBlock reviews={data.reviews.data} /> -->
<ContactBlock />
<div class="container mx-auto px-6 my-20">
	<CTABanner />
</div>
