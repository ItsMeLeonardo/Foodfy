<script lang="ts">
	type InputType = 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search'

	export let helperText: string | null = null
	export let hasError: boolean = false
	export let placeholder: string = ''
	export let type: InputType = 'text'
	export let name: string = ''
	export let id: string | null = null
</script>

<label>
	<input {type} {name} {placeholder} {id} />
	<span class="icon-right">
		<slot name="icon-right" />
	</span>
	{#if helperText}
		<span class="helper-text" class:error={hasError}>{helperText}</span>
	{/if}
</label>

<style lang="postcss">
	label {
		position: relative;
	}

	.icon-right {
		display: flex;
		position: absolute;
		top: 50%;
		right: 0.5rem;
		transform: translateY(-50%);
		color: var(--primary);
	}

	.helper-text {
		position: relative;
		font-size: 11px;
		font-weight: 600;
		color: var(--orange-500);
	}

	.error {
		color: var(--red-500);
	}

	input {
		padding: 12px;
		border-radius: 4px;
		font-size: 12px;
		border: none;
		color: var(--grey-900);
		width: 100%;
	}
</style>
