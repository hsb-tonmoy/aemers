import { getDirectusClient } from '$lib/utils/directusClient';

export const load: PageLoad = async ({ params }) => {
	const { slug } = params;
	const directus = await getDirectusClient();

	const { data } = await directus.items('Service').readByQuery({
		fields: ['id', 'Name', 'Slug', 'Description'],
		filter: {
			Slug: {
				_eq: slug
			}
		}
	});
	const service = data[0];

	return {
		service
	};
};
