<script lang="ts">
	import { page } from '$app/stores';
    import { Icon, Button } from '$lib';

	export let thumbnail: any;
	export let title: string;
	export let content: string;
	export let description: string;
	export let createdAt: string;
	export let updatedAt: string;
	export let publishedAt: string;
	export let project_id: string;
	export let images: any;

	// I hate what I am doing here, really need to find a better
	// way to have the base url expose to all part of the app
	const base_url = 'http://localhost:1337';

	const image_path = thumbnail.data.attributes.url;
	// const { origin } = $page.url

</script>

<div class="project-card">
	<div class="img"

	style="background-image: url('{base_url}{image_path}')"
    >
		<!-- <img src="{base_url}{image_path}" alt="" /> -->
	</div>
	<div class="details">
		<h3 class='title' >{title}</h3>
		<p class="description">
			{description}
		</p>
		<Button class="project-link link" href="/"> Read about Project <Icon name='rght_arrow' class='right_arrow' /> </Button>
	</div>
</div>

<style src="./Style.scss" lang="scss"></style>
