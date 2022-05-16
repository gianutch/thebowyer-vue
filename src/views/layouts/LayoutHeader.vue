<template>
	<header id="header">
		<div class="container">
			<nav role="navigation">
				<!-- logo -->
				<router-link
					id="header-logo"
					class="float-left link text-bold display-laptop display-desktop"
					v-bind:class="linkStyle"
					to="/"
					>The Bowyer</router-link
				>

				<!-- menu -->
				<ul id="header-nav" class="nav-horizontal float-right">
					<!-- menu home -->
					<li>
						<router-link
							to="/"
							class="link"
							v-bind:class="linkStyle"
							activeClass="link-active"
							exact
						>
							<!-- menu icon for mobile -->
							<icon-home
								class="icon icon-big display-mobile display-tablet"
							></icon-home>
							<!-- menu text for desktop -->
							<span class="display-laptop display-desktop">Home</span>
						</router-link>
					</li>

					<!-- menu projects -->
					<li
						class="nav-dropdown"
						aria-haspopup="true"
						v-on:mouseover="dropdownOpen()"
						v-on:mouseleave="dropdownClose()"
					>
						<router-link
							to="/projects"
							class="link link-dropdown"
							v-bind:class="linkStyle"
							activeClass="link-active"
						>
							<!-- menu icon for mobile -->
							<icon-projects
								class="icon icon-big display-mobile display-tablet"
							></icon-projects>
							<icon-caret
								class="icon icon-mini display-mobile display-tablet"
							></icon-caret>
							<!-- menu text for desktop -->
							<span class="display-laptop display-desktop">
								Projects
								<icon-caret class="icon icon-mini"></icon-caret>
							</span>
							<!-- menu projects dropdown -->
							<ul
								id="dropdown"
								class="nav-vertical nav-dropdown-content"
								aria-label="submenu"
							>
								<li
									v-for="project in data.projects"
									v-bind:key="project.id"
									v-on:click="dropdownClose()"
								>
									<router-link
										v-bind:to="'/projects/' + project.id"
										class="link link-base"
										activeClass="link-active"
										v-on:click="navClose"
										exact
										>{{ project.title }}</router-link
									>
								</li>
							</ul>
						</router-link>
					</li>

					<!-- menu styleguide -->
					<li>
						<router-link
							to="/styleguide"
							class="link"
							v-bind:class="linkStyle"
							activeClass="link-active"
						>
							<!-- menu icon for mobile -->
							<icon-styleguide
								class="icon icon-big display-mobile display-tablet"
							></icon-styleguide>
							<!-- menu text for desktop -->
							<span class="display-laptop display-desktop"
								>Style Guide</span
							>
						</router-link>
					</li>

					<!-- menu theme -->
					<li>
						<button
							id="header-theme"
							class="float-right button button-base button-small button-special button-special button-special--header button-active"
							title="Toggle theme"
							type="button"
							v-on:click="themeToggle"
						>
							<icon-moon class="icon"></icon-moon>
						</button>
					</li>
				</ul>
			</nav>
		</div>
		<!-- line -->
		<div class="container">
			<div id="header-line" class="header-line"></div>
		</div>
	</header>
</template>

<script>
	import Json from "../../data/data.json";
	import mixinHeaderScroll from "../../mixins/mixinHeaderScroll.js";
	import mixinHeaderDropdown from "../../mixins/mixinHeaderDropdown.js";
	import IconCaret from "../icons/IconCaret.vue";
	import IconHome from "../icons/IconHome.vue";
	import IconMoon from "../icons/IconMoon.vue";
	import IconProjects from "../icons/IconProjects.vue";
	import IconStyleguide from "../icons/IconStyleguide.vue";

	export default {
		data() {
			return {
				data: Json,
			};
		},
		mixins: [mixinHeaderScroll, mixinHeaderDropdown],
		components: {
			IconCaret,
			IconHome,
			IconMoon,
			IconProjects,
			IconStyleguide,
		},
		methods: {
			themeToggle() {
				// toggle disabled attribute on #themelight stylesheet
				document.querySelector("#themelight").toggleAttribute("disabled");
				// add/remove .button-active for icon-moon button
				if (document.querySelector("#themelight").disabled == true) {
					document
						.querySelector("#header-theme")
						.classList.add("button-active");
				} else {
					document
						.querySelector("#header-theme")
						.classList.remove("button-active");
				}
			},
		},
	};
</script>
