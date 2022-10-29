<script lang="ts">
	export let size: number | null = null
	export let w = 20
	export let h = 20
	export let strokeWidth: number | null = 1.5
</script>

<svg
	width={size || w}
	height={size || h}
	viewBox="0 0 16 14"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<path
		d="M8.41337 12.8733C8.18671 12.9533 7.81337 12.9533 7.58671 12.8733C5.65337 12.2133 1.33337 9.46 1.33337 4.79333C1.33337 2.73333 2.99337 1.06667 5.04004 1.06667C6.25337 1.06667 7.32671 1.65333 8.00004 2.56C8.67337 1.65333 9.75337 1.06667 10.96 1.06667C13.0067 1.06667 14.6667 2.73333 14.6667 4.79333C14.6667 9.46 10.3467 12.2133 8.41337 12.8733Z"
		stroke="currentColor"
		stroke-width={strokeWidth}
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
</svg>
