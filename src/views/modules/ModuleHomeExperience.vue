<template>
	<div id="home-experience" class="section section-first section-last">
		<div class="container">
			<h2 class="align-center">Experience</h2>
			<p class="align-center">
				A list of the different companies I have worked at.
				<br />You can also consult my
				<a
					class="link link-external"
					href="https://www.linkedin.com/in/gaelbvr/en"
					target="_blank"
					>LinkedIn profile</a
				>
				or download my
				<a
					v-if="themeLight"
					class="link link-external"
					v-bind:href="data.website.file.resumeLight"
					target="_blank"
					>resume in PDF</a
				>
				<a
					v-else
					class="link link-external"
					v-bind:href="data.website.file.resumeDark"
					target="_blank"
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
					backgroundImage: 'url(' + data.website.image.squaregrey + ')',
				}"
			>
				<div class="timeline-photo">
					<img
						loading="eager"
						v-bind:src="headshotpath"
						v-on:mouseover="headshotOver"
						v-on:mouseleave="headshotLeave"
						width="128"
						height="128"
					/>
				</div>
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
	import mixinThemeType from "../../mixins/mixinThemeType.js";

	export default {
		data() {
			return {
				data: Json,
				headshotpath: Json.website.image.headshot,
				language: "Eng",
			};
		},
		mixins: [mixinThemeType],
		methods: {
			headshotOver() {
				this.headshotpath = Json.website.image.headshotThug;
			},
			headshotLeave() {
				this.headshotpath = Json.website.image.headshot;
			},
		},
	};
</script>
