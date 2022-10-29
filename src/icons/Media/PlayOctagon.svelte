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
		d="M14.0533 5.72003V10.28C14.0533 11.0267 13.6533 11.72 13.0066 12.1L9.04661 14.3867C8.39994 14.76 7.59995 14.76 6.94661 14.3867L2.98661 12.1C2.33995 11.7267 1.93994 11.0333 1.93994 10.28V5.72003C1.93994 4.97336 2.33995 4.28 2.98661 3.9L6.94661 1.61334C7.59328 1.24 8.39328 1.24 9.04661 1.61334L13.0066 3.9C13.6533 4.28 14.0533 4.96669 14.0533 5.72003Z"
		stroke="currentColor"
		stroke-width={strokeWidth}
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
	<path
		d="M6.5 8.00002V7.20001C6.5 6.17334 7.22668 5.75337 8.11334 6.2667L8.80666 6.66668L9.5 7.06667C10.3867 7.58 10.3867 8.42003 9.5 8.93337L8.80666 9.33335L8.11334 9.73333C7.22668 10.2467 6.5 9.82669 6.5 8.80003V8.00002Z"
		stroke="currentColor"
		stroke-width={strokeWidth}
		stroke-miterlimit="10"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
</svg>
