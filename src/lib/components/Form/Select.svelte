<script lang="ts">
	export let name: string;
	export let id: string;
	export let classes: string = 'w-full';
	export let placeholder: string = '';
	export let disabled: boolean = false;
	export let touched: boolean = false;
	export let error: boolean = false;
</script>

<select
	{name}
	{id}
	{disabled}
	class={`form-input border border-borderColor focus:border-primary focus:ring focus:ring-primary disabled:bg-gray-300 ${
		error ? 'border-red-600 focus:border-red-600 focus:ring-red-600' : ''
	} ${
		touched && !error ? 'border-2 border-greenSignal ring-greenSignal' : ''
	} text-sm rounded-xl block py-4 px-5 ${classes}`}
	{placeholder}
>
	<slot />
</select>
