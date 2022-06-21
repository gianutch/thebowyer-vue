export default {
	data() {
		return {
			// header bind class to li, data changes on scroll
			linkStyle: "link-white",
		};
	},
	methods: {
		// triggered by created()
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
				document.querySelector("#header-line").classList.add("header-line");
				document
					.querySelector("#header-theme")
					.classList.add("button-special--header");
				this.linkStyle = "link-white";
			}
		},
	},
	created() {
		// do this at launch
		window.addEventListener("scroll", this.headerScrollBehavior);
	},
	destroyed() {
		// stop this at launch
		window.removeEventListener("scroll", this.headerScrollBehavior);
	},
};
