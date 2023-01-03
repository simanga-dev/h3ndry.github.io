<script context="module">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ url, fetch }) {
		const post = await fetch(`${url.pathname}.json`).then((res) => res.json());

		if (!post || !post.published) {
			return {
				status: 404,
				error: new Error('Post could not be found')
			};
		}

		return {
			props: {
				post
			}
		};
	}
</script>

<script>
	import PageHead from '$lib/components/PageHead.svelte';
	import { Line,ImageWrapper } from '$lib';
	import ArticleMeta from '$lib/components/ArticleMeta.svelte';

	export let post;
</script>

<PageHead title={post.title} description={post.description} />

<h1 class="post-title">{post.title}</h1>

<center>
	<Line width={5.5} />
</center>

<ImageWrapper img_url={post.thumbnail} alt={post.title} />

<slot />

<style lang="scss">
	h1 {
		font-family: var(--font-mono);
		font-size: 3rem;
		margin: 0rem;
	}
</style>
