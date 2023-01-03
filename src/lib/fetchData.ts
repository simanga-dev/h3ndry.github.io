export const fetch_post = async (url: string) => {
	const res = await fetch(url);
	return await res.json();
};
