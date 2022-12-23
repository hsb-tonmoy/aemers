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

	import { page_title } from '$lib/components/stores';

	$page_title = 'Apply Now';

	const destinations = ['USA', 'Canada', 'UK', 'Australia', 'New Zealand', 'Other'];
	const degrees = ["Bachelor's Degree", "Master's Degree", 'Doctorate', 'Other'];

	const majors = [
		'Computer Science',
		'Engineering',
		'Sciences',
		'Business Studies',
		'Humanities',
		'Social Sciences',
		'Health Sciences',
		'Other'
	];

	const englishProficiencyOptions = [
		'IELTS',
		'TOEFL',
		'Duolingo',
		'Wish to Take IELTS',
		'Wish to get enrolled with no test',
		'Wish to get enrolled with Medium of Instruction'
	];

	const schema = yup.object().shape({
		firstName: yup.string().required('Please enter your first name'),
		lastName: yup.string().required('Please enter your first name'),
		phone: yup.string().required('Please enter your phone number'),
		email: yup
			.string()
			.email('Please enter a valid e-mail address')
			.required('Email address is required')
			.trim(),
		desiredDestination: yup.string().required('Please choose your desired destination'),
		desiredDegree: yup.string().required('Please choose your desired degree'),
		desiredMajor: yup.string().required('Please choose your desired major'),
		englishProficiency: yup.string().required('Please choose your english proficiency'),
		englishProficiencyScore: yup.string(),
		message: yup.string()
	});

	const { form, data, errors, isValid, isSubmitting, reset } = createForm({
		initialValues: {
			firstName: '',
			lastName: '',
			phone: '',
			email: '',
			desiredDestination: '',
			desiredDegree: '',
			desiredMajor: '',
			englishProficiency: '',
			englishProficiencyScore: '',
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
			if (response.ok) {
				reset();
			} else {
				console.log('');
			}
		}
	});
</script>

<div class="container mx-auto px-6 py-20">
	<h1 class="block-heading mb-10">Let us help you get started</h1>
	<form use:form>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
			<div>
				<Label label_for="firstName" label="First Name" />
				<Input
					id="firstName"
					name="firstName"
					type="text"
					placeholder="Md. Abdullah"
					error={$errors.firstName}
					classes="w-full"
				/>
				{#if $errors.firstName}
					<Error message={$errors.firstName} />
				{/if}
			</div>
			<div>
				<Label label_for="lastName" label="Last Name" />
				<Input
					id="lastName"
					name="lastName"
					type="text"
					placeholder="Md. Abdullah"
					error={$errors.lastName}
					classes="w-full"
				/>
				{#if $errors.lastName}
					<Error message={$errors.lastName} />
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
				<Label label_for="desiredDestination" label="Desired Destination" />
				<Select
					id="desiredDestination"
					name="desiredDestination"
					error={$errors.desiredDestination}
					classes="w-full"
				>
					{#each destinations as destination}
						<option value={destination}>{destination}</option>
					{/each}
				</Select>
				{#if $errors.desiredDestination}
					<Error message={$errors.desiredDestination} />
				{/if}
			</div>
			<div>
				<Label label_for="desiredDegree" label="Desired Degree" />
				<Select
					id="desiredDegree"
					name="desiredDegree"
					error={$errors.desiredDegree}
					classes="w-full"
				>
					{#each degrees as degree}
						<option value={degree}>{degree}</option>
					{/each}
				</Select>
				{#if $errors.desiredDegree}
					<Error message={$errors.desiredDegree} />
				{/if}
			</div>
			<div>
				<Label label_for="desiredMajor" label="Desired Major" />
				<Select id="desiredMajor" name="desiredMajor" error={$errors.desiredMajor} classes="w-full">
					{#each majors as major}
						<option value={major}>{major}</option>
					{/each}
				</Select>
				{#if $errors.desiredMajor}
					<Error message={$errors.desiredMajor} />
				{/if}
			</div>
			<div>
				<Label label_for="englishProficiency" label="Status of English Proficiency" />
				<Select
					id="englishProficiency"
					name="englishProficiency"
					error={$errors.englishProficiency}
					classes="w-full"
				>
					{#each englishProficiencyOptions as option}
						<option value={option}>{option}</option>
					{/each}
				</Select>
				{#if $errors.englishProficiency}
					<Error message={$errors.englishProficiency} />
				{/if}
			</div>
			<div>
				{#if $data.englishProficiency === 'IELTS' || $data.englishProficiency === 'TOEFL' || $data.englishProficiency === 'Duolingo'}
					<Label label_for="englishProficiencyScore" label="What is your score?" />
					<Input
						id="englishProficiencyScore"
						name="englishProficiencyScore"
						type="text"
						placeholder="Score"
						error={$errors.englishProficiencyScore}
						classes="w-full"
					/>
					{#if $errors.englishProficiencyScore}
						<Error message={$errors.englishProficiencyScore} />
					{/if}
				{/if}
			</div>
		</div>
		<div class="mt-6">
			<Label label_for="message" label="Add a Note" />
			<TextArea id="message" name="message" rows={8} classes="w-full" />
		</div>
		<ButtonPrimary disabled={!$isValid} loading={$isSubmitting} classes="px-6 py-3 mt-6"
			>Submit</ButtonPrimary
		>
	</form>
</div>
