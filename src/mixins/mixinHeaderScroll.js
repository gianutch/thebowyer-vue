export default {
	data() {
		return {
			// header bind class to li, data changes on scroll
			linkStyle: "link-white",
			// alert data bind to class of alert, data change on scroll
			alertBottom: "display-none",
		};
	},
	methods: {
		// functions
		handleScroll() {
			if (window.scrollY > 100) {
				// header behavior
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
				// alert behavior
				this.alertBottom = "display-block";
			} else {
				// header behavior
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
				// alert behavior
				this.alertBottom = "display-none";
			}
		},
	},
	created() {
		// do this at launch
		window.addEventListener("scroll", this.handleScroll);
	},
	destroyed() {
		// stop this at launch
		window.removeEventListener("scroll", this.handleScroll);
	},
};
