<script>
	import Subheading from '$lib/components/Subheading.svelte';
	import ContactForm from '$lib/components/Contact/ContactForm.svelte';
	import ContactPerson from '$lib/components/Contact/ContactPerson.svelte';
</script>

<section class="w-full h-full px-6 py-6 lg:py-20">
	<div class="container mx-auto">
		<Subheading text="Send us a Message" />
		<span class="font-bold text-secondary text-2xl md:text-3xl xl:text-5xl xl:leading-snug"
			>Get in Touch</span
		>
		<div class="grid grid-cols-1 xl:grid-cols-2fr-1fr items-center gap-10 mt-10">
			<div class="">
				<ContactForm />
			</div>
			<div class="">
				<ContactPerson />
			</div>
		</div>
	</div>
</section>
