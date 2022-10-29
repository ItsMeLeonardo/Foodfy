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
		d="M4.93337 4.21334L10.5934 2.32667C13.1334 1.48 14.5134 2.86667 13.6734 5.40667L11.7867 11.0667C10.52 14.8733 8.44004 14.8733 7.17337 11.0667L6.61337 9.38667L4.93337 8.82667C1.1267 7.56 1.1267 5.48667 4.93337 4.21334Z"
		stroke="currentColor"
		stroke-width={strokeWidth}
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
	<path
		d="M6.73999 9.1L9.12666 6.70667"
		stroke="currentColor"
		stroke-width={strokeWidth}
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
</svg>
