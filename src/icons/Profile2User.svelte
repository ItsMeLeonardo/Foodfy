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
		d="M6.10671 7.24666C6.04004 7.24 5.96004 7.24 5.88671 7.24666C4.30004 7.19333 3.04004 5.89333 3.04004 4.29333C3.04004 2.65999 4.36004 1.33333 6.00004 1.33333C7.63337 1.33333 8.96004 2.65999 8.96004 4.29333C8.95337 5.89333 7.69337 7.19333 6.10671 7.24666Z"
		stroke="#2E2320"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
	<path
		d="M10.9401 2.66667C12.2334 2.66667 13.2734 3.71334 13.2734 5C13.2734 6.26 12.2734 7.28667 11.0267 7.33334C10.9734 7.32667 10.9134 7.32667 10.8534 7.33334"
		stroke="#2E2320"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
	<path
		d="M2.77335 9.70667C1.16002 10.7867 1.16002 12.5467 2.77335 13.62C4.60669 14.8467 7.61335 14.8467 9.44669 13.62C11.06 12.54 11.06 10.78 9.44669 9.70667C7.62002 8.48667 4.61335 8.48667 2.77335 9.70667Z"
		stroke="#2E2320"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
	<path
		d="M12.2267 13.3333C12.7067 13.2333 13.16 13.04 13.5334 12.7533C14.5734 11.9733 14.5734 10.6867 13.5334 9.90666C13.1667 9.62666 12.72 9.43999 12.2467 9.33333"
		stroke="#2E2320"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
</svg>
