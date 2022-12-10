import { getDirectusClient } from '$lib/utils/directusClient';

export const load: PageLoad = async () => {
	const directus = await getDirectusClient();

	const { data } = await directus.items('mentors').readByQuery({
		filter: {
			status: {
				_eq: 'published'
			}
		}
	});

	return {
		mentors: data
	};
};
