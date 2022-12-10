<script>
	import { createForm } from 'felte';
	import { validator } from '@felte/validator-yup';
	import * as yup from 'yup';

	import Input from '$lib/components/Form/Input.svelte';
	import Label from '$lib/components/Form/Label.svelte';
	import Error from '$lib/components/Form/Error.svelte';
	import Select from '$lib/components/Form/Select.svelte';
	import TextArea from '$lib/components/Form/TextArea.svelte';
	import ButtonPrimary from '$lib/components/ButtonPrimary.svelte';

	const services = ['General Info', 'Direct Admission', 'Scholarship Mentoring'];

	let message = { submitted: false, success: false, text: '' };

	const schema = yup.object().shape({
		name: yup.string().required('Please enter your name'),
		phone: yup.string().required('Please enter your phone number'),
		service: yup.string().required(),
		message: yup.string().required('Please enter your message'),
		email: yup
			.string()
			.email('Please enter a valid e-mail address')
			.required('Email address is required')
			.trim()
	});

	const { form, data, errors, isValid, isSubmitting, reset } = createForm({
		initialValues: {
			name: '',
			email: '',
			phone: '',
			service: 'General Info',
			message: ''
		},
		extend: validator({ schema }),
		onSubmit: async (values) => {
			const response = await fetch('/api/email', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(values)
			});
			message.submitted = true;
			if (response.ok) {
				message.success = true;
				message.text = 'Thank you for your message! We will get back to you shortly.';
				reset();
			} else {
				message.success = false;
				message.text = 'Something went wrong. Please try again later.';
			}
		}
	});
</script>

<form use:form>
	<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
		<div>
			<Label label_for="name" label="Name" />
			<Input
				id="name"
				name="name"
				type="text"
				placeholder="Md. Abdullah"
				error={$errors.name}
				classes="w-full"
			/>
			{#if $errors.name}
				<Error message={$errors.name} />
			{/if}
		</div>
		<div>
			<Label label_for="email" label="Email" />
			<Input
				id="email"
				name="email"
				type="email"
				placeholder="example@example.com"
				error={$errors.email}
				classes="w-full"
			/>
			{#if $errors.email}
				<Error message={$errors.email} />
			{/if}
		</div>
		<div>
			<Label label_for="phone" label="Phone" />
			<Input
				id="phone"
				name="phone"
				type="text"
				placeholder="+8801XXXXXXXXX"
				error={$errors.phone}
				classes="w-full"
			/>
			{#if $errors.phone}
				<Error message={$errors.phone} />
			{/if}
		</div>
		<div>
			<Label label_for="service" label="Service" />
			<Select id="service" name="service" error={$errors.service} classes="w-full">
				{#each services as service}
					<option value={service}>{service}</option>
				{/each}
			</Select>
			{#if $errors.service}
				<Error message={$errors.service} />
			{/if}
		</div>
	</div>
	<div class="mt-6">
		<Label label_for="message" label="Message" />
		<TextArea id="message" name="message" rows="8" classes="w-full" />
	</div>
	<ButtonPrimary disabled={!$isValid} loading={$isSubmitting} classes="px-6 py-3 mt-6"
		>Send Message</ButtonPrimary
	>
	{#if message.submitted}
		<div
			class="w-full font-semibold text-base mt-4 {message.success
				? 'text-green-500'
				: 'text-red-600'} "
		>
			{message.text}
		</div>
	{/if}
</form>
