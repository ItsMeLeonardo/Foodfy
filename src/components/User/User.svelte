<script lang="ts">
	export let avatar: string
	export let name: string
	export let description: string
	export let size: 'small' | 'medium' | 'large' = 'medium'

	const avatarSize = {
		small: '32px',
		medium: '40px',
		large: '48px'
	}
</script>

<div class="user">
	<picture class="avatar" style="--avatar-size: {avatarSize[size]}">
		<img src={avatar} alt={`photo's ${name}`} />
	</picture>

	<div class="info">
		<h3 class="name">{name}</h3>
		<p class="description">{description}</p>
	</div>
</div>

<style lang="postcss">
	.user {
		display: flex;
		gap: 0.5rem;
		align-items: center;

		.avatar {
			width: var(--avatar-size);
			height: var(--avatar-size);
			border-radius: 50%;

			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
				border-radius: inherit;
			}
		}

		.name {
			font-weight: 500;
			font-size: 12px;
			margin-bottom: 0.25em;
		}

		.description {
			font-size: 10px;
			color: var(--dark);
		}
	}
</style>
