import { getDirectusClient } from '$lib/utils/directusClient';

export async function load() {
	const directus = await getDirectusClient();
	const { data } = await directus.items('team').readByQuery({
		fields: ['id', 'sort', 'name', 'position', 'photo', 'linkedin', 'website']
	});

	return {
		teams: data
	};
}
