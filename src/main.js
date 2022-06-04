import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import PageHome from "./views/pages/PageHome.vue";
import PageProjects from "./views/pages/PageProjects.vue";
import PageStyleguide from "./views/pages/PageStyleguide.vue";
import ModuleHeader from "./views/modules/ModuleHeader.vue";
import ModuleContact from "./views/modules/ModuleContact.vue";
import ModuleFooter from "./views/modules/ModuleFooter.vue";
// import ComponentAlerts from "./views/ComponentAlerts.vue";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: "/",
			name: "home",
			components: {
				default: PageHome,
				header: ModuleHeader,
				contact: ModuleContact,
				footer: ModuleFooter,
				// alerts: ComponentAlerts,
			},
		},
		{
			path: "/projects/:id",
			name: "projects",
			components: {
				default: PageProjects,
				header: ModuleHeader,
				contact: ModuleContact,
				footer: ModuleFooter,
				// alerts: ComponentAlerts,
			},
		},
		{
			path: "/styleguide",
			name: "styleguide",
			components: {
				default: PageStyleguide,
				header: ModuleHeader,
				contact: ModuleContact,
				footer: ModuleFooter,
				// alerts: ComponentAlerts,
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

app.use(router);

router.isReady().then(() => {
	app.mount("#app");
});
