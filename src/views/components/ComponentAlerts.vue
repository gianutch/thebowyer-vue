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
	export default {
		data() {
			return {
				// alert data bind to class of alert, data change on scroll
				alertBottom: "display-none",
			};
		},
	};
</script>
