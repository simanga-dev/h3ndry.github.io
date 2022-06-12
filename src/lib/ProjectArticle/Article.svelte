<script lang="ts">

	export let title: string;
	export let publishedAt: string;
	export let description: string;
	export let slug: string;
	export let thumbnail: string;

</script>

<div>
<div class="img">
<img src={thumbnail} alt="Thubnaim for - {title}">

</div>
  <slot />
</div>



<style>
  article {
    margin-bottom: calc(var(--spacing-unit) * 8);
  }
</style>
