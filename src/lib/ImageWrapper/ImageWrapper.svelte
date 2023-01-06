<script lang="ts">
	export let img_url: string;
	export let alt: string;
</script>

<div class="img">
	<img src={img_url} {alt} />
</div>

<style lang="scss">
	.img {
    padding: 2rem 0;
		img {
			width: 100%;
		}
	}
</style>
