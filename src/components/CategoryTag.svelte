<script lang="ts">
	import Search from '$icons/Search.svelte'

	export let label: string
	export let canSearch: boolean = false

	export let clickable: boolean = false
</script>

{#if canSearch}
	<a href={`/`} class="tag">
		<span class="text">{label}</span>
		<span class="options">
			<Search h={12} w={12} />
		</span>
	</a>
{:else}
	<div class="tag" class:clickable tabindex={clickable ? 0 : -1} on:click>
		<span class="text">{label}</span>
		<span class="options">
			<slot name="icon"><!-- optional fallback --></slot>
		</span>
	</div>
{/if}

<style lang="postcss">
	.clickable {
		cursor: pointer;
	}
	.tag {
		color: var(--white);
		font-size: 10px;
		font-weight: bold;
		padding: 0.25rem 0.75rem 0.25rem 0.25rem;
		border-radius: 0.25rem 1rem 1rem 0.25rem;
		background: linear-gradient(90deg, #ff758c 0%, #ff7eb3 100%);
		color: var(--white);
		/* background: var(--primary-light);
		color: var(--primary); */
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
			height: 100%;
			background: linear-gradient(90deg, #ff758c 0%, #ff7eb3 100%);
			width: 35%;
			display: flex;
			border-radius: 0 100px 100px 0;
			align-items: center;
			justify-content: flex-end;
			right: 0;
			top: 0;
			padding-right: 0.5rem;
			position: absolute;
			color: var(--white);
			transition: opacity 0.25s ease-in-out;
			opacity: 0;
		}

		&:hover .options,
		&:focus .options {
			opacity: 1;
		}
	}
</style>
