import { json } from '@sveltejs/kit';
import { getDirectusClient } from '$lib/utils/directusClient';

export async function POST({ request }) {
	const data = await request.json();

	const directus = await getDirectusClient();

	try {
		const mentor = await directus.items('mentor_applicants').createOne(data);
	} catch (error) {
		console.log(error);
		return json(error, {
			status: 400
		});
	}

	return json(data, {
		status: 201
	});
}
