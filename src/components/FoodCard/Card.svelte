<script lang="ts">
	import daysjs from 'dayjs'
	import CategoryTag from '$components/CategoryTag.svelte'

	import Profile2User from '$icons/Profile2User.svelte'
	import Chart from '$icons/Chart.svelte'
	import Smileys from '$icons/Smileys.svelte'
	import BookMarkAdd from '$icons/BookMark/Add.svelte'
	import BookMarkTick from '$icons/BookMark/Tick.svelte'

	export let picture: string
	export let title: string
	export let date: string
	export let tags: string[]
	export let isSaved: boolean = false
</script>

<aside class="foodCard" on:click>
	<picture>
		<button class="save" class:isSaved>
			{#if isSaved}
				<BookMarkTick size={24} strokeWidth={1} />
			{:else}
				<BookMarkAdd size={24} strokeWidth={1} />
			{/if}
		</button>
		<img src={picture} alt={title} />
	</picture>
	<div class="content">
		<h3 class="title">{title}</h3>
		<p class="date">{daysjs(date).format('DD MMMM YYYY')}</p>
	</div>
	<ul class="tags">
		{#each tags as tag}
			<CategoryTag label={tag} canSearch />
		{/each}
	</ul>

	<footer class="options" on:click|stopPropagation>
		<button>
			<Smileys strokeWidth={1} />
			<span>12k</span>
		</button>
		<button>
			<Chart strokeWidth={1} />
			<span>Easy</span>
		</button>
		<button>
			<Profile2User strokeWidth={1} />
			<span>12 people</span>
		</button>
	</footer>
</aside>

<style lang="postcss">
	.foodCard {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 0.5rem;
		padding: 0.5rem;
		width: 100%;
		background: var(--light);
		border-radius: 0.5rem;
		cursor: pointer;

		transition: box-shadow 0.2s ease-in-out, position 0.2s ease-in-out;

		&:hover {
			box-shadow: 2px 4px 32px rgba(0, 0, 0, 0.16);
			position: relative;
		}
	}

	picture {
		display: flex;
		width: 100%;
		height: auto;
		border-radius: 0.75rem;
		position: relative;

		.save {
			--size: 32px;
			display: flex;
			align-items: center;
			justify-content: center;
			width: var(--size);
			height: var(--size);
			border-radius: 0.5rem;
			color: var(--light);
			background: var(--light-25);
			backdrop-filter: blur(8px);
			position: absolute;
			top: 0.5rem;
			right: 0.5rem;
			transition: transform 0.2s ease-in-out;

			&:hover,
			&:focus {
				transform: scale(1.1);
			}

			&.isSaved {
				color: var(--primary);
				background: var(--primary-light);
			}

			@supports not (backdrop-filter: blur(8px)) {
				color: var(--primary-light);
				background: var(--white);

				&.isSaved {
					background: var(--primary);
					color: var(--light);
				}
			}
		}

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			border-radius: inherit;
			aspect-ratio: 16/9;
		}
	}

	.content {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;

		.title {
			font-size: 1rem;
			font-weight: bold;
			color: var(--dark);
			max-width: 20ch;
			overflow: hidden;
			text-overflow: ellipsis;
			position: relative;
		}

		.date {
			font-size: 12px;
			color: var(--dark);
		}
	}

	.tags {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.options {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0.5rem 0;
		width: 100%;

		button {
			display: flex;
			align-items: center;
			gap: 0.25rem;
			padding: 0.25rem 0.75rem;
			border-radius: 0.25rem;
			border: none;
			font-size: 10px;
			background: transparent;
			transition: background 0.3s ease-in-out, transform 0.2s ease-in-out;

			&:hover,
			&:focus {
				background: var(--white);
			}

			&:active {
				transform: scale(0.95);
			}
		}
	}
</style>
