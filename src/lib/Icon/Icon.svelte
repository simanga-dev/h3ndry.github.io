<script lang="ts">
	export let name: string;
	export let width = '1.5rem';
	export let height = '1.5rem';
	export let focusable: string | number = 'false';
	let icons = [
		{
			box: 24,
			name: 'rght_arrow',
			svg: `<path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/>`
		},
];

hh

// <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg"></svg>

// <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/></svg>

	let displayIcon = icons.find((e) => e.name === name);
</script>

<svg
	class={$$props.class}
	{focusable}
	{width}
	{height}
	viewBox="0 0 {displayIcon.box} {displayIcon.box}"
>
	{@html displayIcon.svg}
</svg>

<style src="./Style.scss" lang="scss"></style>
