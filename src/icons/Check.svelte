<script lang="ts">
	export let w = 20
	export let h = 20
	export let weight: 'light' | 'bold' = 'light'

	const strokeWidth = weight === 'light' ? 1.5 : 4
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	class="icon icon-tabler icon-tabler-check"
	width={w}
	height={h}
	viewBox="0 0 24 24"
	stroke-width={strokeWidth}
	stroke="currentColor"
	fill="none"
	stroke-linecap="round"
	stroke-linejoin="round"
>
	<path stroke="none" d="M0 0h24v24H0z" fill="none" />
	<path d="M5 12l5 5l10 -10" />
</svg>
