import { getDirectusClient } from '$lib/utils/directusClient';

export async function load() {
	const directus = await getDirectusClient();
	const site_settings = await directus.singleton('Site_Settings').read();

	const services = await directus.items('Service').readByQuery({
		fields: [
			'id',
			'Name',
			'Slug',
			'External_Service',
			'External_Link',
			'Service_Category.Name',
			'Service_Category.sort'
		],
		filter: {
			status: {
				_eq: 'published'
			}
		},
		sort: ['Service_Category.sort']
	});

	return {
		site_settings,
		services
	};
}
