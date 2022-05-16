<template>
	<div id="styleguide">
		<!-- hero -->
		<div id="styleguide-hero">
			<canvas class="overlay background-black"></canvas>
			<div
				class="hero-title align-center setting-anim--fadeinup setting-anim--delayed"
			>
				<div class="container">
					<h1 class="align-center color-white">
						{{ data.styleguide.project.title }}
					</h1>
					<p class="align-center color-white">
						{{ data.styleguide.project.description }}
						<br />Its purpose is to help teams unite around a common
						language during the creation and life of a product.
					</p>
					<button
						class="button button-mini button-white--ghost button-tag"
						v-for="tag in data.styleguide.project.tags"
						v-bind:key="tag"
					>
						{{ tag }}
					</button>
				</div>
			</div>
		</div>
		<!-- /hero -->

		<div class="container">
			<div class="five-sixth-laptop five-sixth-desktop column">
				<layout-styleguide-elements></layout-styleguide-elements>
				<layout-styleguide-componentsweb></layout-styleguide-componentsweb>
				<!-- <layout-styleguide-brand></layout-styleguide-brand> -->
			</div>

			<div
				class="one-sixth-laptop one-sixth-desktop column display-laptop display-desktop"
			>
				<layout-styleguide-nav></layout-styleguide-nav>
			</div>
		</div>

		<layout-contact></layout-contact>
	</div>
</template>

<script>
	import Json from "../../data/data.json";
	import LayoutStyleguideElements from "../layouts/LayoutStyleguideElements.vue";
	import LayoutStyleguideComponentsweb from "../layouts/LayoutStyleguideComponentsweb.vue";
	// import LayoutStyleguideBrand from "../views/LayoutStyleguideBrand.vue";
	import LayoutStyleguideNav from "../layouts/LayoutStyleguideNav.vue";

	export default {
		data() {
			return {
				data: Json,
			};
		},
		components: {
			LayoutStyleguideElements,
			LayoutStyleguideComponentsweb,
			// LayoutStyleguideBrand,
			LayoutStyleguideNav,
		},
	};
</script>
