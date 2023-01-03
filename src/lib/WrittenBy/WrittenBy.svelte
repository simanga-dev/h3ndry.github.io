<script>
	export let name;
	export let date;
</script>

{#if date}
	<div class="post-info">
		<span>Written by</span>
		{name} <br />
		<span>on</span>
		{date}
	</div>
{:else}
	<div class="post-info">
		<span>Written by</span>
		{name} <br />
	</div>
{/if}

<style lang="scss">
	.post-info {
		font-family: var(--font-family);
		letter-spacing: 0.5px;
		text-align: center;

		span {
			font-style: italic;
		}
	}
</style>
