<template>
	<div id="home">
		<!-- preload hero-home -->
		<img
			class="display-none"
			loading="eager"
			v-bind:src="data.website.image.heroEarth"
		/>
		<!-- /preload hero-home -->

		<!-- hero -->
		<div
			id="home-hero"
			v-bind:style="{
				backgroundImage: 'url(' + data.website.image.heroEarth + ')',
			}"
		>
			<canvas class="overlay background-black"></canvas>

			<!-- spiders -->
			<canvas id="spiders" class="overlay"></canvas>
			<!-- /spiders -->

			<div
				class="hero-title align-center setting-anim--fadeinup setting-anim--delayed"
			>
				<div class="container">
					<h1 class="align-center color-white">
						{{ data.website.title }}
					</h1>
					<p class="align-center color-white" style="max-width: 100%">
						{{ data.website.about.description1.eng }}
						<br />
						<span class="iphone5-hide">{{
							data.website.about.description2.eng
						}}</span>
						<br />
						<span class="iphone5-hide">{{
							data.website.about.description3.eng
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
		<module-preload></module-preload>
		<module-home-experience></module-home-experience>
	</div>
</template>

<script>
	import Json from "../../data/data.json";
	import ModulePortfolio from "../modules/ModulePortfolio.vue";
	import ModulePreload from "../modules/ModulePreload.vue";
	import ModuleHomeExperience from "../modules/ModuleHomeExperience.vue";
	import IconArrowdown from "../icons/IconArrowdown.vue";

	export default {
		data() {
			return {
				data: Json,
			};
		},
		components: {
			ModulePortfolio,
			ModulePreload,
			ModuleHomeExperience,
			IconArrowdown,
		},
		methods: {
			// isPhone function to determine if the device is phone
			isPhone() {
				return /Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone|IEMobile|Opera Mini/i.test(
					navigator.userAgent
				);
			},
			// if isPhone return false, show #spiders
			isnotPhone() {
				if (this.isPhone === false) {
					document.querySelector("#spiders").style.display =
						"inline-block";
					alert("Alert!");
				}
			},
			smoothscrollPortfolio() {
				document.querySelector("#portfolio").scrollIntoView({
					behavior: "smooth",
				});
			},
		},
	};
</script>
