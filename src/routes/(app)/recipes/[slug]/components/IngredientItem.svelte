<script lang="ts">
	import LampCharge from '$icons/Lamp/Charge.svelte'

	export let label: string
</script>

<div class="labelContainer">
	<span class="label">{label}</span>
	<button class="option">
		<LampCharge strokeWidth={1.5} size={18} />
	</button>
</div>

<style lang="postcss">
	.labelContainer {
		font-size: 14px;
		display: flex;
		align-items: center;
		gap: 0.5rem;
		width: 100%;

		.option {
			padding: 0.25rem;
			border-radius: 0.25rem;
			background: var(--white);
			color: var(--primary);
		}
	}
</style>
