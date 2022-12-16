import { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async () => {
	throw redirect(302, 'https://api-web.aemers.com/');
};
