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
				<module-styleguide-elements></module-styleguide-elements>
				<module-styleguide-componentsweb></module-styleguide-componentsweb>
				<module-styleguide-brand></module-styleguide-brand>
			</div>

			<div
				class="one-sixth-laptop one-sixth-desktop column display-laptop--inline-block display-desktop--inline-block"
			>
				<module-styleguide-nav></module-styleguide-nav>
			</div>
		</div>
	</div>
</template>

<script>
	import ModuleStyleguideElements from "/src/views/modules/ModuleStyleguideElements.vue";
	import ModuleStyleguideComponentsweb from "/src/views/modules/ModuleStyleguideComponentsweb.vue";
	import ModuleStyleguideBrand from "/src/views/modules/ModuleStyleguideBrand.vue";
	import ModuleStyleguideNav from "/src/views/modules/ModuleStyleguideNav.vue";

	export default {
		components: {
			ModuleStyleguideElements,
			ModuleStyleguideComponentsweb,
			ModuleStyleguideBrand,
			ModuleStyleguideNav,
		},
	};
</script>
