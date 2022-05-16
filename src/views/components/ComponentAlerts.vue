<template>
	<!-- alert-notifications -->
	<div class="alert alert-module" v-bind:class="alertBottom">
		<router-link to="/" class="link link-base float-left"
			>&lt; &nbsp;&nbsp;Previous Project</router-link
		>
		<router-link to="/" class="link link-base float-right"
			>Next Project&nbsp;&nbsp; &gt;</router-link
		>
	</div>
</template>

<script>
	import mixinHeaderScroll from "../mixins/mixinHeaderScroll.js";

	export default {
		mixins: [mixinHeaderScroll],
	};
</script>
