<template>
	<div id="home">
		<!-- hero -->
		<div
			id="home-hero"
			v-bind:style="{
				backgroundImage: 'url(' + heroPath + ')',
			}"
		>
			<!-- EXAMPLE FOR TIME
			<video>
				<source src="splash.mp4#t=10.00,20.00" type="video/mp4" />
			</video> 
			END OF EXAMPLE FOR TIME -->
			<!-- <div style="display: flex; justify-content: center;">
				<video
					loading="auto"
					autoplay="autoplay"
					loop="loop"
					muted="muted"
					playsinline=""
					style=" position: absolute; height: 100vh;"
				>
					<source
						v-bind:src="
							data.styleguide.project.video.heroEarthMp4 + '#t=9.00'
						"
						type="video/mp4"
					/>
				</video>
			</div> -->
			<canvas class="overlay background-black"></canvas>

			<!-- spiders -->
			<canvas
				v-if="windowWidth > 999"
				id="spiders"
				class="overlay display-tablet--inline-block display-laptop--inline-block display-desktop--inline-block"
			></canvas>
			<!-- /spiders -->

			<div
				class="hero-title align-center setting-anim--fadeinup setting-anim--delayed"
			>
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
				v-on:click="smoothscrollToPortfolio()"
			>
				<icon-arrowdown class="icon"></icon-arrowdown>
			</button>
		</div>
		<!-- /hero -->

		<module-portfolio></module-portfolio>

		<!-- prefetch hero-project -->
		<link
			rel="prefetch"
			v-for="project in data.projects"
			v-bind:key="project.id"
			v-bind:href="project.image.hero"
			as="image"
		/>
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
				data: Json,
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
		},
	};
</script>
