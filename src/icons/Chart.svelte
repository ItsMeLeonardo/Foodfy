<script lang="ts">
	export let size: number | null = null
	export let w = 20
	export let h = 20
	export let weight: 'light' | 'bold' = 'light'

	const strokeWidth = weight === 'light' ? 1.5 : 4
</script>

<svg
	width={size || w}
	height={size || h}
	stroke-width={strokeWidth}
	viewBox="0 0 16 16"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<path
		d="M1.333 14.667h13.334"
		stroke="#2E2320"
		stroke-miterlimit="10"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
	<path
		d="M6.5 2.667v12h3v-12c0-.734-.3-1.334-1.2-1.334h-.6c-.9 0-1.2.6-1.2 1.334Zm-4.5 4v8h2.667v-8c0-.734-.267-1.334-1.067-1.334h-.533c-.8 0-1.067.6-1.067 1.334ZM11.333 10v4.667H14V10c0-.733-.267-1.333-1.067-1.333H12.4c-.8 0-1.067.6-1.067 1.333Z"
		stroke="#2E2320"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
</svg>
