<template>
	<div id="portfolio" class="portfolio">
		<div class="container section">
			<h2 class="align-center">Portfolio</h2>
			<p class="align-center">
				A preview of the different projects I have worked on.
				<br />You can also download my
				<a
					v-bind:href="data.website.file.portfolio"
					class="link link-external"
					target="_blank"
					rel="noopener noreferrer"
					>portfolio in PDF</a
				>.
			</p>
			<br />
			<div class="row">
				<module-mosaic
					v-for="project in data.projects"
					v-bind:key="project.id"
					v-bind:projectProp="project"
				></module-mosaic>
			</div>
			<br />
			<div class="subsection">
				<h3 class="align-center">Style Guide</h3>
				<p class="align-center">
					You can consult the
					<router-link to="/styleguide" class="link link-primary"
						>Style Guide</router-link
					>&nbsp;of this website.
				</p>
				<br />
				<div class="row">
					<div class="mosaic">
						<router-link to="/styleguide">
							<figure
								class="fluid column setting-shadow--motion align-center float-none"
							>
								<img
									class="image-responsive"
									loading="lazy"
									v-bind:src="data.styleguide.project.image.mosaic1"
									v-bind:srcset="
										data.styleguide.project.image.mosaic2 + ' 2x'
									"
									v-bind:title="data.styleguide.project.title"
									v-bind:alt="data.styleguide.project.description"
								/>
								<canvas class="overlay"></canvas>
								<div class="mosaic-title">
									<h3 class="align-center">
										{{ data.styleguide.project.title }}
									</h3>
									<h5 class="align-center">
										{{ data.styleguide.project.description }}
									</h5>
									<button
										class="button button-mini button-tag button-white--ghost"
										v-for="tag in data.styleguide.project.tags.slice(
											0,
											2
										)"
										v-bind:key="tag"
									>
										{{ tag }}
									</button>
								</div>
							</figure>
						</router-link>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import ModuleMosaic from "/src/views/modules/ModuleMosaic.vue";

	export default {
		components: {
			ModuleMosaic,
		},
	};
</script>
