import { Directus } from '@directus/sdk';
import 'dotenv/config';

const directus = new Directus(process.env.VITE_API_URL);
const staticToken = process.env.VITE_STATIC_TOKEN;

async function getDirectusClient() {
	try {
		if (process.env.VITE_DIRECTUS_EMAIL && process.env.VITE_DIRECTUS_PASSWORD) {
			await directus.auth.login({
				email: process.env.VITE_DIRECTUS_EMAIL,
				password: process.env.VITE_DIRECTUS_PASSWORD
			});
		} else if (staticToken) {
			await directus.auth.static(staticToken);
		}
	} catch (err) {
		if (err.parent.code === 'ECONNREFUSED') {
			console.error(
				'Unable to connect to the Directus instance. Make sure the .env file is present and the VITE_DIRECTUS_URL variable is pointing the correct URL.'
			);
		}
	}

	return directus;
}

export { getDirectusClient };
