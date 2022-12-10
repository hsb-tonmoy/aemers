<script>
	import TeamMemberCard from './TeamMemberCard.svelte';

	export let teams = [];

	// Sort teams by sort field

	teams = teams.sort((a, b) => a.sort - b.sort);
</script>

<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
	{#each teams as team}
		<TeamMemberCard
			name={team.name}
			position={team.position}
			photo={team.photo}
			linkedin={team.linkedin}
			website={team.website}
		/>
	{/each}
</div>
