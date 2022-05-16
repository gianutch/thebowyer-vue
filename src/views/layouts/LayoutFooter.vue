<template>
	<footer>
		<div class="container-fluid align-center">
			<h5 class="display-inline-block">
				2022 The Bowyer&nbsp;&nbsp;&nbsp;-
			</h5>
			&nbsp;
			<a
				class="link link-theme"
				href="https://www.linkedin.com/in/gaelbvr/en"
				target="_blank"
			>
				<icon-linkedin class="icon icon-theme"></icon-linkedin>
			</a>

			&nbsp;
			<a
				class="link link-theme"
				href="https://dribbble.com/"
				target="_blank"
			>
				<icon-dribbble class="icon icon-theme"></icon-dribbble>
			</a>
			&nbsp;
			<a class="link link-theme" href="https://github.com/" target="_blank">
				<icon-github class="icon icon-theme"></icon-github>
			</a>
		</div>
	</footer>
</template>

<script>
	import IconLinkedin from "../icons/IconLinkedin.vue";
	import IconDribbble from "../icons/IconDribbble.vue";
	import IconGithub from "../icons/IconGithub.vue";

	export default {
		components: {
			IconLinkedin,
			IconDribbble,
			IconGithub,
		},
	};
</script>
