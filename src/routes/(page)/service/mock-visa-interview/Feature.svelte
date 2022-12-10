<script>
  export let icon;
  export let heading = "";
  export let description = "";
</script>

<div class="flex flex-col items-start">
  <div
    class="inline-flex items-center bg-primary text-white w-12 h-12 md:w-14 md:h-14 p-2 rounded-full"
  >
    <span class="w-full block">
      <svelte:component this={icon} />
    </span>
  </div>
  <h6 class="font-bold text-lg md:text-xl mt-4 mb-3">{heading}</h6>
  <span class="text-lighterText text-sm md:text-base">{description}</span>
</div>
