import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-netlify';
import md from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
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
        // hydrate the <div id="svelte"> element in src/app.html
        adapter: adapter(),

        prerender: {
            onError: 'continue'
        },

        vite: {
            css: {
                preprocessorOptions: {
                    scss: {
                        additionalData: '@use "src/variables.scss" as *;'
                    }
                }
            },
            server: {
                fs: {
                    // Allow serving files from one level up to the project root
                    allow: ['.'],
                },
            }
        }
    }
};

export default config;
