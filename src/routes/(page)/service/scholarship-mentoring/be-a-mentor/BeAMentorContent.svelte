<script>
	import { AccordionItem, Accordion } from 'flowbite-svelte';
	import { createForm } from 'felte';
	import { validator } from '@felte/validator-yup';
	import * as yup from 'yup';

	import ButtonPrimary from '$lib/components/ButtonPrimary.svelte';
	import ButtonSecondary from '$lib/components/ButtonSecondary.svelte';
	import Input from '$lib/components/Form/Input.svelte';
	import Label from '$lib/components/Form/Label.svelte';
	import Error from '$lib/components/Form/Error.svelte';
	import Select from '$lib/components/Form/Select.svelte';
	import TextArea from '$lib/components/Form/TextArea.svelte';

	const schema = yup.object().shape({
		first_name: yup.string().required('Please enter your first name'),
		last_name: yup.string().required('Please enter your last name'),
		phone: yup.string().required('Please enter your phone number'),
		email: yup
			.string()
			.email('Please enter a valid e-mail address')
			.required('Email address is required')
			.trim(),
		current_location: yup.string().required('Please enter your current location'),
		accepting_students_from: yup
			.string()
			.required('Please enter where your accepting students from'),
		primary_language: yup.string().required('Please enter your primary language'),
		institute_grades_910: yup
			.string()
			.required('Please enter the Name of the institution where you spent grades 9-10'),
		institute_grades_1112: yup
			.string()
			.required('Please enter the name of the institution where you spent grades 11-12'),
		high_school_medium: yup.string().required('Please choose your high school medium'),
		short_intro: yup.string().required('Please type a short intro'),
		about_yourself: yup.string().required('Please type about yourself')
	});

	const { form, data, errors, isValid, isSubmitting } = createForm({
		initialValues: {
			first_name: '',
			last_name: '',
			email: '',
			phone: '',
			current_location: '',
			accepting_students_from: '',
			primary_language: '',
			tagline: '',
			institute_grades_910: '',
			institute_grades_1112: '',
			high_school_medium: '',
			short_intro: '',
			about_yourself: '',
			comments_on_the_services: ''
		},
		extend: validator({ schema }),
		onSubmit: async (values) => {
			// POST the values to /service/scholarship-mentoring/be-a-mentor
			const response = await fetch('/service/scholarship-mentoring/be-a-mentor', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(values)
			});
		}
	});
</script>

