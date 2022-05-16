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
			<canvas id="spiders" class="overlay"></canvas>
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

		<layout-portfolio></layout-portfolio>
		<layout-preload></layout-preload>
		<layout-home-experience></layout-home-experience>
	</div>
</template>

<script>
	import Json from "../../data/data.json";
	import LayoutPortfolio from "../layouts/LayoutPortfolio.vue";
	import LayoutPreload from "../layouts/LayoutPreload.vue";
	import LayoutHomeExperience from "../layouts/LayoutHomeExperience.vue";
	import IconArrowdown from "../icons/IconArrowdown.vue";

	export default {
		data() {
			return {
				data: Json,
			};
		},
		components: {
			LayoutPortfolio,
			LayoutPreload,
			LayoutHomeExperience,
			IconArrowdown,
		},
		methods: {
			// // isMobile function to determine if the device is mobile
			// isMobile() {
			// 	return /Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone|IEMobile|Opera Mini/i.test(navigator.userAgent);
			// },
			// // if isMobile return false, show #spiders
			// isnotMobile() {
			// 	if (this.isMobile = false) {
			// 		document.querySelector('#spiders').style.display = "inline-block";
			// 		alert('Alert!');
			// 	}
			// },
			smoothscrollPortfolio() {
				document.querySelector("#portfolio").scrollIntoView({
					behavior: "smooth",
				});
			},
		},
	};
</script>
