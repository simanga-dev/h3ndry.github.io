<script lang="ts">
	import { Icon, Button } from '$lib';
	export let title: string;
	export let description: string;
	export let slug: string;
	export let thumbnail: string;
</script>

<div class="wraper">

	<div class="img">
		<img src="/img/{thumbnail}" alt="Thubnaim for - {title}" />
	</div>

	<h1 class="title"><a href={`/projects/${slug}`}> {title}</a></h1>

	<p class="description">
		{description}
	</p>

	<a class="read-more" href={`/projects/${slug}`}>Read More &rarr;</a>

</div>

<style lang="scss" src="./style.scss"></style>
