<script>
	import Hero from './Hero.svelte';
	import ApplicationBlock from './ApplicationBlock.svelte';
	import KnowledgebaseBlock from './KnowledgebaseBlock.svelte';
	import ScholarshipBlock from './ScholarshipBlock.svelte';
	import VisaInterviewBlock from './VisaInterviewBlock.svelte';
	import SATBlock from './SATBlock.svelte';
	import PrintedMaterialBlock from './PrintedMaterialBlock.svelte';
	import MiscServicesBlock from './MiscServicesBlock.svelte';
	import BootcampBlock from './BootcampBlock.svelte';
	import StudentReviewBlock from './StudentReviewBlock.svelte';
	import ContactBlock from './ContactBlock.svelte';
	import CTABanner from '$lib/components/CTABanner.svelte';

	import { page_title } from '$lib/components/stores';

	$page_title = 'Home';

	export let data;
</script>

<Hero />
<ApplicationBlock />
<KnowledgebaseBlock />
<ScholarshipBlock />
<VisaInterviewBlock data={data.visa_interview_services.data} />
<SATBlock data={data.sat_services.data} />
<PrintedMaterialBlock />
<MiscServicesBlock data={data.other_services.data} />
<BootcampBlock />
<StudentReviewBlock reviews={data.reviews.data} />
<ContactBlock />
<div class="container mx-auto px-6 my-20">
	<CTABanner />
</div>
