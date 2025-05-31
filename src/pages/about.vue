<script setup>
const features = [
	{
		title: "Vue 3 Composition API",
		description: "使用Vue 3最新的Composition API开发，提供更好的代码组织和复用能力。",
		icon: "Connection",
	},
	{
		title: "Vite构建",
		description: "采用Vite作为构建工具，提供极速的开发体验和高效的生产构建。",
		icon: "Lightning",
	},
	{
		title: "自动路由",
		description: "基于文件系统的自动路由生成，无需手动配置路由。",
		icon: "Guide",
	},
	{
		title: "Element Plus",
		description: "集成流行的Element Plus组件库，提供丰富的UI组件。",
		icon: "Menu",
	},
	{
		title: "UnoCSS",
		description: "原子化CSS引擎，提供高效的样式开发体验。",
		icon: "Brush",
	},
	{
		title: "Pinia状态管理",
		description: "使用Pinia进行状态管理，支持持久化存储。",
		icon: "DataAnalysis",
	},
]

const team = [
	{
		name: "张三",
		role: "前端开发",
		avatar: "https://i.pravatar.cc/150?img=1",
	},
	{
		name: "李四",
		role: "UI设计师",
		avatar: "https://i.pravatar.cc/150?img=2",
	},
	{
		name: "王五",
		role: "产品经理",
		avatar: "https://i.pravatar.cc/150?img=3",
	},
	{
		name: "赵六",
		role: "后端开发",
		avatar: "https://i.pravatar.cc/150?img=4",
	},
]
</script>

<template>
	<div class="about-page">
		<PageCard title="关于我们" subtitle="Vue Demo Template 项目介绍">
			<div class="about-content">
				<div class="about-header">
					<div class="logo-container">
						<img src="https://vuejs.org/images/logo.png" alt="Vue Logo" class="vue-logo" />
					</div>
					<div class="about-text">
						<h1>Vue Demo Template</h1>
						<p class="description">
							这是一个基于Vue 3 +
							Vite的现代化前端项目模板，预先配置了常用工具和最佳实践，可以直接克隆使用，省去繁琐的配置过程。
						</p>
						<div class="version-badge">
							<span>当前版本：</span>
							<el-tag size="small" type="success">v0.0.0</el-tag>
						</div>
					</div>
				</div>
			</div>
		</PageCard>

		<PageCard title="主要特性" subtitle="这个模板提供了哪些功能">
			<div class="features-grid">
				<div v-for="(feature, index) in features" :key="index" class="feature-card">
					<div class="feature-icon">
						<el-icon><component :is="feature.icon" /></el-icon>
					</div>
					<div class="feature-content">
						<h3>{{ feature.title }}</h3>
						<p>{{ feature.description }}</p>
					</div>
				</div>
			</div>
		</PageCard>

		<PageCard title="团队成员" subtitle="项目贡献者">
			<div class="team-grid">
				<div v-for="(member, index) in team" :key="index" class="team-card">
					<el-avatar :size="80" :src="member.avatar" />
					<h3 class="member-name">{{ member.name }}</h3>
					<div class="member-role">{{ member.role }}</div>
					<div class="member-social">
						<el-button circle type="primary" size="small">
							<el-icon><Message /></el-icon>
						</el-button>
						<el-button circle type="info" size="small">
							<el-icon><Link /></el-icon>
						</el-button>
					</div>
				</div>
			</div>
		</PageCard>

		<PageCard title="联系我们">
			<div class="contact-section">
				<div class="contact-info">
					<p>如果您有任何问题或建议，请随时联系我们。</p>
					<div class="contact-item">
						<el-icon><Message /></el-icon>
						<span>邮箱：contact@example.com</span>
					</div>
					<div class="contact-item">
						<el-icon><Phone /></el-icon>
						<span>电话：+86 123 4567 8910</span>
					</div>
					<div class="contact-item">
						<el-icon><Location /></el-icon>
						<span>地址：北京市朝阳区某某大厦</span>
					</div>
				</div>
				<div class="contact-form">
					<el-form>
						<el-form-item>
							<el-input placeholder="您的姓名" />
						</el-form-item>
						<el-form-item>
							<el-input placeholder="您的邮箱" />
						</el-form-item>
						<el-form-item>
							<el-input type="textarea" rows="4" placeholder="您的留言" />
						</el-form-item>
						<el-form-item>
							<el-button type="primary">发送留言</el-button>
						</el-form-item>
					</el-form>
				</div>
			</div>
		</PageCard>
	</div>
</template>

<style lang="scss" scoped>
.about-page {
	padding: 1rem 0;
}

.about-header {
	display: flex;
	align-items: center;
	gap: 2rem;
	margin-bottom: 2rem;

	@media (max-width: 768px) {
		flex-direction: column;
		text-align: center;
	}
}

.logo-container {
	flex-shrink: 0;
}

.vue-logo {
	width: 120px;
	height: auto;
}

.about-text {
	h1 {
		color: $primary-color;
		font-size: 2rem;
		margin-bottom: 1rem;
	}

	.description {
		font-size: 1.1rem;
		color: $text-color;
		line-height: 1.6;
		margin-bottom: 1rem;
	}

	.version-badge {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		color: #6b7280;
	}
}

.features-grid {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	gap: 1.5rem;
}

.feature-card {
	display: flex;
	background-color: #f9fafb;
	border-radius: 8px;
	padding: 1.5rem;
	transition:
		transform 0.2s ease,
		box-shadow 0.2s ease;

	&:hover {
		transform: translateY(-3px);
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		background-color: white;
	}
}

.feature-icon {
	flex-shrink: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 48px;
	height: 48px;
	background-color: rgba($primary-color, 0.1);
	border-radius: 8px;
	margin-right: 1rem;

	:deep(.el-icon) {
		font-size: 24px;
		color: $primary-color;
	}
}

.feature-content {
	h3 {
		margin: 0 0 0.5rem;
		color: $secondary-color;
	}

	p {
		margin: 0;
		color: #6b7280;
		font-size: 0.9rem;
		line-height: 1.5;
	}
}

.team-grid {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	gap: 1.5rem;
}

.team-card {
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	padding: 1.5rem;
	background-color: #f9fafb;
	border-radius: 8px;
	transition:
		transform 0.2s ease,
		box-shadow 0.2s ease;

	&:hover {
		transform: translateY(-3px);
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		background-color: white;
	}
}

.member-name {
	margin: 1rem 0 0.25rem;
	color: $secondary-color;
}

.member-role {
	font-size: 0.875rem;
	color: #6b7280;
	margin-bottom: 1rem;
}

.member-social {
	display: flex;
	gap: 0.5rem;
}

.contact-section {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 2rem;

	@media (max-width: 768px) {
		grid-template-columns: 1fr;
	}
}

.contact-info {
	color: $text-color;

	p {
		margin-top: 0;
		margin-bottom: 1.5rem;
	}
}

.contact-item {
	display: flex;
	align-items: center;
	margin-bottom: 1rem;

	:deep(.el-icon) {
		margin-right: 0.75rem;
		color: $primary-color;
	}
}
</style>
