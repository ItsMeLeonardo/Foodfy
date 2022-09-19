<script lang="ts">
	import Autocomplete from '$components/general/Autocomplete/index.svelte'
	import FoodCard from '$components/FoodCard/Card.svelte'

	const options = ['apple', 'banana', 'orange', 'pineapple', 'strawberry']

	const results = new Array(10).fill('')
	let value: string[] = []
</script>

<main>
	<h2>Advanced search</h2>

	<div class="form-container">
		<Autocomplete bind:value {options} placeholder="Select ingredients" multiple filter />
	</div>
	<h4>
		{#if value.length}
			Results for <span>"{value.join(', ')}"</span>
		{/if}
	</h4>
	<section class="results">
		{#each results as item, index}
			<FoodCard
				isSaved={index % 2 === 0}
				picture="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
				title="Pasta with tomato sauce"
				date="2021-05-01"
				tags={['pasta', 'tomato', 'italian']}
			/>
		{/each}
	</section>
</main>

<style lang="postcss">
	main {
		width: 100%;
		padding: 0 0.5rem;

		h4 {
			font-size: 1rem;
			font-weight: bold;
			color: var(--dark);
			margin-top: 1.25rem;
			margin-bottom: 0.75rem;

			span {
				color: var(--primary);
			}
		}
	}
	.form-container {
		margin: 1rem auto 0 auto;
		max-width: 500px;
		position: relative;
	}

	.results {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: 1rem;
	}
</style>
