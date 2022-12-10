import { getDirectusClient } from '$lib/utils/directusClient';

export async function load() {
	const directus = await getDirectusClient();
	const reviews = await directus.items('student_reviews').readByQuery({
		fields: ['id', 'student_name', 'student_photo', 'institution', 'review']
	});

	const visa_interview_services = await directus.items('Service').readByQuery({
		fields: ['id', 'Name', 'Slug', 'Summary', 'Button_Text', 'Featured_Image'],
		filter: {
			Service_Category: {
				Name: {
					_eq: 'Visa Interview'
				}
			}
		}
	});

	const sat_services = await directus.items('Service').readByQuery({
		fields: ['id', 'Name', 'Slug', 'Summary', 'Button_Text', 'Featured_Image'],
		filter: {
			Service_Category: {
				Name: {
					_eq: 'SAT Preparation'
				}
			}
		}
	});

	const other_services = await directus.items('Service').readByQuery({
		fields: ['id', 'Name', 'Slug', 'Summary', 'Button_Text', 'Featured_Image', 'hidden_from_list'],
		filter: {
			Service_Category: {
				Name: {
					_eq: 'Miscellaneous'
				}
			}
		}
	});

	return {
		reviews,
		visa_interview_services,
		sat_services,
		other_services
	};
}
