/**
 * Can be made globally available by placing this
 * inside `global.d.ts` and removing `export` keyword
 */
export interface Locals {
	userid: string;
}

export interface Pagination {
	page: number;
	pageSize: number;
	pageCount: number;
	total: number;
}

export interface Meta {
	pagination: Pagination;
}

export interface Attributes {
	content: striing;
	createdAt: string;
	description: string;
	publishedAt: string;
	slug: string;
	title: string;
	updatedAt: string;
	text?: string;
}

export interface Post {
	attributes: Attributes;
	id: number;
}

export interface Data {
	data: Post[];
	meta: Meta;
}

export interface DataAbout {
	data: Post;
	meta: Meta;
}
