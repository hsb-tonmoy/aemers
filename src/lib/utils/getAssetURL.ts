export function getAssetURL(id) {
	if (!id) return null;
	return `${import.meta.env.VITE_API_URL}/assets/${id}`;
}
