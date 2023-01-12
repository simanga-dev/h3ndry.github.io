<script lang="ts" >
    import posts from './project_list.json'
	import PageHead from '$lib/components/PageHead.svelte';
	import { ProjectArticle } from '$lib';

</script>

<PageHead title="Project" description="List of projece" />

{#each posts as { slug, title, author, description, thumbnail }}
	<ProjectArticle {thumbnail} {title} {slug} {description} />
{/each}

<!-- <slot /> -->
