<template>
	<nav id="styleguide-nav">
		<ul class="nav-vertical nav-small">
			<!-- elements -->
			<li>
				<router-link
					to="/styleguide#styleguide-elements"
					class="link link-base"
					activeClass="link-active"
					>Elements</router-link
				>
				<ul>
					<li>
						<router-link
							to="/styleguide#styleguide-elements-atomic"
							class="link link-base"
							activeClass="link-active"
							>Atomic Design</router-link
						>
					</li>
					<li>
						<router-link
							to="/styleguide#styleguide-elements-baseline"
							class="link link-base"
							activeClass="link-active"
							>Baseline</router-link
						>
					</li>
					<li>
						<router-link
							to="/styleguide#styleguide-elements-colors"
							class="link link-base"
							activeClass="link-active"
							>Colors</router-link
						>
					</li>
					<!-- <li>
						<router-link
							to="/styleguide#styleguide-elements-responsive"
							class="link link-base"
							activeClass="link-active"
						>Responsive</router-link>
					</li> -->
					<li>
						<router-link
							to="/styleguide#styleguide-elements-settings"
							class="link link-base"
							activeClass="link-active"
							>Settings</router-link
						>
					</li>
					<li>
						<router-link
							to="/styleguide#styleguide-elements-texts"
							class="link link-base"
							activeClass="link-active"
							>Texts</router-link
						>
					</li>
					<!-- <li>
						<router-link
							to="/styleguide#styleguide-elements-"
							class="link link-base"
							activeClass="link-active"
						>Animations</router-link>
					</li> -->
				</ul>
			</li>
			<!-- /elements -->

			<!-- components web -->
			<li>
				<router-link
					to="/styleguide#styleguide-componentsweb"
					class="link link-base"
					activeClass="link-active"
					>Components Web</router-link
				>
				<ul class="nav-vertical">
					<!-- <li>
						<router-link
							to="/styleguide#styleguide-componentsweb-alerts"
							class="link link-base"
							activeClass="link-active"
						>Alerts</router-link>
					</li> -->
					<li>
						<router-link
							to="/styleguide#styleguide-componentsweb-buttons"
							class="link link-base"
							activeClass="link-active"
							>Buttons</router-link
						>
					</li>
					<li>
						<router-link
							to="/styleguide#styleguide-componentsweb-forms"
							class="link link-base"
							activeClass="link-active"
							>Forms</router-link
						>
					</li>
					<li>
						<router-link
							to="/styleguide#styleguide-componentsweb-icons"
							class="link link-base"
							activeClass="link-active"
							>Icons</router-link
						>
					</li>
					<!-- <li>
						<router-link
							to="/styleguide#styleguide-componentsweb-loaders"
							class="link link-base"
							activeClass="link-active"
						>Loaders</router-link>
					</li> -->
					<!-- <li>
						<router-link
							to="/styleguide#styleguide-componentsweb-modals"
							class="link link-base"
							activeClass="link-active"
						>Modals</router-link>
					</li> -->
					<!-- <li>
						<router-link
							to="/styleguide#styleguide-componentsweb-navigations"
							class="link link-base"
							activeClass="link-active"
						>Navigations</router-link>
					</li> -->
					<li>
						<router-link
							to="/styleguide#styleguide-componentsweb-tooltips"
							class="link link-base"
							activeClass="link-active"
							>Tooltips</router-link
						>
					</li>
				</ul>
			</li>
			<!-- /components web -->

			<!-- brand -->
			<!-- <li>
				<router-link
							to="/styleguide#styleguide-brand"
							class="link link-base" activeClass="link-active">Brand</router-link>
				<ul class="nav-vertical">
					<li>
						<router-link to="/#" class="link link-base" activeClass="link-active">Sub Title</router-link>
					</li>
					<li>
						<router-link to="/#" class="link link-base" activeClass="link-active">Sub Title</router-link>
					</li>
					<li>
						<router-link to="/#" class="link link-base" activeClass="link-active">Sub Title</router-link>
					</li>
					<li>
						<router-link to="/#" class="link link-base" activeClass="link-active">Sub Title</router-link>
					</li>
				</ul>
			</li> -->
			<!-- /brand -->
		</ul>
	</nav>
</template>

<script>
	export default {
		methods: {
			// triggered by created()
			// make nave sticky after 835px scroll
			styleguidenavScrollBehavior() {
				if (window.scrollY > 835) {
					document
						.querySelector("#styleguide-nav")
						.classList.add("nav-sticky");
				} else {
					document
						.querySelector("#styleguide-nav")
						.classList.remove("nav-sticky");
				}
			},
		},
		created() {
			window.addEventListener("scroll", this.styleguidenavScrollBehavior);
		},
		unmount() {
			window.removeEventListener("scroll", this.styleguidenavScrollBehavior);
		},
	};
</script>
