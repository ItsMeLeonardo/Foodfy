import type { Load } from '@sveltejs/kit'

export const load: Load = ({ params }) => {
	return {
		title: params.slug,
		content: 'Welcome to our blog. Lorem ipsum dolor sit amet...'
	}
}
