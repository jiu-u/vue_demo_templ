<template>
	<footer class="app-footer">
		<div class="footer-content">
			<p class="copyright">
				&copy; {{ new Date().getFullYear() }} Vue Demo Template. All rights reserved.
			</p>
			<div class="footer-links">
				<a href="https://vuejs.org" target="_blank">Vue.js</a>
				<span class="separator">|</span>
				<a href="https://vite.dev" target="_blank">Vite</a>
				<span class="separator">|</span>
				<a href="https://github.com" target="_blank">GitHub</a>
			</div>
		</div>
	</footer>
</template>

<style lang="scss" scoped>
.app-footer {
	background-color: white;
	border-top: 1px solid #eaecef;
	padding: 1.5rem 0;
	margin-top: 2rem;
}

.footer-content {
	max-width: 1200px;
	margin: 0 auto;
	padding: 0 1.5rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	gap: 1rem;
}

.copyright {
	margin: 0;
	color: #6b7280;
	font-size: 0.875rem;
}

.footer-links {
	display: flex;
	gap: 0.5rem;
	align-items: center;

	a {
		color: $primary-color;
		font-size: 0.875rem;

		&:hover {
			text-decoration: underline;
		}
	}

	.separator {
		color: #d1d5db;
	}
}

@media (max-width: 640px) {
	.footer-content {
		flex-direction: column;
		text-align: center;
	}
}
</style>
