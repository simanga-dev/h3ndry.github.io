<script lang="ts">
	export let variant: 'standard' | 'gradient' | 'no-bg' = 'standard';
	export let href = undefined;
	export let disabled = false;
</script>

{#if href}
	<a 
	class={$$props.class}
    href={disabled ? undefined : href}>
		<slot />
	</a>
{:else}
	<button class="btn {variant}">
		<slot />
	</button>
{/if}

<style src="./Style.scss" lang="scss"></style>
