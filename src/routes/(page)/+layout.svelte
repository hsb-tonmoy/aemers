<script>
	import { page_title } from '$lib/components/stores';
</script>

<section class="flex justify-center items-center bg-primary h-[20vh] text-white text-center ">
	<h1 class="font-bold text-2xl md:text-3xl xl:text-5xl">{$page_title}</h1>
</section>
<div class="">
	<slot />
</div>