<Accordion>
	<AccordionItem>
		<span slot="header">How does it work for the mentor?</span>
		<p class="">
			Read “Ask yourself three questions” to assess your qualification.   In a nutshell:   (1) the
			mentor makes an offer of price for the “Milestone” services to the mentee known as “Settled
			Price” (30K BDT or 3 Lac BDT whatever). The mentee pays in two installments (50%, 50% of the
			settled price), but the mentor receives the fund in three installments (40%, 40%, 20% of the
			settled price). (2) The mentee makes 50% payment to Aemers and (3) receives the first
			milestone of services, then (4) the fund is released to the mentor (40% of the settled price)
			upon deduction of Aemers’ service charge (20% of what mentor receives, not the settled price).
			At this stage, (5) the student clears the remaining 50% of the settled price and the (6)
			second milestone is achieved. (7) The fund is released to the mentor (40% of the settled
			price) upon deduction of Aemers’ service charge (20% of what mentor receives, not the settled
			price). The third milestone is the guidance and shadowing with visa preparation and usually
			happens after a brief pause. (7) the third milestone is achieved and (8) the fund is released
			to the mentor (20% of the settled price) upon deduction of Aemers’ service charge (20% of what
			mentor receives, not the settled price). The process ends here. The following table shows
			three examples (the last one remained incomplete):
		</p>
		<table class="tg">
			<thead>
				<tr>
					<th class="tg-0lax" />
					<th class="tg-6t3r">Case 1</th>
					<th class="tg-6t3r">Case 2</th>
					<th class="tg-6t3r">Case 3 (Mentor Abandoned)</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td class="tg-0lax">Settled price (price of mentoring)</td>
					<td class="tg-0lax">80,000</td>
					<td class="tg-0lax">200,000</td>
					<td class="tg-0lax">80,000</td>
				</tr>
				<tr>
					<td class="tg-1wig">First installment by mentee to Aemers</td>
					<td class="tg-spgj">40,000</td>
					<td class="tg-spgj">100,000</td>
					<td class="tg-spgj">40,000</td>
				</tr>
				<tr>
					<td class="tg-y6fn">Milestone 1 is achieved</td>
					<td class="tg-y6fn" />
					<td class="tg-y6fn" />
					<td class="tg-y6fn" />
				</tr>
				<tr>
					<td class="tg-0lax">Fund from Aemers to Mentor (40% of Settled price)</td>
					<td class="tg-v9ux">32,000</td>
					<td class="tg-v9ux">80,000</td>
					<td class="tg-v9ux">32,000</td>
				</tr>
				<tr>
					<td class="tg-0lax">Service charge of Aemers</td>
					<td class="tg-15nz">6,400</td>
					<td class="tg-15nz">16,000</td>
					<td class="tg-15nz">6,400</td>
				</tr>
				<tr>
					<td class="tg-1wig">Second installment by mentee to Aemers</td>
					<td class="tg-spgj">40,000</td>
					<td class="tg-spgj">100,000</td>
					<td class="tg-spgj">40,000</td>
				</tr>
				<tr>
					<td class="tg-y6fn">Milestone 2 is achieved</td>
					<td class="tg-y6fn" />
					<td class="tg-y6fn" />
					<td class="tg-y6fn" />
				</tr>
				<tr>
					<td class="tg-0lax">Fund from Aemers to Mentor (40% of Settled price)</td>
					<td class="tg-v9ux">32,000</td>
					<td class="tg-v9ux">80,000</td>
					<td class="tg-7geq" rowspan="5"
						>Note: the mentee cleared the second installment,<br />but the mentor became unavailable
						or the mentee <br />wished to discontinue with this mentor.<br /> Aemers will assign a
						new mentor and
						<br />utilize the fund accordingly.</td
					>
				</tr>
				<tr>
					<td class="tg-0lax">Service charge of Aemers</td>
					<td class="tg-gt90">6,400</td>
					<td class="tg-gt90">16,000</td>
				</tr>
				<tr>
					<td class="tg-y6fn">Milestone 3 is achieved</td>
					<td class="tg-y6fn" />
					<td class="tg-y6fn" />
				</tr>
				<tr>
					<td class="tg-0lax">Fund from Aemers to Mentor (20% of Settled price)</td>
					<td class="tg-v9ux">16,000</td>
					<td class="tg-v9ux">40,000</td>
				</tr>
				<tr>
					<td class="tg-0lax">Service charge of Aemers</td>
					<td class="tg-15nz">3,200</td>
					<td class="tg-15nz">8,000</td>
				</tr>
				<tr>
					<td class="tg-0lax" />
					<td class="tg-0lax" />
					<td class="tg-0lax" />
					<td class="tg-0lax" />
				</tr>
				<tr>
					<td class="tg-0lax">Mentor receives before service charge, total</td>
					<td class="tg-0lax">80,000</td>
					<td class="tg-0lax">200,000</td>
					<td class="tg-0lax">32,000</td>
				</tr>
				<tr>
					<td class="tg-0lax">Aemers receives from mentor, total</td>
					<td class="tg-0lax">16,000</td>
					<td class="tg-0lax">40,000</td>
					<td class="tg-0lax">6,400</td>
				</tr>
				<tr>
					<td class="tg-0lax">Mentor's net earning from this package</td>
					<td class="tg-0lax">64,000</td>
					<td class="tg-0lax">160,000</td>
					<td class="tg-0lax">25,600</td>
				</tr>
			</tbody>
		</table>
	</AccordionItem>
	<AccordionItem>
		<span slot="header">Ask yourself three questions</span>

		<p>
			<span data-contrast="auto"
				>As a mentor, you are expected to have gone through the entire process of scholarship
				journey on your own and also earned substantial accomplishment to be able to attract
				mentees. The exact definition of this accomplishment is subjective &mdash; ranging from
				getting into an Ivy league school and physically living in the US to receiving admission
				offer with significant scholarship but deferring to a later time or even declining due to
				family reasons. So, ask yourself:
			</span><strong><span data-contrast="auto">am I qualified enough</span></strong><span
				data-contrast="auto"
			>
				to be the co-captain of a person&rsquo;s voyage to the US scholarship. It&rsquo;s a long
				journey and it&rsquo;ll be unethical to abandon the mentee in the turbulent midocean (read
				abandonment clause in the <a href="https://aemers.com/scholarship/terms-and-conditions/"
					>Terms &amp; Conditions</a
				>). Abandonment happens when a mentor struggles in time management. So, ask yourself: will I
				genuinely be able to
			</span><strong><span data-contrast="auto">manage my time</span></strong><span
				data-contrast="auto"
			>
				for the project I am going to take? Now look carefully at our model from an external
				perspective. We have added very rigorous rules to ensure quality control and assurance so
				that the mentees receive the best possible service and their investment of time and money is
				protected. This is a marketplace model where Aemers keeps a fraction of the money that you
				will receive from the mentee. You will receive training certification and also Aemers has
				tons of tools on its LMS to make your mentoring process smoother. This is a strictly
				monitored and fed-forward process where the mentee, as a buyer, receives priority (read the
				&ldquo;Milestones&rdquo; section and understand the retarded release of fund). This is a
				brand-new mentoring model and perhaps you never heard about it. So, ask yourself, will you
				be able to
			</span><strong><span data-contrast="auto">comply</span></strong>
			<strong><span data-contrast="auto">with the rigorous QA policy</span></strong><span
				data-contrast="auto">? If yes, hop in and fill out the form below</span
			>
		</p>
	</AccordionItem>
