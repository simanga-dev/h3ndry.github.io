<script>
	import "../app.scss";
    import { page } from '$app/stores';
</script>

<header>
	<!-- <a href="/"><h1 class:small="{$page.url.pathname" !="=" ' '}>SvelteKit + MDsveX Blog</h1></a> -->
</header>

<main>
	<slot></slot>
</main>

<footer>
	<p>
		Copyright &#xA9; <a href="https://twitter.com/mehdi_vasigh">Mehdi Vasigh</a>, {new Date().getFullYear()}
	</p>
</footer>

<style global lang="scss">
	@use 'src/styles/global';
</style>
