<template>
	<div v-bind:id="projectObj.id" class="projects">
		<!-- project-hero -->
		<div
			id="projects-hero"
			v-bind:style="{
				backgroundImage: 'url(' + projectObj.image.hero + ')',
			}"
		>
			<canvas class="overlay background-black"></canvas>
			<div
				class="hero-title align-center setting-anim--fadeinup setting-anim--delayed"
			>
				<div class="container">
					<h1 class="align-center color-white">
						{{ projectObj.title }}
					</h1>
					<p class="align-center color-white">
						<a
							v-if="Boolean(projectObj.url)"
							class="link link-external"
							v-bind:href="projectObj.url"
							target="_blank"
							rel="noopener noreferrer"
							>{{ projectObj.title }},&nbsp;</a
						>
						{{ projectObj.description }}
					</p>
					<div class="align-center">
						<button
							class="button button-mini button-white--ghost button-tag"
							v-for="tag in projectObj.tags"
							v-bind:key="tag"
						>
							{{ tag }}
						</button>
					</div>
				</div>
			</div>
		</div>
		<!-- /project-hero -->

		<div class="container">
			<!-- project-mock -->
			<div id="projects-mock">
				<div class="mock">
					<img
						class="image-responsive"
						loading="eager"
						v-bind:src="projectObj.image.mock1"
						v-bind:srcset="
							projectObj.image.mock2 +
							' 2x, ' +
							projectObj.image.mock3 +
							' 3x, ' +
							projectObj.image.mock4 +
							' 4x'
						"
						width="530"
						height="360"
					/>
				</div>
			</div>
			<!-- /project-mock -->

			<br />
			<br />
			<br />

			<!-- project-work -->
			<div
				class="projects-work"
				v-for="part in projectObj.parts"
				v-bind:key="part.id"
			>
				<div class="section">
					<h3 class="align-center">{{ part.title }}</h3>
					<p class="align-center">{{ part.subtitle }}</p>
					<br />
					<ul class="align-center">
						<li
							v-for="work in part.works"
							v-bind:key="work"
							v-bind:class="work.classType"
						>
							<img
								class="image-responsive setting-shadow--motion"
								loading="lazy"
								v-bind:src="work.img1"
								v-bind:srcset="work.img2 + ' 2x'"
								v-bind:width="work.width"
								v-bind:height="work.height"
							/>
						</li>
					</ul>
				</div>
			</div>
			<!-- /project-work -->
			<br /><br /><br />
		</div>

		<!-- banner v-if -->
		<div
			id="projects-banner"
			class="section"
			v-if="Boolean(projectObj.image.banner)"
			v-bind:style="{
				backgroundImage: 'url(' + projectObj.image.banner + ')',
			}"
		></div>
		<!-- /banner v-if -->

		<module-portfolio></module-portfolio>
	</div>
</template>

<script>
	import ModulePortfolio from "/src/views/modules/ModulePortfolio.vue";

	export default {
		data() {
			return {
				projectObj: Object(), // ?
			};
		},
		components: {
			ModulePortfolio,
		},
		// functions
		methods: {
			// @created()
			refreshProject() {
				// to be able to use "this" page within the loop (bubble)
				const self = this;
				// loop (bubble)
				this.data.projects.forEach((projectTemp) => {
					if (projectTemp.id === this.$route.params.projectId) {
						self.projectObj = projectTemp;
					}
				});
			},
		},
		// do this at launch
		created() {
			this.refreshProject();
		},
		// do this if something changes
		watch: {
			$route() {
				this.refreshProject();
			}, // OR just: $route: "refreshProject",
		},
	};
</script>
