<script lang="ts">
	import FacebookIcon from '$icons/facebook.svelte'
	import GoogleIcon from '$icons/google.svelte'
	import TwitterIcon from '$icons/twitter.svelte'

	import Input from '$components/general/Input.svelte'
	import Button from '$components/general/Button.svelte'
</script>

<main>
	<section class="login-container">
		<a href="/" class="logo">FOODFY</a>
		<article class="form-container">
			<header>
				<h1 class="title">Sign up</h1>
				<a href="/login">HAVE AN ACCOUNT?</a>
			</header>
			<form on:submit|preventDefault>
				<Input type="text" name="username" placeholder="username" />
				<Input type="email" name="email" placeholder="email@example.com" />
				<Input type="password" name="email" placeholder="your password" />
				<Button>Sign up</Button>
			</form>
			<small>Or Sign up with</small>
			<div class="login-options">
				<Button color="light" position="left">
					<GoogleIcon h={20} w={20} />
					<span>Login with Google</span>
				</Button>
				<Button color="light" position="left">
					<FacebookIcon h={20} w={20} />
					<span>Login with Facebook</span>
				</Button>
				<Button color="light" position="left">
					<TwitterIcon h={20} w={20} />
					<span>Login with Twitter</span>
				</Button>
			</div>
		</article>
	</section>
</main>

<style lang="postcss">
	main {
		width: 100%;
		height: 100vh;
		display: grid;
		align-items: center;
		padding: 0.5rem;
	}
	.login-container {
		width: 100%;
		margin: 0 auto;
		max-width: 450px;
	}
	.logo {
		font-size: 1.25rem;
		font-weight: 700;
		text-align: center;
		margin-bottom: 1.5rem;
		display: block;
	}

	.form-container {
		width: 100%;

		header {
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;

			.title {
				font-size: 1.5rem;
				font-weight: 600;
				color: var(--grey-900);
			}

			a {
				font-size: 12px;
				text-decoration: none;
				color: var(--grey-900);
			}
		}

		form {
			display: flex;
			flex-direction: column;
			gap: 12px;
			margin-top: 1.5rem;
		}

		small {
			width: 100%;
			display: block;
			text-align: center;
			margin: 1rem 0;
		}
	}

	.login-options {
		display: grid;
		gap: 12px;
		width: 100%;
	}
</style>
