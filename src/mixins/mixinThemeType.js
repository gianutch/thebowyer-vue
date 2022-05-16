// help track what theme is active
// useful for swatches in styleguide and home-experience
export default {
	data() {
		return {
			themeLight: false,
		};
	},
	methods: {
		themeCurrent() {
			if (document.querySelector("#themelight").disabled == false) {
				this.themeLight = true;
			} else {
				this.themeLight = false;
			}
		},
	},
	created() {
		// do this at launch
		// check when loading
		this.themeCurrent();
		// check when clicking
		document
			.querySelector("#header-theme")
			.addEventListener("click", this.themeCurrent);
	},
};
