<script lang="ts">
	import Close from '$icons/Close.svelte'
	import Checkbox from '$components/general/Checkbox.svelte'

	import type { Option } from '$components/general/Autocomplete/types'

	export let placeholder: string = 'Write something...'

	export let options: Option[] | string[] = []
	export let multiple: boolean = false
	export let filter: boolean = false

	export let value: string | Option | string[] | Option[] = ''

	let optionsFormated = options.map((option) => {
		if (typeof option !== 'string') {
			return option as Option
		}

		return { label: option, value: option, isSelected: value === option } as Option
	})

	let inputValue: string = ''

	$: {
		if (multiple) {
			const selected = optionsFormated.filter((option) => option.isSelected)
			if (typeof options[0] === 'string') {
				value = selected.map((option) => option.value)
			} else {
				value = selected
			}
		} else {
			const selected = optionsFormated.find((option) => option.isSelected)
			if (typeof options[0] === 'string') {
				value = selected?.value
			} else if (selected) {
				value = selected
			}
		}
	}

	function selecteSingleOption(option: Option) {
		if (multiple) return
		optionsFormated = optionsFormated.map((opt) => {
			if (opt.isSelected) opt.isSelected = false
			return { ...opt, isSelected: true }
		})
		inputValue = option.label
	}

	function removeOption(option: Option) {
		optionsFormated = optionsFormated.map((opt) => {
			if (option.label === opt.label) opt.isSelected = false
			return opt
		})
		inputValue = ''
	}
</script>

<div class="container">
	{#if multiple && Array.isArray(value)}
		<div class="selected">
			{#each optionsFormated.filter((i) => i.isSelected) as item}
				<button class="item" on:click={() => removeOption(item)}>
					<span class="icon">
						<Close h={10} w={10} weight="bold" />
					</span>

					<span>{item.label}</span>
				</button>
			{/each}
		</div>
	{/if}
	<label class:multiple>
		<input type="text" {placeholder} bind:value={inputValue} disabled={!filter} />
	</label>

	<ul class="results">
		{#each optionsFormated as option}
			<li class:multiple>
				{#if multiple}
					<Checkbox block bind:checked={option.isSelected}>{option.label}</Checkbox>
				{:else}
					<button
						class:selected={inputValue === option.label}
						on:click={() => selecteSingleOption(option)}
					>
						{option.label}
					</button>
				{/if}
			</li>
		{/each}
	</ul>
</div>

<style lang="postcss">
	.container {
		position: relative;
		padding: 12px;
		border-radius: 4px;
		font-size: 12px;
		color: var(--grey-900);
		width: 100%;
		background: var(--white);
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		align-items: center;
	}

	.selected {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;

		.item {
			border: none;
			padding: 0.25rem 0.75rem;
			border-radius: 4px;
			background: var(--grey-100);
			transition: background 0.2s ease-in-out;
			position: relative;

			.icon {
				--size: 14px;
				width: var(--size);
				height: var(--size);
				border-radius: 50%;
				display: flex;
				align-items: center;
				justify-content: center;
				position: absolute;
				background: var(--grey-200);
				top: -0.25rem;
				right: -0.25rem;
				color: var(--white);
				transition: color 0.2s ease-in-out, background 0.2s ease-in-out;
			}

			&:hover .icon {
				color: var(--white);
				background: var(--red-500);
			}
		}
	}

	label {
		width: 100%;
		&.multiple {
			width: auto;
		}

		input {
			width: 100%;
			padding: 0.25rem;
			border: none;
			background: inherit;
			border-radius: 4px;
		}
	}

	.results {
		position: absolute;
		top: 100%;
		left: 0;
		width: 100%;
		background: var(--white);
		border-radius: 4px;
		padding: 0.5rem;
		margin-top: 0.5rem;
		z-index: 1;
		list-style: none;
		display: flex;
		flex-direction: column;
		height: min-content;
		max-height: 200px;

		li {
			border-radius: 4px;
			transition: background 0.2s ease-in-out, transform 0.3s ease-in-out;

			&.multiple {
				padding: 0.5rem;
			}

			button {
				padding: 0.5rem;
				text-align: left;
				width: 100%;
				border: none;
				background: inherit;
				cursor: pointer;
				border-radius: inherit;

				&.selected {
					background: var(--primary-light);
					font-weight: bold;
					color: var(--primary);
				}
			}

			&:hover {
				background: var(--grey-100);
				transform: scale(1.01);
			}
		}
	}
</style>
