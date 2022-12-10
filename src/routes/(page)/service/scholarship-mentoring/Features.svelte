<script>
	import { CheckMark } from '$lib/components/Icons';

	const features_1 = [
		'Free Demo with the mentor',
		'Access to eLearning modules and LMS',
		'Scope of changing mentor',
		'Scope of instant feedback',
		'Money back guarantee after certain times',
		'Aborting at any milestone'
	];

	const features_2 = [
		'Guidance with test-prep',
		'Guidance with ECA enhancement',
		'Guidance with Common App essays',
		'Common App creation and filling out',
		'Reviewing and editing of the supplemental essays',
		'Guidance with Financial Aid applications',
		'Guidance with college decision-making',
		'Filling out of DS-160, guidance with visa interview',
		'Pre-flight advising'
	];
</script>

<div class="flex flex-col justify-center items-center">
	<div class="max-w-2xl">
		<h3 class="text-primary text-center font-bold text-2xl md:text-3xl xl:text-4xl mb-10">
			We offer the best mentorship for a scholarship hoping student!
		</h3>
	</div>
	<div class="max-w-max">
		<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
			{#each features_1 as feature}
				<div class="inline-flex items-center gap-2">
					<span class="shrink-0 text-primary block w-6 h-6"><CheckMark stroke={3} /></span>
					<span class="text-base xl:text-lg">{feature}</span>
				</div>
			{/each}
		</div>
	</div>
</div>
<div class="flex flex-col justify-center items-center mt-20">
	<div class="max-w-2xl">
		<h3 class="text-primary text-center font-bold text-2xl md:text-3xl xl:text-4xl mb-10">
			What do you get out of the mentorship?
		</h3>
	</div>
	<div class="max-w-max">
		<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
			{#each features_2 as feature}
				<div class="inline-flex items-center gap-2">
					<span class="shrink-0 text-primary block w-6 h-6"><CheckMark stroke={3} /></span>
					<span class="text-base xl:text-lg">{feature}</span>
				</div>
			{/each}
		</div>
	</div>
</div>
