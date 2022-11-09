<script lang="ts">
	import Navbar from '$components/Navbar.svelte'
</script>

<div class="grid">
	<div class="sidebar" />
	<div class="content">
		<Navbar />
		<slot><!-- optional fallback --></slot>
	</div>

	<div class="right-content" />
</div>

<style lang="postcss">
	.grid {
		width: 100%;
		height: 100%;
		display: grid;
		gap: 1rem;

		@media screen and (min-width: 768px) {
			grid-template-columns: 80px 1fr;
		}

		@media screen and (min-width: 1024px) {
			grid-template-columns: 1fr 4fr;
		}
		@media screen and (min-width: 1200px) {
			grid-template-columns: 1fr 3fr 1fr;
		}

		@media screen and (min-width: 1440px) {
			gap: 2rem;
		}
	}

	.content {
		width: 100%;
		height: 100%;
		position: relative;
		max-width: 1000px;

		@media screen and (min-width: 1440px) {
			margin: 0 auto;
		}
	}

	.sidebar,
	.right-content {
		width: 100%;
		height: 100%;
		background: white;
		display: none;
	}

	.sidebar {
		@media screen and (min-width: 768px) {
			display: initial;
		}
	}

	.right-content {
		@media screen and (min-width: 1200px) {
			display: initial;
		}
	}
</style>
