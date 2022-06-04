<template>
	<ul class="mosaic">
		<li>
			<router-link v-bind:to="'/projects/' + projectProp.id">
				<figure class="fluid column setting-shadow--motion">
					<img
						class="image-responsive"
						loading="eager"
						v-bind:src="projectProp.image.mosaic1"
						v-bind:srcset="projectProp.image.mosaic2"
					/>
					<canvas class="overlay"></canvas>
					<div class="mosaic-title">
						<h3 class="align-center">{{ projectProp.title }}</h3>
						<h5 class="align-center">{{ projectProp.description }}</h5>
						<button
							class="button button-mini button-tag button-white--ghost"
							v-for="tag in projectProp.tags.slice(0, 2)"
							v-bind:key="tag"
						>
							{{ tag }}
						</button>
					</div>
				</figure>
			</router-link>
		</li>
	</ul>
</template>

<script>
	export default {
		props: ["projectProp"],
	};
</script>
