<template>
	<div>
		<img
			v-for="project in data.projects"
			v-bind:key="project.id"
			v-bind:src="project.hero"
			loading="eager"
			width="1"
			height="1"
			border="0"
		/>
		<!-- <img
			v-for="project in data.projects"
			v-bind:key="project.id"
			loading="eager"
			width="1"
			height="1"
			border="0"
			v-bind:src="project.hero"
		/> -->
	</div>
</template>

<script>
	import Json from "../../data/data.json";

	export default {
		data() {
			return {
				data: Json,
			};
		},
	};
</script>
