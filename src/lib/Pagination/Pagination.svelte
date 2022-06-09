<script lang="ts">
	import type { Pagination } from '$lib/types';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let pagination: Pagination;

	function hanglePrev() {
		dispatch('prev');
	}

	function hangleNext() {
		dispatch('next');
	}
</script>

<div class="pagination">
	<p>pages</p>

	<div class="numbering">
		{#if pagination.page > 1}
			<span on:click={hanglePrev} class="btn-prev">Prev</span>
		{/if}

		<span class="page-number">{pagination.page}</span>

		{#if pagination.page !== pagination.pageCount}
			<span on:click={hangleNext} class="btn-next">Next</span>
		{/if}
	</div>
</div>

<style src="./style.css"></style>
