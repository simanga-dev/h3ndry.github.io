<script lang="ts">
	import { Line } from '$lib';

	export let title: string;
	export let description: string;
	export let slug: string;
	export let date: string;

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
	href={`/blog/posts/${slug}`}
	on:focus={handleMouseover}
	on:mouseover={handleMouseover}
	on:blur={handleMouseout}
	on:mouseout={handleMouseout}
>
		<time datetime={date} >{date}</time>
		<h1 class="title"> <a href={`/blog/posts/${slug}`}> {title}</a> </h1>
		<Line {width} />
		<p>{description}</p>

        <a class="read-more" href={`/blog/posts/${slug}`}>Read More &rarr;</a>
  <!-- <slot /> -->
</a>

<style>
.wraper-link {
	display: block;
	color: inherit;
	text-decoration: none;
	padding: 1.5rem 0;
	border-bottom: solid 1px rgb(255 255 255 / 10%);
}

p {
    padding-top: 1rem;
    }

.title {
	text-align: start;
	display: block;
	font-family: var(--font-mono);
	font-size: 2rem;
	font-weight: 700;
	margin: 0.5rem 0px;
}

.read-more {
    display: block;
    padding-top: .8rem;
    }

</style>
