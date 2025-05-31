<script setup>
defineProps({
	title: {
		type: String,
		default: "",
	},
	subtitle: {
		type: String,
		default: "",
	},
	noPadding: {
		type: Boolean,
		default: false,
	},
})
</script>

<template>
	<div class="page-card" :class="{ 'no-padding': noPadding }">
		<div v-if="title || subtitle" class="page-card-header">
			<div class="page-card-titles">
				<h2 v-if="title" class="page-card-title">{{ title }}</h2>
				<p v-if="subtitle" class="page-card-subtitle">{{ subtitle }}</p>
			</div>
			<div class="page-card-actions">
				<slot name="actions"></slot>
			</div>
		</div>
		<div class="page-card-content">
			<slot></slot>
		</div>
		<div v-if="$slots.footer" class="page-card-footer">
			<slot name="footer"></slot>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.page-card {
	background-color: white;
	border-radius: 8px;
	box-shadow:
		0 1px 3px 0 rgba(0, 0, 0, 0.1),
		0 1px 2px 0 rgba(0, 0, 0, 0.06);
	margin-bottom: 1.5rem;
	overflow: hidden;

	&.no-padding {
		.page-card-content {
			padding: 0;
		}
	}
}

.page-card-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1.25rem 1.5rem;
	border-bottom: 1px solid #f3f4f6;
}

.page-card-titles {
	flex: 1;
}

.page-card-title {
	font-size: 1.25rem;
	color: $secondary-color;
	margin: 0;
}

.page-card-subtitle {
	margin: 0.25rem 0 0;
	font-size: 0.875rem;
	color: #6b7280;
}

.page-card-actions {
	display: flex;
	gap: 0.5rem;
}

.page-card-content {
	padding: 1.5rem;
}

.page-card-footer {
	padding: 1rem 1.5rem;
	background-color: #f9fafb;
	border-top: 1px solid #f3f4f6;
}
</style>
