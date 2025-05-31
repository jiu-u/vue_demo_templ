// Layout Components
import AppLayout from "./layout/AppLayout.vue"
import AppFooter from "./layout/AppFooter.vue"

// UI Components
import PageCard from "./ui/PageCard.vue"

// Export components
export { AppLayout, AppFooter, PageCard }

// Register components globally if needed
export default {
	install(app) {
		app.component("AppLayout", AppLayout)
		app.component("AppFooter", AppFooter)
		app.component("PageCard", PageCard)
	},
}
