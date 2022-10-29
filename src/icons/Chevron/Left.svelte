<script lang="ts">
	export let size: number | null = null
	export let w = 20
	export let h = 20
	export let strokeWidth: number | null = 1.5
</script>

<svg
	width={size || w}
	height={size || h}
	viewBox="0 0 16 16"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<path
		d="M10.0333 13.28L5.68666 8.93333C5.17332 8.42 5.17332 7.58 5.68666 7.06667L10.0333 2.72"
		stroke="currentColor"
		stroke-width={strokeWidth}
		stroke-miterlimit="10"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
</svg>
