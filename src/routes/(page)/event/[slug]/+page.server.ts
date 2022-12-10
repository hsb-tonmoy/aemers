import { getDirectusClient } from '$lib/utils/directusClient';

export const load: PageLoad = async ({ params }) => {
	const { slug } = params;
	const directus = await getDirectusClient();

	const { data } = await directus.items('events').readByQuery({
		filter: {
			slug: {
				_eq: slug
			}
		}
	});
	const event = data[0];

	return {
		event
	};
};
