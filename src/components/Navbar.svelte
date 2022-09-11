<script lang="ts">
	import Search from '$icons/Search.svelte'
</script>

<nav>
	<a href="/">
		<h3 class="logo">FOODFY</h3>
	</a>

	<label>
		<span class="icon">
			<Search />
		</span>
		<input type="search" placeholder="Search anything" />
	</label>

	<picture>
		<img
			src="https://i.pinimg.com/236x/29/68/3b/29683b54520b500a531ad18a4534c85e.jpg"
			alt="Avatar"
		/>
	</picture>
</nav>

<style lang="postcss">
	nav {
		width: 100%;
		height: 60px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 0.5rem;
	}

	a {
		text-decoration: none;
		color: var(--primary);
		display: none;

		@media (min-width: 768px) {
			display: block;
		}

		.logo {
			font-size: 1.25rem;
			font-weight: 700;
			text-align: center;
			max-width: 1ch;
		}
	}

	label {
		position: relative;
		width: 80%;
		max-width: 400px;

		.icon {
			display: flex;
			position: absolute;
			top: 50%;
			left: 0.5rem;
			transform: translateY(-50%);
			color: var(--grey-900);
		}

		input {
			padding: 12px 12px 12px 40px;
			font-size: 12px;
			border: none;
			color: var(--grey-900);
			width: 100%;
			border-radius: 2rem;
		}
	}

	picture {
		width: 32px;
		height: 32px;
		border-radius: 50%;
		cursor: pointer;
		transition: box-shadow 0.3s ease-in-out;

		&:hover {
			box-shadow: 0 0 0 0.5rem var(--grey-200);
		}

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			border-radius: inherit;
		}
	}
</style>
