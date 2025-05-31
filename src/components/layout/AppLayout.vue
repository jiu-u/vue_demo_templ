<script setup>
import AppFooter from "./AppFooter.vue"

const isCollapse = ref(false)
const toggleSidebar = () => {
	isCollapse.value = !isCollapse.value
}
</script>

<template>
	<div class="app-layout">
		<header class="app-header">
			<div class="header-left">
				<el-button type="text" @click="toggleSidebar">
					<el-icon>
						<component :is="isCollapse ? 'Expand' : 'Fold'" />
					</el-icon>
				</el-button>
				<h1 class="app-title">Vue Demo</h1>
			</div>
			<div class="header-right">
				<el-dropdown>
					<span class="user-dropdown">
						<el-avatar :size="32" src="https://i.pravatar.cc/150?img=1" />
						<span class="user-name">管理员</span>
					</span>
					<template #dropdown>
						<el-dropdown-menu>
							<el-dropdown-item>个人设置</el-dropdown-item>
							<el-dropdown-item>主题设置</el-dropdown-item>
							<el-dropdown-item divided>退出登录</el-dropdown-item>
						</el-dropdown-menu>
					</template>
				</el-dropdown>
			</div>
		</header>

		<div class="app-container">
			<aside class="app-sidebar" :class="{ 'is-collapsed': isCollapse }">
				<el-menu
					:default-active="$route.path"
					class="sidebar-menu"
					:collapse="isCollapse"
					:collapse-transition="false"
					router>
					<el-menu-item index="/">
						<el-icon><House /></el-icon>
						<template #title>首页</template>
					</el-menu-item>
					<el-menu-item index="/about">
						<el-icon><InfoFilled /></el-icon>
						<template #title>关于</template>
					</el-menu-item>
					<el-sub-menu index="/users">
						<template #title>
							<el-icon><User /></el-icon>
							<span>用户管理</span>
						</template>
						<el-menu-item index="/users">用户列表</el-menu-item>
						<el-menu-item index="/users/1">用户详情</el-menu-item>
					</el-sub-menu>
				</el-menu>
			</aside>

			<main class="app-main">
				<el-scrollbar>
					<div class="page-container">
						<slot></slot>
					</div>
					<AppFooter />
				</el-scrollbar>
			</main>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.app-layout {
	min-height: 100vh;
	display: flex;
	flex-direction: column;
}

.app-header {
	height: 60px;
	background-color: white;
	box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 20px;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 1000;

	.header-left {
		display: flex;
		align-items: center;
		gap: 16px;
	}

	.app-title {
		font-size: 1.2rem;
		margin: 0;
		color: $primary-color;
	}

	.user-dropdown {
		display: flex;
		align-items: center;
		gap: 8px;
		cursor: pointer;
	}

	.user-name {
		font-size: 14px;
	}
}

.app-container {
	margin-top: 60px;
	display: flex;
	flex: 1;
}

.app-sidebar {
	width: 220px;
	background-color: white;
	box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
	transition: width 0.3s;
	position: fixed;
	top: 60px;
	bottom: 0;
	overflow-y: auto;
	overflow-x: hidden;

	&.is-collapsed {
		width: 64px;
	}

	.sidebar-menu {
		border-right: none;
		height: 100%;
	}
}

.app-main {
	flex: 1;
	padding-left: 220px;
	transition: padding-left 0.3s;
	background-color: #f9fafb;
	min-height: calc(100vh - 60px);

	.is-collapsed + & {
		padding-left: 64px;
	}
}
</style>
