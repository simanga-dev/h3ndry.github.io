<script context="module">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ fetch }) {
		// Use a `limit` querystring parameter to fetch a limited number of posts
		// e.g. fetch('posts.json?limit=5') for 5 most recent posts
		const posts = await fetch('blog/posts.json').then((res) => res.json());

		return {
			props: {
				posts
			}
		};
	}
</script>

<script>
	import PageHead from '$lib/components/PageHead.svelte';
	import { Article } from '$lib';
	import ArticleTitle from '$lib/components/ArticleTitle.svelte';
	import ArticleMeta from '$lib/components/ArticleMeta.svelte';
	import ArticleDescription from '$lib/components/ArticleDescription.svelte';

	export let posts;
</script>

<PageHead title="Blog" description="Hendry blog post, I share my thought and everything that is heppenng in my programming jouner" />


<!-- <p> -->
<!--  Hendry	This is a miimalistic example of a blog built with <a href="https://kit.svelte.dev">SvelteKit</a> -->
<!-- 	and <a href="https://mdsvex.com/">MDsveX</a>. -->
<!-- 	<a href="https://github.com/mvasigh/sveltekit-mdsvex-blog">View source code on Github.</a> -->
<!-- </p> -->

{#each posts as { slug, title, author, description, date }}
	<Article {slug} {title} {description} {date} />
{/each}

<slot />
