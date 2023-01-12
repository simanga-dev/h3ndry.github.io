---
title: "Carpentry Shop - Net Core Web Application"
description: "Carpentry Shop is a full-stack web application built with a .Net core framework and SQLite database. The application allows users to order carpentry online and notify them when ready to collect."
author: "Hendry Khoza"
date: "2021-04-21"
thumbnail: "/static/images/carpentry.png"
published: true
---

<script>
	import PageHead from '$lib/components/PageHead.svelte';
	import { Line,ImageWrapper } from '$lib';
	import ArticleMeta from '$lib/components/ArticleMeta.svelte';

</script>

<style lang="scss">
	h1 {
		font-family: var(--font-mono);
		font-size: 3rem;
		margin: 0rem;
	}
</style>


<PageHead title="Carpentry Shop - Net Core Web Application" description="Carpentry Shop is a full-stack web application built with a .Net core framework and SQLite database. The application allows users to order carpentry online and notify them when ready to collect." />

<h1 class="post-title">Carpentry Shop - Net Core Web Application</h1>

<center>
	<Line width={5.5} />
</center>

<ImageWrapper img_url="/img/carpentry.png"  alt="Thubnaim for - Carpentry Shop - Net Core Web Application"  />

<slot />


*You can view a live demo of the application by following this link
[178.79.147.9:50](http://178.79.147.9:50/). username: **admin@localhost.com**, password: **P@$$w0r1d**.*

###

Carpentry Shop is my favourite .Net Core Web Application I have built. It is a
complete full-stack web application with a database, authentication and elegant
design.

### Features

 * Sends an email when carpentry has been added to the databases or marked as
   complete by the administrator. When a customer places an order, the email is
   sent to the administrator. When an order is marked as completed, an email
   gets sent to the customer.

 * Full authentication flow using email and password. The password is encrypted
   before it gets stored in the database.

 * A customer can order as many as possible of carpentries in one order.

 * All values entered by the customer get validated before being processed.

 * Elegant design


### Entity Framework

I used  EF core to integrate with the database, recommended by Microsoft.
Entity framework core is a modern object-database mapper for .NET, and It
Supports LINQ queries, Changes, tracking, updates and schema migration.


The nice thing about EF Core is that it works with many databases. Supported
databases include MySQL, Postgress and Oracle DB. For this project, I used
SQLite.

### Design and Styles

The design of the web application is styled using Semantic UI. I have enjoyed
working with the UI library. It makes building beautiful websites very easy.

What I enjoy the most about this UI library is its ease of overwriting default
styles. The default style looks great for the enterprise application and is
lightweight.


### Deploy and Hosting

I love Linux, So it is not surprising that I hosted this web application on a
Linux server. The challenging part was configuring Apache servers to work with
the
[Kestrel](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/servers/kestrel?view=aspnetcore-7.0)
Web server. A Linux server is so cheap compared to
[Azure](https://azure.microsoft.com/en-us/). I paid
R9O per month for my server to host the application with a database, which is
much less than what I would have paid if I were to host the application on
Azure.

### Conclusion

I respect Microsoft for making .Net open source. I will continue using the .Net
Core for building more personal web applications.
