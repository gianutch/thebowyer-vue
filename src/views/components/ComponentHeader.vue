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
							<!-- menu icon for phone -->
							<icon-home
								class="icon icon-big display-phone display-tablet"
							></icon-home>
							<!-- menu text for desktop -->
							<span class="display-laptop display-desktop">Home</span>
						</router-link>
					</li>

					<!-- menu projects -->
					<li
						class="nav-dropdown"
						aria-haspopup="true"
						v-on:mouseover="headerDropdownOpen()"
						v-on:mouseleave="headerDropdownClose()"
					>
						<router-link
							to="/projects"
							class="link link-dropdown"
							v-bind:class="linkStyle"
							activeClass="link-active"
						>
							<!-- menu icon for phone -->
							<icon-projects
								class="icon icon-big display-phone display-tablet"
							></icon-projects>
							<icon-caret
								class="icon icon-mini display-phone display-tablet"
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
									v-on:click="headerDropdownClose()"
								>
									<router-link
										v-bind:to="'/projects/' + project.id"
										class="link link-base"
										activeClass="link-active"
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
							<!-- menu icon for phone -->
							<icon-styleguide
								class="icon icon-big display-phone display-tablet"
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
							v-on:click="headerThemeToggle"
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
	import IconCaret from "/src/views/icons/IconCaret.vue";
	import IconHome from "/src/views/icons/IconHome.vue";
	import IconMoon from "/src/views/icons/IconMoon.vue";
	import IconProjects from "/src/views/icons/IconProjects.vue";
	import IconStyleguide from "/src/views/icons/IconStyleguide.vue";

	export default {
		data() {
			return {
				// header bind class to li, data changes on scroll
				linkStyle: "link-white",
			};
		},
		components: {
			IconCaret,
			IconHome,
			IconMoon,
			IconProjects,
			IconStyleguide,
		},
		// functions
		methods: {
			// @created()
			headerScrollBehavior() {
				if (window.scrollY > 100) {
					document
						.querySelector("#header")
						.classList.add("background-theme--opaque");
					document
						.querySelector("#header")
						.classList.add("setting-shadow--soft");
					document
						.querySelector("#header-line")
						.classList.remove("header-line");
					document
						.querySelector("#header-theme")
						.classList.remove("button-special--header");
					this.linkStyle = "link-base";
				} else {
					document
						.querySelector("#header")
						.classList.remove("background-theme--opaque");
					document
						.querySelector("#header")
						.classList.remove("setting-shadow--soft");
					document
						.querySelector("#header-line")
						.classList.add("header-line");
					document
						.querySelector("#header-theme")
						.classList.add("button-special--header");
					this.linkStyle = "link-white";
				}
			},
			// on:mouseover
			headerDropdownOpen() {
				document.querySelector("#dropdown").style.display = "block";
			},
			// on:mouseleave
			headerDropdownClose() {
				document.querySelector("#dropdown").style.display = "none";
			},
			// on:click
			headerThemeToggle() {
				// toggle disabled attribute on #themelight stylesheet
				document.querySelector("#themelight").toggleAttribute("disabled");
				// add/remove .button-active for icon-moon button
				if (document.querySelector("#themelight").disabled === true) {
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
		// do this at launch
		created() {
			window.addEventListener("scroll", this.headerScrollBehavior);
		},
		// stop this at launch
		unmount() {
			window.removeEventListener("scroll", this.headerScrollBehavior);
		},
	};
</script>