</Accordion>
<div class="flex flex-wrap items-center gap-4 mt-6">
	<a
		href="/service/scholarship-mentoring/understanding-the-milestones"
		target="_blank"
		rel="noreferrer"
	>
		<ButtonPrimary>Understanding the Milestones</ButtonPrimary>
	</a>
	<a href="/service/scholarship-mentoring/terms-and-conditions" target="_blank" rel="noreferrer">
		<ButtonSecondary>Terms & Conditions</ButtonSecondary>
	</a>
</div>
<div class="mt-20">
	<h3 class="text-primary font-bold text-2xl md:text-3xl">Mentor Enrollment Form</h3>
	<hr class="w-full h-px bg-borderColor mt-1 mb-6" />
	<form use:form>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
			<div>
				<Label label_for="first_name" label="First Name" />
				<Input
					id="first_name"
					name="first_name"
					type="text"
					placeholder="Md. Abdullah"
					error={$errors.first_name}
				/>
				{#if $errors.first_name}
					<Error message={$errors.first_name} />
				{/if}
			</div>
			<div>
				<Label label_for="last_name" label="Last Name" />
				<Input
					id="last_name"
					name="last_name"
					type="text"
					placeholder="Hussain"
					error={$errors.last_name}
				/>
				{#if $errors.last_name}
					<Error message={$errors.last_name} />
				{/if}
			</div>
			<div>
				<Label label_for="phone" label="Phone Number" />
				<Input
					id="phone"
					name="phone"
					type="text"
					placeholder="+8801XXXXXXX"
					error={$errors.phone}
				/>
				{#if $errors.phone}
					<Error message={$errors.phone} />
				{/if}
			</div>
			<div>
				<Label label_for="email" label="Email" />
				<Input
					id="email"
					name="email"
					type="text"
					placeholder="example@example.com"
					error={$errors.email}
				/>
				{#if $errors.email}
					<Error message={$errors.email} />
				{/if}
			</div>
			<div>
				<Label label_for="current_location" label="Current Location" />
				<Input
					id="current_location"
					name="current_location"
					type="text"
					placeholder="USA"
					error={$errors.current_location}
				/>
				{#if $errors.current_location}
					<Error message={$errors.current_location} />
				{/if}
			</div>
			<div>
				<Label label_for="accepting_students_from" label="Accepting Students From:" />
				<Input
					id="accepting_students_from"
					name="accepting_students_from"
					type="text"
					placeholder="Everywhere"
					error={$errors.accepting_students_from}
				/>
				{#if $errors.accepting_students_from}
					<Error message={$errors.accepting_students_from} />
				{/if}
			</div>
			<div>
				<Label label_for="primary_language" label="Primary Language" />
				<Input
					id="primary_language"
					name="primary_language"
					type="text"
					placeholder="English, Bengali"
					error={$errors.primary_language}
				/>
				{#if $errors.primary_language}
					<Error message={$errors.primary_language} />
				{/if}
			</div>
			<div>
				<Label label_for="tagline" label="Highlight/Tagline" />
				<Input
					id="tagline"
					name="tagline"
					type="text"
					placeholder="I have been accepted into Harvard"
					error={$errors.tagline}
				/>
				{#if $errors.tagline}
					<Error message={$errors.tagline} />
				{/if}
			</div>
			<div>
				<Label
					label_for="institute_grades_910"
					label="Name of the institution where you spent grades 9-10"
				/>
				<Input
					id="institute_grades_910"
					name="institute_grades_910"
					type="text"
					placeholder="Name of the institution where you spent grades 9-10"
					error={$errors.institute_grades_910}
				/>
				{#if $errors.institute_grades_910}
					<Error message={$errors.institute_grades_910} />
				{/if}
			</div>
			<div>
				<Label
					label_for="institute_grades_1112"
					label="Name of the institution where you spent grades 11-12"
				/>
				<Input
					id="institute_grades_1112"
					name="institute_grades_1112"
					type="text"
					placeholder="Name of the institution where you spent grades 11-12"
					error={$errors.institute_grades_1112}
				/>
				{#if $errors.institute_grades_1112}
					<Error message={$errors.institute_grades_1112} />
				{/if}
			</div>
			<div>
				<Label label_for="high_school_medium" label="High School Medium" />
				<Select
					id="high_school_medium"
					name="high_school_medium"
					error={$errors.high_school_medium}
				>
					<option value="NCTB">NCTB</option>
					<option value="Edexcel">Edexcel</option>
					<option value="Cambridge">Cambridge</option>
					<option value="Other">Other</option>
				</Select>
				{#if $errors.high_school_medium}
					<Error message={$errors.high_school_medium} />
				{/if}
			</div>
			<div class="col-span-2">
				<Label label_for="short_intro" label="Short Intro" />
				<TextArea id="short_intro" name="short_intro" />
				{#if $errors.short_intro}
					<Error message={$errors.short_intro} />
				{/if}
			</div>
			<div class="col-span-2">
				<Label label_for="about_yourself" label="About Yourself" />
				<TextArea id="about_yourself" name="about_yourself" />
				{#if $errors.about_yourself}
					<Error message={$errors.about_yourself} />
				{/if}
			</div>
			<div class="col-span-2">
				<Label label_for="comments_on_the_services" label="Comments on the Services" />
				<TextArea id="comments_on_the_services" name="comments_on_the_services" />
				{#if $errors.comments_on_the_services}
					<Error message={$errors.comments_on_the_services} />
				{/if}
			</div>
		</div>
		<div class="mt-6">
			<ButtonPrimary disabled={!$isValid} loading={$isSubmitting}>Submit</ButtonPrimary>
		</div>
	</form>
</div>

<style>
	.tg td,
	th {
		font-family: 'Red Hat Display', Sans-serif !important;
	}
	.tg {
		border-collapse: collapse;
		border-spacing: 0;
	}
	.tg td {
		border-color: black;
		border-style: solid;
		border-width: 1px;
		font-family: Arial, sans-serif;
		font-size: 14px;
		overflow: hidden;
		padding: 5px;
		word-break: normal;
	}
	.tg th {
		border-color: black;
		border-style: solid;
		border-width: 1px;
		font-family: Arial, sans-serif;
		font-size: 14px;
		font-weight: normal;
		overflow: hidden;
		padding: 10px 5px;
		word-break: normal;
	}
	.tg .tg-spgj {
		background-color: #ffc000;
		color: #ffffff;
		text-align: left;
		vertical-align: top;
	}
	.tg .tg-1wig {
		font-weight: bold;
		text-align: left;
		vertical-align: top;
	}
	.tg .tg-7geq {
		background-color: #ffffc7;
		text-align: center;
		vertical-align: top;
	}
	.tg .tg-15nz {
		background-color: #009901;
		color: #ffffff;
		text-align: left;
		vertical-align: top;
	}
	.tg .tg-v9ux {
		background-color: #5b9bd5;
		color: #ffffff;
		text-align: left;
		vertical-align: top;
	}
	.tg .tg-0lax {
		text-align: left;
		vertical-align: top;
	}
	.tg .tg-6t3r {
		font-style: italic;
		font-weight: bold;
		text-align: left;
		vertical-align: top;
	}
	.tg .tg-y6fn {
		background-color: #c0c0c0;
		text-align: left;
		vertical-align: top;
	}
	.tg .tg-gt90 {
		background-color: #009901;
		color: #efefef;
		text-align: left;
		vertical-align: top;
	}
</style>
