<script lang="ts">
	import { getAssetURL } from '../utils/getAssetURL';
	import { Facebook, YouTube, LinkedIn } from '../components/Icons';
	import SubscribeForm from './SubscribeForm.svelte';
	export let site_logo: string;

	const social_links = [
		{ icon: Facebook, href: 'https://fb.com/aemers' },
		{ icon: YouTube, href: 'https://www.youtube.com/@aemersllc' },
		{ icon: LinkedIn, href: 'https://www.linkedin.com/company/aemer-s-llc/' }
	];
</script>

<footer class="bg-[#F8F8F8]">
	<div class="container mx-auto px-6 py-12">
		<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
			<div class="flex flex-col gap-y-3">
				<a class="text-2xl font-bold text-gray-800 hover:text-gray-700 lg:text-3xl" href="/"
					><img src={getAssetURL(site_logo)} alt="Aemers LLC" class="w-40" /></a
				>
				<span class="text-sm md:text-base text-lightColor"
					>Our diverse services are crafted in such a way that all of our valued stakeholders
					discover the scholarship journey to be truly lovable.</span
				>
				<div class="flex items-center gap-x-2">
					{#each social_links as link}
						<a href={link.href} target="_blank" rel="noreferrer"
							><span class="block w-6 h-6 text-primary"><svelte:component this={link.icon} /></span
							></a
						>
					{/each}
				</div>
			</div>

			<div>
				<h6 class="">Pages</h6>

				<div class="mt-3 flex flex-col items-start space-y-2">
					<a href="/" class="footer-link">Home</a>
					<a href="#" class="footer-link">Our Mission</a>
					<a href="/about" class="footer-link">About Us</a>
					<a href="/contact" class="footer-link">Contact Us</a>
					<a
						href="https://app.aemers.com/terms-conditions"
						class="footer-link"
						target="_blank"
						rel="noreferrer">Terms & Conditions</a
					>
					<a
						href="https://app.aemers.com/privacy-policy"
						target="_blank"
						rel="noreferrer"
						class="footer-link">Privacy Policy</a
					>
				</div>
			</div>

			<div>
				<h6 class="">Links</h6>

				<div class="mt-3 flex flex-col items-start space-y-2">
					<a href="https://app.aemers.com" target="_blank" rel="noreferrer" class="footer-link"
						>app.aemers</a
					>
					<a href="https://kb.aemers.com" target="_blank" rel="noreferrer" class="footer-link"
						>Knowledgebase</a
					>
					<a href="https://sat.aemers.com" target="_blank" rel="noreferrer" class="footer-link"
						>SAT by Aemers</a
					>
				</div>
			</div>

			<div>
				<h6 class="">Blogs & Newsletter</h6>

				<div class="flex flex-col items-start space-y-2 mt-3">
					<p class="text-lightColor text-sm">
						Subscribe to the newsletter to stay up to date with Aemers.
					</p>
					<div class="w-full">
						<SubscribeForm />
					</div>
				</div>
			</div>
		</div>
	</div>
</footer>

<style lang="postcss">
	h6 {
		@apply font-bold text-base text-black;
	}
	.footer-link {
		@apply text-sm text-lightColor transition-colors duration-300 hover:text-secondary;
	}
</style>
