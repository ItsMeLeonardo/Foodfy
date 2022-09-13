<script lang="ts">
	import { classMap } from '$lib/ui-helpers/classMap'

	export let color: 'primary' | 'secondary' | 'danger' | 'light' = 'primary'
	export let position: 'left' | 'right' | 'center' = 'center'
	export let type: 'button' | 'submit' = 'button'
	export let disabled: boolean = false
	export let flat: boolean = false
	export let auto: boolean = false
	export let label: string = ''
	export let fullRound: boolean = false

	const classes = {
		'button--disabled': disabled,
		'button--left': position === 'left',
		'button--right': position === 'right',
		'button--center': position === 'center',
		'button--primary': color === 'primary',
		'button--secondary': color === 'secondary',
		'button--danger': color === 'danger',
		'button--light': color === 'light',
		'button--flat': flat,
		'button--auto': auto,
		'button--full-round': fullRound
	}
</script>

<button {type} {disabled} class:disabled class={classMap(classes)}>
	<slot>{label}</slot>
	<slot name="icon"><!-- optional fallback --></slot>
</button>

<style lang="postcss">
	button {
		padding: 10px;
		border-radius: 4px;
		font-size: 12px;
		border: none;
		display: flex;
		gap: 6px;
		align-items: center;

		box-shadow: 0 0 0 0;
		transition: box-shadow 0.4s ease-in-out;
		&:hover {
			box-shadow: 0 0 3rem -1rem var(--grey-300);
		}
	}

	.button {
		&--disabled {
			background: var(--grey-300);
			color: var(--grey-500);
			opacity: 0.5;
			pointer-events: none;
		}
		&--left {
			justify-content: flex-start;
		}
		&--right {
			justify-content: flex-end;
		}
		&--center {
			justify-content: center;
		}
		&--flat {
			width: 100%;
		}
		&--auto {
			width: max-content;
		}
		&--primary {
			background: var(--primary);
			color: var(--white);
		}
		&--light {
			background: var(--white);
			color: var(--black);
			box-shadow: 0 0 0 1px var(--grey-200);
		}

		&--full-round {
			border-radius: 999px;
		}
	}
</style>
