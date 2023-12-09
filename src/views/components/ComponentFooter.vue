<template>
	<footer>
		<div class="container-full align-center">
			<h5 class="display--inline-block">
				2024 Le Bowyer&nbsp;&nbsp;&nbsp;-
			</h5>
			&nbsp;
			<a
				class="link link-theme"
				href="https://www.linkedin.com/in/gaelbvr"
				target="_blank"
				rel="noopener noreferrer"
			>
				<icon-linkedin class="icon color-theme"></icon-linkedin>
			</a>

			&nbsp;
			<a
				class="link link-theme"
				href="https://dribbble.com/"
				target="_blank"
				rel="noopener noreferrer"
			>
				<icon-dribbble class="icon color-theme"></icon-dribbble>
			</a>
			&nbsp;
			<a
				class="link link-theme"
				href="https://github.com/"
				target="_blank"
				rel="noopener noreferrer"
			>
				<icon-github class="icon color-theme"></icon-github>
			</a>
			&nbsp;
			<!-- console.log -->
			<a class="link link-base link-mini" v-on:click="testConsolelog()"
				>log</a
			>
			<!-- /console.log -->
		</div>
	</footer>
</template>

<script>
	import IconLinkedin from "/src/views/icons/IconLinkedin.vue";
	import IconDribbble from "/src/views/icons/IconDribbble.vue";
	import IconGithub from "/src/views/icons/IconGithub.vue";

	export default {
		components: {
			IconLinkedin,
			IconDribbble,
			IconGithub,
		},
		// functions
		methods: {
			// on:click
			testConsolelog() {
				console.log(window.innerWidth);
				console.log(window.devicePixelRatio);
			},
		},
	};
</script>
