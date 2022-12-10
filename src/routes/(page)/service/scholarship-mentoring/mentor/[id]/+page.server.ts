import { getDirectusClient } from '$lib/utils/directusClient';

export const load: PageLoad = async ({ params }) => {
	const { id } = params;
	const directus = await getDirectusClient();

	const mentor = await directus.items('mentors').readOne(id);

	return {
		mentor
	};
};
