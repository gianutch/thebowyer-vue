<template>
	<div id="home-experience">
		<div class="container section">
			<h2 class="align-center">Experience</h2>
			<p class="align-center">
				A list of the different companies I have worked at.
				<br />You can also consult my
				<a
					class="link link-external"
					href="https://www.linkedin.com/in/gaelbvr/"
					target="_blank"
					rel="noopener noreferrer"
					>LinkedIn profile</a
				>
				or download my
				<a
					v-if="themeDark"
					class="link link-external"
					v-bind:href="data.website.file.resumeDark"
					target="_blank"
					rel="noopener noreferrer"
					>resume in PDF</a
				>
				<a
					v-else
					class="link link-external"
					v-bind:href="data.website.file.resumeLight"
					target="_blank"
					rel="noopener noreferrer"
					>resume in PDF</a
				>.
			</p>
			<br />

			<!-- home-language -->
			<div class="align-center">
				<select class="field" style="max-width: 240px" v-model="language">
					<option value="Eng">English</option>
					<option value="Fra">Français</option>
					<option value="Esp">Español</option>
					<option value="Chi">中文</option>
				</select>
			</div>
			<br />

			<!-- home-timeline -->
			<div
				class="timeline"
				v-bind:style="{
					backgroundImage: 'url(' + data.website.image.squareGrey + ')',
				}"
			>
				<div class="timeline-photo">
					<img
						loading="eager"
						v-bind:src="headshotPath"
						v-bind:title="data.website.text.about.eng"
						v-bind:alt="data.website.text.description1.eng"
						v-on:mouseover="headshotOver"
						v-on:mouseleave="headshotLeave"
						width="128"
						height="128"
					/>
				</div>
				<!-- prefetch headshotThug.jpg (for on:mouseover) -->
				<link
					rel="prefetch"
					v-bind:href="data.website.image.headshotThug"
					as="image"
				/>
				<!-- /prefetch -->
				<br />
				<br class="display-laptop display-desktop" />

				<!-- vfor -->
				<div
					v-for="experience in data.experiences"
					v-bind:key="experience.id"
					v-bind:class="experience.classSide"
					class="setting-shadow--motion"
				>
					<h3 v-if="language === 'Eng'">
						{{ experience.title.eng }}
					</h3>
					<h3 v-else-if="language === 'Fra'">
						{{ experience.title.fra }}
					</h3>
					<h3 v-else-if="language === 'Esp'">
						{{ experience.title.esp }}
					</h3>
					<h3 v-else-if="language === 'Chi'">
						{{ experience.title.chi }}
					</h3>
					<h5>{{ experience.date }}</h5>
					<!-- if there is a link -->
					<p>
						<a
							v-if="Boolean(experience.url)"
							class="link link-external text-bold"
							v-bind:href="experience.url"
							target="_blank"
							rel="noopener noreferrer"
							>{{ experience.company }}</a
						>
						<span v-else class="text-bold">{{ experience.company }}</span>
						<span>
							<span v-if="language === 'Eng'">{{
								experience.description.eng
							}}</span>
							<span v-else-if="language === 'Fra'">{{
								experience.description.fra
							}}</span>
							<span v-else-if="language === 'Esp'">{{
								experience.description.esp
							}}</span>
							<span v-else-if="language === 'Chi'">{{
								experience.description.chi
							}}</span>
						</span>
					</p>
					<span v-if="language === 'Eng'">
						<p v-for="task in experience.tasks.eng" v-bind:key="task">
							{{ task }}
						</p>
					</span>
					<span v-else-if="language === 'Fra'">
						<p v-for="task in experience.tasks.fra" v-bind:key="task">
							{{ task }}
						</p>
					</span>
					<span v-else-if="language === 'Esp'">
						<p v-for="task in experience.tasks.esp" v-bind:key="task">
							{{ task }}
						</p>
					</span>
					<span v-else-if="language === 'Chi'">
						<p v-for="task in experience.tasks.chi" v-bind:key="task">
							{{ task }}
						</p>
					</span>
					<br />
					<button
						v-for="tag in experience.tags"
						v-bind:key="tag"
						class="button button-mini button-tag button-base--ghost"
					>
						{{ tag }}
					</button>
				</div>
				<!-- /vfor -->

				<div class="timeline-last"></div>
			</div>
			<!-- /home-timeline -->

			<br />
			<br />
			<div class="subsection">
				<span v-if="language === 'Eng'">
					<h3 class="align-center">
						{{ data.website.text.about.eng }}
					</h3>
					<p class="align-center">
						{{ data.website.text.description1.eng }}
						<br />
						{{ data.website.text.description2.eng }}
						<br />
						{{ data.website.text.description3.eng }}
					</p>
				</span>
				<span v-else-if="language === 'Fra'">
					<h3 class="align-center">
						{{ data.website.text.about.fra }}
					</h3>
					<p class="align-center">
						{{ data.website.text.description1.fra }}
						<br />
						{{ data.website.text.description2.fra }}
						<br />
						{{ data.website.text.description3.fra }}
					</p>
				</span>
				<span v-else-if="language === 'Esp'">
					<h3 class="align-center">
						{{ data.website.text.about.esp }}
					</h3>
					<p class="align-center">
						{{ data.website.text.description1.esp }}
						<br />
						{{ data.website.text.description2.esp }}
						<br />
						{{ data.website.text.description3.esp }}
					</p>
				</span>
				<span v-else-if="language === 'Chi'">
					<h3 class="align-center">
						{{ data.website.text.about.chi }}
					</h3>
					<p class="align-center">
						{{ data.website.text.description1.chi }}
						<br />
						{{ data.website.text.description2.chi }}
						<br />
						{{ data.website.text.description3.chi }}
					</p>
				</span>
			</div>
		</div>
	</div>
</template>

<script>
	import Json from "/src/data/data.json";
	import mixinThemeType from "/src/mixins/mixinThemeType.js";

	export default {
		data() {
			return {
				data: Json,
				headshotPath: Json.website.image.headshotNormal,
				language: "Eng",
			};
		},
		mixins: [mixinThemeType],
		// functions
		methods: {
			// on:mouseover
			headshotOver() {
				this.headshotPath = Json.website.image.headshotThug;
			},
			// on:mouseleave
			headshotLeave() {
				this.headshotPath = Json.website.image.headshotNormal;
			},
		},
	};
</script>
