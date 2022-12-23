import { redirect } from '@sveltejs/kit';

export const load = async () => {
	throw redirect(302, 'https://api-web.aemers.com/');
};
