<script lang="ts">
	import { Line } from '$lib';

	export let title: string;
	export let publishedAt: string;
	export let description: string;
	export let slug: string;
	// export let updatedAt: string;
	// export let content: string;

	const monthNames = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];

	const date = new Date(publishedAt);
	// console.log(date.getMonth(), date.getDate() )

	let width = 4;
	function handleMouseover() {
		width = 8;
	}

	function handleMouseout() {
		width = 4;
	}
</script>

<a
	class="wraper-link"
	href={`/posts/${slug}`}
	on:focus={handleMouseover}
	on:mouseover={handleMouseover}
	on:blur={handleMouseout}
	on:mouseout={handleMouseout}
>
	<div class="post-card">
		<time datetime={publishedAt}
			>{` ${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`}</time
		>
		<h1 class="title">{title}</h1>
		<Line {width} />
		<p>{description}</p>
	</div>
</a>

<style src="./style.css"></style>
