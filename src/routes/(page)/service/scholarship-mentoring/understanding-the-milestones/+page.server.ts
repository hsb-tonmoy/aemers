import { getDirectusClient } from '$lib/utils/directusClient';

export const load: PageLoad = async () => {
	const directus = await getDirectusClient();

	const { data } = await directus.items('pages').readByQuery({
		filter: {
			slug: {
				_eq: 'understanding-the-milestones'
			}
		}
	});

	return {
		understand: data
	};
};
