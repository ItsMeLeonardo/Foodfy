<script lang="ts">
	import Heart from '$icons/Support/Heart.svelte'
	import Share from '$icons/Share.svelte'
	import PlayOctagon from '$icons/Media/PlayOctagon.svelte'
	import Profile2User from '$icons/Profile2User.svelte'
	import Chart from '$icons/Chart.svelte'
	import Smileys from '$icons/Smileys.svelte'
	import LampCharge from '$icons/Lamp/Charge.svelte'

	import User from '$components/User/User.svelte'
	import Button from '$components/general/Button.svelte'

	import Header from './components/Header.svelte'
	import Checkbox from '$components/general/Checkbox.svelte'

	import IngredientItem from './components/IngredientItem.svelte'

	export let data: any
</script>

<Header title={data.title} />

<main class="postBody">
	<picture class="postImage">
		<img src="https://i.pinimg.com/736x/56/86/7e/56867e8d180dc2ca891242dab9e8cac2.jpg" alt="" />
	</picture>

	<div class="postActions">
		<User
			avatar="https://i.pinimg.com/236x/93/14/7c/93147c40073e65b6812f2d310a0b4f78.jpg"
			name="Anna Doe"
			description="2 hours ago"
		/>

		<div class="actions">
			<button>
				<Heart size={16} />
				<span>Yummy</span>
			</button>
			<button>
				<PlayOctagon size={16} />
				<span>Start</span>
			</button>
			<button>
				<Share size={16} />
				<span>Share</span>
			</button>
		</div>
	</div>
	<section class="postData">
		<div class="stats">
			<span class="statItem">
				<Smileys strokeWidth={1} />
				<span>12k</span>
			</span>
			<span class="statItem">
				<Chart strokeWidth={1} />
				<span>Easy</span>
			</span>
			<span class="statItem">
				<Profile2User strokeWidth={1} />
				<span>12 people</span>
			</span>
		</div>

		<aside class="ingredients">
			<h4 class="title">Ingredients</h4>
			<ul class="list">
				<li class="item">
					<Checkbox>
						<IngredientItem label="First ingredient :D 🥵" />
					</Checkbox>
				</li>
			</ul>
		</aside>
	</section>

	<footer>
		<Button flat>
			<span class="btnLabel">Start cooking</span>
		</Button>
	</footer>
</main>

<style lang="postcss">
	.postBody {
		margin-top: 1rem;
	}
	.postImage {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 200px;

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}

	.postActions {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-top: 1rem;
		padding: 0 0.5rem;

		.actions {
			display: flex;
			gap: 0.5rem;

			button {
				display: flex;
				align-items: center;
				justify-content: center;
				background: var(--white);
				border-radius: 0.25rem;
				padding: 0.5rem 1rem;
				gap: 8px;

				span {
					display: none;
					@media (min-width: 480px) {
						display: initial;
					}

					font-weight: 600;
					font-size: 12px;
				}
			}
		}
	}

	.postData {
		.stats {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0.5rem;
			width: 100%;
			margin: 1rem 0;
			.statItem {
				display: flex;
				justify-content: center;
				align-items: center;
				gap: 0.25rem;
				border-radius: 0.25rem;
				border: none;
				font-size: 12px;
				background: transparent;
				transition: background 0.3s ease-in-out, transform 0.2s ease-in-out;
			}
		}

		.ingredients {
			padding: 0 0.5rem;

			.title {
				font-size: 16px;
				font-weight: bold;
			}

			.list {
				margin: 1rem 0;
				display: flex;
				flex-direction: column;
				gap: 0.5rem;
				width: 100%;
			}
		}
	}

	footer {
		padding: 0 0.5rem;
		.btnLabel {
			font-size: 14px;
			font-weight: 600;
		}
	}
</style>
