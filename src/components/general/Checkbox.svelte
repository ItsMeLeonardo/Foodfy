<!-- checkbox component with svelte -->
<script lang="ts">
	import { onMount } from 'svelte'

	import { fade } from 'svelte/transition'
	import Check from '$icons/Check.svelte'

	export let name: string = ''
	export let checked = false
	export let value: string | object = ''
	export let group: any[] = []

	export let block: boolean = false // if true, the checkbox will be displayed as a block element

	const existThisValue = group.some((item) => {
		return JSON.stringify(item) == JSON.stringify(value)
	})

	function toogleValue(checked: boolean) {
		if (checked) {
			group = [value, ...group]
			return
		}

		group = group.filter((item) => {
			return JSON.stringify(item) !== JSON.stringify(value)
		})
	}

	function onInput(event: Event) {
		if (!group) return
		const input = event.target as HTMLInputElement
		const checked = input.checked
		toogleValue(checked)
	}

	onMount(() => {
		if (checked) {
			group.push(value)
			group = group
		}
		if (existThisValue) {
			checked = true
		}
	})
</script>

<label class="checkbox-container" tabindex="0" class:block>
	<input type="checkbox" {name} hidden bind:checked on:input={onInput} />
	<div class="icon-container" class:checked>
		{#if checked}
			<span class="icon" transition:fade={{ duration: 0.2 }}>
				<slot name="icon">
					<Check w={16} h={16} weight="bold" />
				</slot>
			</span>
		{/if}
	</div>
	<span class="label">
		<slot><!-- optional fallback --></slot>
	</span>
</label>

<style lang="postcss">
	.block {
		width: 100% !important;
	}
	.checkbox-container {
		width: max-content;
		display: flex;
		align-items: center;
		gap: 0.5rem;
		cursor: pointer;
	}
	.icon-container {
		--size: 24px;
		width: var(--size);
		height: var(--size);
		border-radius: 8px;
		border: 2px solid var(--gray-light);
		transition: background 0.3s ease-in-out;

		.icon {
			width: 100%;
			height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			color: var(--white);
		}

		&.checked {
			background: var(--primary);
			border: 2px solid var(--primary);
			box-shadow: 0 0.5rem 1rem -0.25rem var(--primary);
		}
	}

	.icon * {
		opacity: 0;
		transition: opacity 0.2s ease-in-out;
	}

	.label {
		font-size: 14px;
	}
</style>
