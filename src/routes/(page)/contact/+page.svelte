<script>
	import ContactForm from '$lib/components/ContactForm.svelte';
	import ContactPerson from '$lib/components/ContactPerson.svelte';
	import CTABanner from '$lib/components/CTABanner.svelte';

	import { page_title } from '$lib/components/stores';

	$page_title = 'Contact Us';
</script>

<div class="container mx-auto px-6 py-20">
	<div class="grid grid-cols-1 xl:grid-cols-2fr-1fr items-center gap-10">
		<div class="">
			<h6 class="font-bold text-2xl md:text-3xl">Get in Touch</h6>
			<p class="text-sm md:text-base mb-6">
				Leave a message for us and we will get back to you in a moment!
			</p>
			<ContactForm />
		</div>
		<div class="">
			<ContactPerson contactPage={true} />
		</div>
	</div>
	<div class="mt-10">
		<CTABanner />
	</div>
</div>
