<template>
	<div id="projects">
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
						v-bind:srcset="projectObj.image.mock2"
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
			<div id="projects-work">
				<!-- aWorks v-if -->
				<div class="section" v-if="Boolean(projectObj.aTitle)">
					<h3 class="align-center">{{ projectObj.aTitle }}</h3>
					<p class="align-center">{{ projectObj.aSubtitle }}</p>
					<br />
					<ul class="align-center">
						<li
							v-for="aWork in projectObj.aWorks"
							v-bind:key="aWork"
							v-bind:class="aWork.classType"
						>
							<img
								class="image-responsive setting-shadow--motion"
								loading="auto"
								v-bind:src="aWork.img1"
								v-bind:srcset="aWork.img2"
								v-bind:width="aWork.width"
								v-bind:height="aWork.height"
							/>
						</li>
					</ul>
				</div>

				<!-- bWorks v-if -->
				<div class="section" v-if="Boolean(projectObj.bTitle)">
					<h3 class="align-center">{{ projectObj.bTitle }}</h3>
					<p class="align-center">{{ projectObj.bSubtitle }}</p>
					<br />
					<ul class="align-center">
						<li
							v-for="bWork in projectObj.bWorks"
							v-bind:key="bWork"
							v-bind:class="bWork.classType"
						>
							<img
								class="image-responsive setting-shadow--motion"
								loading="lazy"
								v-bind:src="bWork.img1"
								v-bind:srcset="bWork.img2"
								v-bind:width="bWork.width"
								v-bind:height="bWork.height"
							/>
						</li>
					</ul>
				</div>

				<!-- cWorks v-if -->
				<div class="section" v-if="Boolean(projectObj.cTitle)">
					<h3 class="align-center">{{ projectObj.cTitle }}</h3>
					<p class="align-center">{{ projectObj.cSubtitle }}</p>
					<br />
					<ul class="align-center">
						<li
							v-for="cWork in projectObj.cWorks"
							v-bind:key="cWork"
							v-bind:class="cWork.classType"
						>
							<img
								class="image-responsive setting-shadow--motion"
								loading="lazy"
								v-bind:src="cWork.img1"
								v-bind:srcset="cWork.img2"
								v-bind:width="cWork.width"
								v-bind:height="cWork.height"
							/>
						</li>
					</ul>
				</div>

				<!-- dWorks v-if -->
				<div class="section" v-if="Boolean(projectObj.dTitle)">
					<h3 class="align-center">{{ projectObj.dTitle }}</h3>
					<p class="align-center">{{ projectObj.dSubtitle }}</p>
					<br />
					<ul class="align-center">
						<li
							v-for="dWork in projectObj.dWorks"
							v-bind:key="dWork"
							v-bind:class="dWork.classType"
						>
							<img
								class="image-responsive setting-shadow--motion"
								loading="lazy"
								v-bind:src="dWork.img1"
								v-bind:srcset="dWork.img2"
								v-bind:width="dWork.width"
								v-bind:height="dWork.height"
							/>
						</li>
					</ul>
				</div>
			</div>
			<!-- /project-work -->
			<br /><br /><br />
		</div>

		<!-- special v-if -->
		<div
			id="projects-special"
			class="section"
			v-if="Boolean(projectObj.image.special)"
			v-bind:style="{
				backgroundImage: 'url(' + projectObj.image.special + ')',
			}"
		></div>
		<!-- /special v-if -->

		<module-portfolio></module-portfolio>
	</div>
</template>

<script>
	import Json from "../../data/data.json";
	import ModulePortfolio from "../modules/ModulePortfolio.vue";

	export default {
		data() {
			return {
				data: Json,
				projectId: this.$route.params.projectId,
				projectObj: Object(), // ?
			};
		},
		components: {
			ModulePortfolio,
		},
		methods: {
			// functions
			refreshProject() {
				// to be able to use "this" page within the loop (bubble)
				var self = this;
				// loop (bubble)
				this.data.projects.forEach((projectTemp) => {
					if (projectTemp.name === this.$route.params.projectId) {
						self.projectObj = projectTemp;
					}
				});
			},
		},
		// watch: {
		// 	// do this if something changes
		// 	$route(to, from) {
		// 		this.refreshProject();
		// 	},
		// },
		created() {
			// do this at launch
			this.refreshProject();
		},
	};
</script>
