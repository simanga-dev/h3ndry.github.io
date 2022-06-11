import { slugFromPath } from '$lib/util';

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function get({ params }) {
    const modules = import.meta.glob(`./*.{md,svx,svelte.md}`);

    params.slug = 'about'
    let match;
    for (const [path, resolver] of Object.entries(modules)) {
        console.log(resolver,path)
        if (slugFromPath(path) === params.slug) {
            match = [path, resolver];
            break;
        }

    }

    if (!match) {
        return {
            status: 404
        };
    }

    const post = await match[1]();
    console.log(post)

    return {
        body: post.metadata
    };
}
