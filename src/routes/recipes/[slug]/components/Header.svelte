<script lang="ts">
	import ChevronLeft from '$icons/Chevron/Left.svelte'
	import BookmarkAdd from '$icons/BookMark/Add.svelte'

	export let title: string
</script>

<header class="postHeader">
	<button>
		<ChevronLeft size={16} />
	</button>
	<h1 class="title">My data is {title}</h1>
	<button>
		<BookmarkAdd size={16} strokeWidth={1} />
	</button>
</header>

<style lang="postcss">
	.postHeader {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 0.5rem;

		button {
			display: flex;
			align-items: center;
			padding: 0.5rem;
			border-radius: 4px;
			justify-content: center;
			background: var(--white);
		}

		.title {
			font-size: 20px;
			font-weight: bold;
		}
	}
</style>
