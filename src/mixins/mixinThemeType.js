// local mixin
// help track what theme is active (useful for swatches in styleguide and home-experience)
export default {
	data() {
		return {
			// old method
			// themeLight: false,
			// new method
			themeCurrent: "themeDark",
		};
	},
	// functions
	methods: {
		// @created()
		// old methode
		// themeUpdate() {
		// 	if (document.querySelector("#themelight").disabled === false) {
		// 		this.themeLight === true;
		// 	} else {
		// 		this.themeLight === false;
		// 	}
		// },
		// new method
		// @created()
		themeUpdate() {
			if (document.querySelector("#themelight").disabled === true) {
				// #themelight in index.html
				this.themeCurrent === "themeDark";
			} else {
				this.themeCurrent === "themeLight";
			}
		},
	},
	// do this at launch
	created() {
		this.themeUpdate();
	},
	// do this if something changes
	watch: {
		// $route() {
		// 	this.themeUpdate();
		// },
	},
};
