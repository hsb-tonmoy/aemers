<script>
	import ButtonPrimary from '$lib/components/ButtonPrimary.svelte';
	import CTABanner from '$lib/components/CTABanner.svelte';
	import TeamMembers from './TeamMembers.svelte';

	import { page_title } from '$lib/components/stores';

	$page_title = 'About Us';

	export let data;
</script>

<div class="container mx-auto px-6 py-20">
	<!-- Picture Block Section -->
	<div class="w-full">
		<section class="container mx-auto w-full">
			<div class="flex flex-wrap items-center gap-6 md:gap-0">
				<div
					class="flex flex-col justify-center items-start gap-6 w-full md:w-2/4 md:px-8 lg:px-20"
				>
					<h3 class="block-heading">Helping students reach their dream destination.</h3>
					<span class="text-sm lg:text-base"
						>Our diverse services are crafted in such a way that all of our valued stakeholders
						discover the scholarship journey to be truly lovable.</span
					>
					<a href="/contact">
						<ButtonPrimary>Contact Us</ButtonPrimary>
					</a>
				</div>
				<div class="w-full md:w-2/4">
					<img
						src="/images/harvardPerson.png"
						alt="Visit Our Collection of Print Materials"
						class="object-cover w-full h-full"
					/>
				</div>
			</div>
		</section>
	</div>
	<!-- Image Gallery -->
	<div class="py-20 w-full mt-20">
		<h2 class="block-heading">Lovable Learning Creator</h2>
		<div class="w-full md:w-3/4 xl:w-2/4">
			<p class="text-sm lg:text-base leading-relaxed mt-4">
				Hello world, it’s love.<br /><br />
				Love is the most emphatic human instinct. When we wanted to articulate our core philosophy in
				one single word, love was the only word that felt perfect. The Latin of love is amôr, and our
				name Aemers stemmed from there.While learning is the foundation of growth, love is the propellant
				of progress. Our commitment to altruism and benevolence is substantiated by a wide spectrum of
				free services. These are resources we have democratized for enabling even the most disenfranchised
				entities to obtain scholarships abroad at different levels.<br /><br />

				And our diverse services are crafted in such a way that all of our valued stakeholders
				discover the scholarship journey to be truly lovable.
			</p>
		</div>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
			<img
				src="/images/about-1.png"
				alt="Aemers Students"
				class="object-cover w-full h-full rounded-2xl"
			/>
			<img
				src="/images/about-2.png"
				alt="Aemers Students"
				class="object-cover w-full h-full rounded-2xl"
			/>
		</div>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
			<img
				src="/images/about-3.png"
				alt="Aemers Students"
				class="object-cover w-full h-full rounded-2xl"
			/>
			<img
				src="/images/about-4.png"
				alt="Aemers Students"
				class="object-cover w-full h-full rounded-2xl"
			/>
			<img
				src="/images/about-5.png"
				alt="Aemers Students"
				class="object-cover w-full h-full rounded-2xl"
			/>
		</div>
	</div>
</div>
<!-- Our Story -->
<div class="py-20 bg-secondary text-center text-white">
	<div class="flex flex-col items-center container mx-auto px-6">
		<h3 class="block-heading">Our Story</h3>

		<div class="w-full md:w-3/4 xl:w-2/4">
			<p class="text-sm lg:text-base leading-loose mt-2 text-justify">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel diam adipiscing turpis neque
				feugiat aliquet diam pretium. Nullam cras habitasse velit quis nunc. Purus nunc, aliquam sed
				volutpat cursus sagittis porttitor. Ac ut cursus nec, nunc a vel, non quis duis. Et pulvinar
				aliquam velit enim. Aliquam convallis volutpat amet neque, sit elementum felis sodales non.
				Eget ut lacus in et quam risus donec montes, porta. Cras risus posuere elit imperdiet
				aliquet maecenas ut adipiscing. Augue urna eu nisi at rutrum sit. Arcu elementum non est
				varius condimentum senectus egestas. Dictumst magna varius dolor bibendum ut turpis euismod
				volutpat nullam.
			</p>
			<img src="/images/aemersChangeBanner.png" alt="Aemers Re-brand" class="w-full mt-4" />
		</div>
	</div>
</div>
<!-- USA Background -->
<div id="usa" class="relative py-20 text-white">
	<div
		style="background: rgba(0,0,0,0.7)"
		class="absolute w-full h-full inset-0 top-0 right-0 left-0 z-10"
	/>
	<div class="relative flex flex-col just items-center container mx-auto px-6 z-20">
		<h3 class="block-heading">
			We are a US-based Company dedicated to serving students all over the world
		</h3>
		<p class="text-sm lg:text-base leading-loose my-2 text-justify">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel diam adipiscing turpis neque
			feugiat aliquet diam pretium. Nullam cras habitasse velit quis nunc. Purus nunc, aliquam sed
			volutpat cursus sagittis porttitor.
		</p>
		<div class="self-start mt-4">
			<ButtonPrimary>Explore Our Services</ButtonPrimary>
		</div>
	</div>
</div>
<!-- Our Team -->
<div class="container mx-auto px-6 py-20 text-center">
	<h3 class="block-heading">Our Team</h3>
	<span class="text-sm lg:text-base mb-6"
		>Aemers boasts a team full of brilliant and enthusiastic professionals who will tend to your
		every need</span
	>

	<div class="mt-10">
		<TeamMembers teams={data.teams} />
	</div>

	<div class="mt-10">
		<CTABanner />
	</div>
</div>

<style>
	#usa {
		background-image: url('/images/USbackground.jpg');
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
	}
</style>
