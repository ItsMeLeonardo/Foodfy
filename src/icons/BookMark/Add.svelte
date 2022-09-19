<script lang="ts">
	export let size: number | null = null
	export let w = 20
	export let h = 20
	export let strokeWidth: number | null = 1.5
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
		d="M9.66671 7.1H6.33337"
		stroke="currentColor"
		stroke-miterlimit="10"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
	<path
		d="M8 5.47334V8.80667"
		stroke="currentColor"
		stroke-miterlimit="10"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
	<path
		d="M11.2134 1.33333H4.78671C3.36671 1.33333 2.21338 2.49333 2.21338 3.90667V13.3C2.21338 14.5 3.07338 15.0067 4.12671 14.4267L7.38005 12.62C7.72671 12.4267 8.28671 12.4267 8.62671 12.62L11.88 14.4267C12.9334 15.0133 13.7934 14.5067 13.7934 13.3V3.90667C13.7867 2.49333 12.6334 1.33333 11.2134 1.33333Z"
		stroke="currentColor"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
</svg>
