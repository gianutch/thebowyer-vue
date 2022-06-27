<template>
	<div id="home">
		<!-- preload home-hero -->
		<link rel="preload" v-bind:href="heroPath" as="image" />
		<!-- /preload home-hero -->

		<!-- hero -->
		<div
			id="home-hero"
			v-bind:style="{
				backgroundImage: 'url(' + heroPath + ')',
			}"
		>
			<canvas class="overlay background-black"></canvas>

			<!-- spiders -->
			<canvas
				v-if="windowWidth > 999"
				id="spiders"
				class="overlay display-tablet display-laptop display-desktop"
			></canvas>
			<!-- /spiders -->

			<div
				class="hero-title align-center setting-anim--fadeinup setting-anim--delayed"
			>
				<!-- console.log -->
				<button class="button" v-on:click="testConsolelog">Test</button>
				<!-- /console.log -->
				<div class="container">
					<h1 class="align-center color-white">
						{{ data.website.text.title }}
					</h1>
					<p class="align-center color-white" style="max-width: 100%">
						{{ data.website.text.description1.eng }}
						<br />
						<span class="iphone5-hide">{{
							data.website.text.description2.eng
						}}</span>
						<br />
						<span class="iphone5-hide">{{
							data.website.text.description3.eng
						}}</span>
					</p>
				</div>
			</div>
			<button
				class="button button-white--ghost button-special setting-anim--fadeinup setting-anim--delayed align-center hero-arrowdown"
				v-on:click="smoothscrollToPortfolio"
			>
				<icon-arrowdown class="icon"></icon-arrowdown>
			</button>
		</div>
		<!-- /hero -->

		<module-portfolio></module-portfolio>

		<!-- prefetch headshotThug.jpg -->
		<link
			rel="prefetch"
			v-bind:href="data.website.image.headshotThug"
			as="image"
		/>
		<!-- /prefetch -->
		<!-- prefetch hero-project -->
		<link
			rel="prefetch"
			v-for="project in data.projects"
			v-bind:key="project.id"
			v-bind:href="project.image.hero"
			as="image"
		/>
		<!-- /prefetch -->
		<!-- prefetch mock-project -->
		<span v-if="windowPixelRatio > 1">
			<link
				rel="prefetch"
				v-for="project in data.projects"
				v-bind:key="project.id"
				v-bind:href="project.image.mock2"
				as="image"
			/>
		</span>
		<span v-else>
			<link
				rel="prefetch"
				v-for="project in data.projects"
				v-bind:key="project.id"
				v-bind:href="project.image.mock1"
				as="image"
			/>
		</span>
		<!-- /prefetch -->

		<module-home-experience></module-home-experience>
	</div>
</template>

<script>
	import Json from "/src/data/data.json";
	import mixinThemeType from "/src/mixins/mixinThemeType.js";
	import ModulePortfolio from "/src/views/modules/ModulePortfolio.vue";
	import ModuleHomeExperience from "/src/views/modules/ModuleHomeExperience.vue";
	import IconArrowdown from "/src/views/icons/IconArrowdown.vue";

	export default {
		data() {
			return {
				heroPath: Json.website.image.heroEarth,
				windowWidth: window.innerWidth,
				windowPixelRatio: window.devicePixelRatio,
			};
		},
		mixins: [mixinThemeType],
		components: {
			ModulePortfolio,
			ModuleHomeExperience,
			IconArrowdown,
		},
		// functions
		methods: {
			// on:click
			smoothscrollToPortfolio() {
				document.querySelector("#portfolio").scrollIntoView({
					behavior: "smooth",
				});
			},
			// on:click
			testConsolelog() {
				console.log(window.innerWidth);
				console.log(window.devicePixelRatio);
			},
		},
	};
</script>
