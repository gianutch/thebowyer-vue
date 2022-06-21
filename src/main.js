import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "/src/App.vue";
import PageHome from "/src/views/pages/PageHome.vue";
import PageProjects from "/src/views/pages/PageProjects.vue";
import PageStyleguide from "/src/views/pages/PageStyleguide.vue";
import ComponentHeader from "/src/views/components/ComponentHeader.vue";
import ComponentFooter from "/src/views/components/ComponentFooter.vue";
// import ComponentAlerts from "/src/views/components/ComponentAlerts.vue";
import ModuleContact from "/src/views/modules/ModuleContact.vue";
import mixinData from "/src/mixins/mixinData.js";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: "/",
			name: "home",
			components: {
				default: PageHome,
				header: ComponentHeader,
				footer: ComponentFooter,
				// alerts: ComponentAlerts,
				contact: ModuleContact,
			},
		},
		{
			path: "/projects/:projectId",
			name: "projects",
			components: {
				default: PageProjects,
				header: ComponentHeader,
				footer: ComponentFooter,
				// alerts: ComponentAlerts,
				contact: ModuleContact,
			},
		},
		{
			path: "/styleguide",
			name: "styleguide",
			components: {
				default: PageStyleguide,
				header: ComponentHeader,
				footer: ComponentFooter,
				// alerts: ComponentAlerts,
				contact: ModuleContact,
			},
		},
		{
			path: "/:notFound(.*)",
			redirect: { name: "home" },
		},
	],
	linkAciveClass: "active", //set the native vue-router class '.router-link-active' to just '.active'
	scrollBehavior(to, from, savedPosition) {
		console.log(to, from, savedPosition);
		// if saved position exist, go back where you were
		if (savedPosition) {
			return savedPosition;
		} else {
			// start at the top
			return { left: 0, top: 0 };
		}
	},
});

const app = createApp(App);

app.mixin(mixinData);
app.use(router);

router.isReady().then(() => {
	app.mount("#app");
});
