import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import PageHome from "./views/pages/PageHome.vue";
import PageProjects from "./views/pages/PageProjects.vue";
import PageStyleguide from "./views/pages/PageStyleguide.vue";
import LayoutHeader from "./views/layouts/LayoutHeader.vue";
import LayoutContact from "./views/layouts/LayoutContact.vue";
import LayoutFooter from "./views/layouts/LayoutFooter.vue";
// import ComponentAlerts from "./views/ComponentAlerts.vue";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: "/",
			name: "home",
			components: {
				default: PageHome,
				header: LayoutHeader,
				contact: LayoutContact,
				footer: LayoutFooter,
				// alerts: ComponentAlerts,
			},
		},
		{
			path: "/projects/:id",
			name: "projects",
			components: {
				default: PageProjects,
				header: LayoutHeader,
				contact: LayoutContact,

				footer: LayoutFooter,
				// alerts: ComponentAlerts,
			},
		},
		{
			path: "/styleguide",
			name: "styleguide",
			components: {
				default: PageStyleguide,
				header: LayoutHeader,
				contact: LayoutContact,

				footer: LayoutFooter,
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