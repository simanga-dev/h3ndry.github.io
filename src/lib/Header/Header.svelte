<script lang="ts">
	import { page } from '$app/stores';
	import { base } from '$app/paths';
	// import { Icon } from '$lib';
	let sidebarVisible = false;
	let sidebar: HTMLElement;
	let sidebarButton: SVGSVGElement;

	function toggleSidebar() {
		sidebarVisible = !sidebarVisible;
	}

	const handleOuterClick = (e: MouseEvent) => {
		if (
			!(
				!sidebarVisible ||
				e.target === sidebarButton ||
				sidebarButton.contains(e.target as Node) ||
				e.target === sidebar ||
				sidebar.contains(e.target as Node)
			)
		) {
			toggleSidebar();
		}
	};
</script>

<svelte:window on:click={handleOuterClick} />

<header>
	<div class="inner">
		<a class="nav-title-link" href="{base}/">
			<h2 class="nav-title">Hendry</h2>
		</a>

		<nav class="mobi">
			<!-- <Icon class="menu" name="menu" /> -->

			<svg
				bind:this={sidebarButton}
				xml:space="preserve"
				viewBox="0 0 500 500"
				on:click={toggleSidebar}
				on:keyup={toggleSidebar}
				class:active={sidebarVisible}
			>
				<g transform="matrix(1.3333333,0,0,-1.3333333,-66.326109,633.05707)">
					<path d="M 62.297785,369.40376 H 413.47816" />
					<path d="M 178.86043,205.22075 H 413.28827" />
					<path d="M 62.67053,287.30031 H 413.36485" />
				</g>
			</svg>

			<aside class:visible={sidebarVisible} bind:this={sidebar}>
				<ul>
					<li
						class:active={$page.url.pathname === '/'}
						on:keyup={toggleSidebar}
						on:click={toggleSidebar}
					>
						<a sveltekit:prefetch href="{base}/">Home</a>
					</li>
					<li
						class:active={$page.url.pathname === '/projects'}
						on:keyup={toggleSidebar}
						on:click={toggleSidebar}
					>
						<a sveltekit:prefetch class="temp-disable" href="{base}/projects">Projects</a>
					</li>
					<li
						class:active={$page.url.pathname === '/blog'}
						on:keyup={toggleSidebar}
						on:click={toggleSidebar}
					>
						<a sveltekit:prefetch class="temp-disable" href="{base}/blog">Blog</a>
					</li>
				</ul>
			</aside>
		</nav>
		<nav class="desk">
			<ul>
				<li
					class:active={$page.url.pathname === '/'}
					on:keyup={toggleSidebar}
					on:click={toggleSidebar}
				>
					<a sveltekit:prefetch href="{base}/">Home</a>
				</li>
				<li
					class:active={$page.url.pathname === '/projects'}
					on:keyup={toggleSidebar}
					on:click={toggleSidebar}
				>
					<a sveltekit:prefetch class="temp-disable" href="{base}/projects">Projects</a>
				</li>
				<li
					class:active={$page.url.pathname === '/blog'}
					on:keyup={toggleSidebar}
					on:click={toggleSidebar}
				>
					<a sveltekit:prefetch class="temp-disable" href="{base}/blog">Blog</a>
				</li>
			</ul>
		</nav>
	</div>
</header>

<style lang="scss" src="./style.scss"></style>
