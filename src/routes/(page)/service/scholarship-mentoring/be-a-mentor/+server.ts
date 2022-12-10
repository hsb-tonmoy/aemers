import { json } from '@sveltejs/kit';
import { getDirectusClient } from '$lib/utils/directusClient';

export async function POST({ request }) {
	const data = await request.json();

	console.log(data);

	return json(data, {
		status: 201
	});
}
