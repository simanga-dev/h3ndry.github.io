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
	import { WrittenBy, Line } from '$lib';
	import ArticleMeta from '$lib/components/ArticleMeta.svelte';

	export let post;
</script>

<PageHead title={post.title} description={post.description} />

<WrittenBy name={post.author} date={post.date} />
<h1 class="post-title">{post.title}</h1>
<center>
	<Line width={5.5} />
</center>

<!-- <ArticleTitle title={post.title} /> -->

<!-- <ArticleMeta author={post.author} date={post.date} /> -->

<slot />

<style lang="scss">
	h1 {
		font-family: var(--font-mono);
		font-size: 2rem;
		margin: 0rem;
	}
	center {
		margin-bottom: 2rem;
	}

	@media (min-width: 720px) {
		h1 {
			font-size: 2.4rem;
			font-size: 3.5rem;
            padding-top: 4px;
            line-height: 1;
			margin: 0;
		}
		center {
			margin-bottom: 4rem;
		}
	}
</style>
