// help track what theme is active
// useful for swatches in styleguide and home-experience
export default {
	data() {
		return {
			// themeLight: false,
			themeCurrent: "themeDark",
		};
	},
	methods: {
		//triggered by created()
		// themeUpdate() {
		// 	if (document.querySelector("#themelight").disabled === false) {
		// 		this.themeLight === true;
		// 	} else {
		// 		this.themeLight === false;
		// 	}
		// },
		themeUpdate() {
			if (document.querySelector("#themelight").disabled === true) {
				this.themeCurrent === "themeDark";
			} else {
				this.themeCurrent === "themeLight";
			}
		},
	},
	created() {
		// do this at launch
		this.themeUpdate();
	},
	watch: {
		// do this if something changes
		// $route() {
		// 	this.themeUpdate();
		// },
	},
};
