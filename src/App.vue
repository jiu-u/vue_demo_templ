<script setup>
import HelloWorld from "./components/HelloWorld.vue"

const count = ref(0)
const name = reactive({
	first: "John",
	last: "Doe",
})
onMounted(() => {
	console.log(count.value)
	console.log(name)
})
</script>

<template>
	<div>
		<ul>
			<li>
				<RouterLink to="/">home</RouterLink>
			</li>

			<li>
				<RouterLink to="/about">about</RouterLink>
			</li>

			<li>
				<RouterLink to="/users">users</RouterLink>
			</li>
			<li>
				<RouterLink to="/users/1">users/1</RouterLink>
			</li>
		</ul>
		<HcButton />
	</div>

	<div class="flex-center bg-green-300 rounded-lg h-32 w-[120px]">
		<HcButton>click me</HcButton>
	</div>

	<RouterView />
</template>

<style scoped>
header {
	line-height: 1.5;
	max-height: 100vh;
}

.logo {
	display: block;
	margin: 0 auto 2rem;
}

nav {
	width: 100%;
	font-size: 12px;
	text-align: center;
	margin-top: 2rem;
}

nav a.router-link-exact-active {
	color: var(--color-text);
}

nav a.router-link-exact-active:hover {
	background-color: transparent;
}

nav a {
	display: inline-block;
	padding: 0 1rem;
	border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
	border: 0;
}

@media (min-width: 1024px) {
	header {
		display: flex;
		place-items: center;
		padding-right: calc(var(--section-gap) / 2);
	}

	.logo {
		margin: 0 2rem 0 0;
	}

	header .wrapper {
		display: flex;
		place-items: flex-start;
		flex-wrap: wrap;
	}

	nav {
		text-align: left;
		margin-left: -1rem;
		font-size: 1rem;

		padding: 1rem 0;
		margin-top: 1rem;
	}
}
</style>
