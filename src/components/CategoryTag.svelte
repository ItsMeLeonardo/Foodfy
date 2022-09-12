<script lang="ts">
	import Search from '$icons/Search.svelte'

	// export let category: string
	export let label: string
</script>

<a href={`/`} class="tag">
	<span class="text">{label}</span>
	<span class="options">
		<Search h={12} w={12} />
	</span>
</a>

<style lang="postcss">
	.tag {
		color: var(--white);
		font-size: 10px;
		padding: 0.25rem 0.5rem 0.25rem 0.25rem;
		border-radius: 0.25rem 1rem 1rem 0.25rem;
		background-color: var(--primary);
		max-width: 100px;
		display: inline-flex;
		align-items: center;
		gap: 0.125rem;
		position: relative;

		white-space: nowrap;
		text-decoration: none;

		.text {
			overflow: hidden;
			text-overflow: ellipsis;
		}

		.options {
			position: absolute;
			right: 0.25rem;
			top: 50%;
			transform: translateY(-50%);
			background: var(--primary);
			transition: opacity 0.25s ease-in-out;
			opacity: 0;
			display: flex;
		}

		&:hover .options,
		&:focus .options {
			opacity: 1;
		}
	}
</style>
