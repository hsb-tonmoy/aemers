import { json } from '@sveltejs/kit';
import { getDirectusClient } from '$lib/utils/directusClient';

export async function POST({ request }) {
	const data = await request.json();

	const directus = await getDirectusClient();

	try {
		const lead = await directus.items('leads').createOne(data);
	} catch (error) {
		console.log(error);
		return json(error, {
			status: 400
		});
	}

	return json(
		{ success: true },
		{
			status: 201
		}
	);
}
