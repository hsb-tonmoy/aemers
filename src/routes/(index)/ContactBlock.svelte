<script>
	import ContactForm from '$lib/components/Contact/ContactForm.svelte';
	import ContactPerson from '$lib/components/Contact/ContactPerson.svelte';
</script>

<section class="container mx-auto w-full h-full px-6">
	<h3 class="block-heading mb-6">Contact Us</h3>
	<div class="grid grid-cols-1 xl:grid-cols-2fr-1fr items-center gap-10">
		<div class="">
			<ContactForm />
		</div>
		<div class="">
			<ContactPerson />
		</div>
	</div>
</section>
