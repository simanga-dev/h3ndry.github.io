<script>
	import "../app.scss";
	import { Header } from '$lib';
    import { page } from '$app/stores';
</script>

<Header />

<main>
	<slot></slot>
</main>

<footer>
	<p>
		Copyright &#xA9; <a href="https://twitter.com/3h3ndry">Hendry Khoza</a>, {new Date().getFullYear()}
	</p>
</footer>

<style global lang="scss">
	@use 'src/styles/global';
</style>
