<script context="module">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ fetch }) {
		// Use a `limit` querystring parameter to fetch a limited number of posts
		// e.g. fetch('posts.json?limit=5') for 5 most recent posts
		const posts = await fetch('projects/list.json').then((res) => res.json());

		return {
			props: {
				posts
			}
		};
	}
</script>

<script>
	import PageHead from '$lib/components/PageHead.svelte';
	import { ProjectArticle } from '$lib';
	import ArticleTitle from '$lib/components/ArticleTitle.svelte';
	import ArticleMeta from '$lib/components/ArticleMeta.svelte';
	import ArticleDescription from '$lib/components/ArticleDescription.svelte';

	export let posts;
</script>

<PageHead title="Project" description="List of projece" />

{#each posts as { slug, title, author, description, thumbnail }}
	<ProjectArticle {thumbnail} {title} {slug} {description} />
{/each}

<!-- <slot /> -->
