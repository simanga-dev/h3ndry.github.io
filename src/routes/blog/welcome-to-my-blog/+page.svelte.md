---
title: "Welcome to my blog!"
description: "I love writing about Svelte and all the cool things you can build with it. The website is built with Svelte and Markdown."
author: "Hendry Khoza"
date: "2021-04-21"
published: true
---

<style lang="scss">
	h1 {
		font-family: var(--font-mono);
		font-size: 2rem;
		margin: 0rem;
	}
	center {
		margin-bottom: 2rem;
	}

	@media (min-width: 720px) {
		h1 {
			font-size: 2.4rem;
			font-size: 3.5rem;
            padding-top: 4px;
            line-height: 1;
			margin: 0;
		}
		center {
			margin-bottom: 4rem;
		}
	}
</style>

<script>
	import PageHead from '$lib/components/PageHead.svelte';
	import { WrittenBy, Line } from '$lib';
</script>


<PageHead title="Welcome to my blog!" description="I love writing about Svelte and all the cool things you can build with it. The website is built with Svelte and Markdown." />

<WrittenBy name="Hendry Khoza" date="2021-04-21" />
<h1 class="post-title">Welcome to my blog!</h1>
<center>
	<Line width={5.5} />
</center>



I developed a new personal website from scratch. It is fast, straightforward
and built using the latest technology. I plan to add a newsletter and comment
functionality soon, which is only possible on this new website with a little
hustler.

####  Features of the new Website
 * One of the changes on this website is the use of Markdown to store the
   content of this website. The Front-end is developed with SvelteKit and
   Markdown for content. This setup will make it easy for me to update content
   on the website without too much hassle. They are many advantages that come
   with storing your blog content in Markdown. One of them is it is
   cost-effective. Since it is all static files, you don't need to host a
   backed service. I will let you find more on your own.
 * Dark theme. It should be the default of all websites on the internet in today's world.
 * Good Typography, It should be easy to read content now.
 * Code snippets support.

#### Challenges

I had challenges deploying SvelteKit to Netlify. The setup of the website could
be better. I also run into some redirecting issues with SvelteKit. I had to
spend more time learning all types of HTTP redirecting, and still, I used a
hack to fix that issue.

Another step back was trying to get the environment variable to work on
Netlify, but lucky enough. I managed to fix the issue with enough googling. As
you can tell by now, most of the problems I had were because of my need for
more understanding of SvelteKit.

#### Conclusion
I love SvelteKit and expect more projects from me developed using SvelteKit. I have enjoyed creating this website. I hope you have a good time visiting it.
