<script setup lang="tsx">
import { definePage } from "unplugin-vue-router/runtime"

definePage({
	meta: {
		requiresAuth: true,
		layout: false,
	},
})
const route = useRoute()
const { id } = route.params
</script>

<template>
	<div>
		<h1>this is users page {{ id }}</h1>
	</div>
</template>
