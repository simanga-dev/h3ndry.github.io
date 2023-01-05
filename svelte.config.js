import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
import md from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://kit.svelte.dev/docs/integrations#preprocessors
    // for more information about preprocessors

    extensions: ['.svelte', ...mdsvexConfig.extensions],
    preprocess: [
        md.mdsvex(mdsvexConfig),
        preprocess({
            scss: {
                prependData: '@use "src/variables.scss" as *;'
            }
        })
    ],

    kit: {
        adapter: adapter(),
        paths: {
            base: process.env.NODE_ENV === "production" ? "" : "",
        },
    }
};

export default config;
