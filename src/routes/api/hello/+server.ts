import type { RequestEvent, RequestHandler } from '@sveltejs/kit'

export type Data = {
	message: string
	avatar: string
	url: string
}

export const GET: RequestHandler = async ({ url }: RequestEvent) => {
	const data: Data = {
		message: 'Hello World',
		// avatar: 'https://i.pinimg.com/236x/34/eb/22/34eb22069a142252b8fb547bd1aa6678.jpg',
		avatar: '',
		url: url.href
	}
	return new Response(JSON.stringify(data), {
		headers: { 'Content-Type': 'application/json' }
	})
}
