import { redirect } from '@sveltejs/kit';

export const load: PageLoad = async () => {
	throw redirect(302, '/event/bootcamp');
};
