<template>
	<div id="home">
		<!-- prefetch home-hero -->
		<link
			rel="prefetch"
			v-bind:href="data.website.image.heroEarth"
			as="image"
		/>
		<!-- /prefetch home-hero -->

		<!-- hero -->
		<div
			id="home-hero"
			v-bind:style="{
				backgroundImage: 'url(' + data.website.image.heroEarth + ')',
			}"
		>
			<canvas class="overlay background-black"></canvas>

			<!-- spiders -->
			<canvas
				id="spiders"
				class="overlay display-tablet display-laptop display-desktop"
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
				v-on:click="smoothscrollPortfolio"
			>
				<icon-arrowdown class="icon"></icon-arrowdown>
			</button>
		</div>
		<!-- /hero -->

		<module-portfolio></module-portfolio>

		<!-- prefetch headshotThug.jpg, projects-hero.jpg -->
		<link
			rel="prefetch"
			v-bind:href="data.website.image.headshotThug"
			as="image"
		/>
		<link
			rel="prefetch"
			v-for="project in data.projects"
			v-bind:key="project.id"
			v-bind:href="project.image.hero"
			as="image"
		/>
		<!-- /prefetch headshotThug.jpg, projects-hero.jpg -->

		<module-home-experience></module-home-experience>
	</div>
</template>

<script>
	import ModulePortfolio from "../modules/ModulePortfolio.vue";
	import ModuleHomeExperience from "../modules/ModuleHomeExperience.vue";
	import IconArrowdown from "../icons/IconArrowdown.vue";

	export default {
		components: {
			ModulePortfolio,
			ModuleHomeExperience,
			IconArrowdown,
		},
		methods: {
			smoothscrollPortfolio() {
				document.querySelector("#portfolio").scrollIntoView({
					behavior: "smooth",
				});
			},
		},
	};
</script>
