import { createRouter, createWebHistory } from "vue-router"
import { routes } from "vue-router/auto-routes"

console.log(routes)

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: routes,
})

// 前置守卫
router.beforeEach((to, from, next) => {
	if (to.meta.title) {
		document.title = `${to.meta.title} - ${import.meta.env.VITE_APP_TITLE}`
	} else {
		document.title = import.meta.env.VITE_APP_TITLE
	}
	if (to.meta.requiresAuth) {
		// 权限校验
		// const store = useStore()
		let userPermissions = []
		// 如果没有登录 length==0 --> go to login
		let needPermissions = to.meta.permission //string or array
		// 判断是否需要权限
		if (!needPermissions) {
			// 没有限制
			next()
			return
		}
		if (typeof needPermissions === "string") {
			needPermissions = [needPermissions]
		}
		if (needPermissions.length > 0) {
			// 判断是否拥有权限
			const pass = needPermissions.every((permission) => userPermissions.includes(permission))
			// go to 403
			// if (!pass) {
			// 	next({
			// 		name: "403",
			// 		params: {
			// 			redirect: to.fullPath,
			// 		},
			// 	})

			// }
		}
	}
	next()
	return
})

// 后置守卫
router.afterEach((to, from) => {
	console.log("后置守卫")
})

export default router
