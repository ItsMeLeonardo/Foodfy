import adapter from '@sveltejs/adapter-auto'
import preprocess from 'svelte-preprocess'

import { resolve } from 'path'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true
		})
	],

	kit: {
		adapter: adapter(),
		alias: {
			'$components/*': resolve('./src/components/*'),
			'$lib/*': resolve('./src/lib/*'),
			'$ui-helpers/*': resolve('./src/lib/ui-helpers/*'),
			'$icons/*': resolve('./src/icons/*')
		}
	}
}

export default config
