<script lang="ts">
  export let label: string;
  export let label_for: string;
  export let classes: string = "";
</script>

<label for={label_for} class={`block mb-2 text-base ${classes}`}>{label}</label>
