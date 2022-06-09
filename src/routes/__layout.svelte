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
		Copyright &#xA9; <a href="https://twitter.com/mehdi_vasigh">Mehdi Vasigh</a>, {new Date().getFullYear()}
	</p>
</footer>

<style global lang="scss">
	@use 'src/styles/global';
</style>
