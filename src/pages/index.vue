<script setup>
const stats = [
	{ label: "用户数量", value: "1,234", icon: "User", color: "#3498db" },
	{ label: "文章数量", value: "856", icon: "Document", color: "#2ecc71" },
	{ label: "评论数量", value: "3,421", icon: "ChatDotRound", color: "#e74c3c" },
	{ label: "访问量", value: "15,492", icon: "View", color: "#f39c12" },
]

const chartData = ref({
	labels: ["一月", "二月", "三月", "四月", "五月", "六月"],
	datasets: [
		{
			label: "访问量",
			data: [65, 59, 80, 81, 56, 55],
			backgroundColor: "rgba(66, 185, 131, 0.2)",
			borderColor: "rgba(66, 185, 131, 1)",
			borderWidth: 2,
		},
	],
})

const recentActivities = [
	{ user: "张三", action: "发布了新文章", target: "《Vue 3 最佳实践》", time: "10分钟前" },
	{ user: "李四", action: "评论了文章", target: "《前端性能优化》", time: "30分钟前" },
	{ user: "王五", action: "更新了个人资料", target: "", time: "1小时前" },
	{ user: "赵六", action: "点赞了文章", target: "《响应式设计指南》", time: "2小时前" },
]
</script>

<template>
	<div class="home-page">
		<PageCard title="仪表盘" subtitle="欢迎回来，管理员">
			<div class="stats-grid">
				<div
					v-for="(stat, index) in stats"
					:key="index"
					class="stat-card"
					:style="{ '--accent-color': stat.color }">
					<div class="stat-icon">
						<el-icon><component :is="stat.icon" /></el-icon>
					</div>
					<div class="stat-info">
						<div class="stat-value">{{ stat.value }}</div>
						<div class="stat-label">{{ stat.label }}</div>
					</div>
				</div>
			</div>
		</PageCard>

		<div class="dashboard-row">
			<PageCard class="chart-card" title="数据趋势" subtitle="过去6个月的访问统计">
				<div class="chart-container">
					<!-- Chart placeholder - in a real app, use a chart library like Chart.js -->
					<div class="chart-placeholder">
						<div
							v-for="(data, index) in chartData.datasets[0].data"
							:key="index"
							class="chart-bar"
							:style="{
								height: `${data}px`,
								backgroundColor: chartData.datasets[0].backgroundColor,
								borderColor: chartData.datasets[0].borderColor,
							}"></div>
					</div>
					<div class="chart-labels">
						<div v-for="(label, index) in chartData.labels" :key="index" class="chart-label">
							{{ label }}
						</div>
					</div>
				</div>
			</PageCard>

			<PageCard class="activity-card" title="最近活动" subtitle="用户动态">
				<ul class="activity-list">
					<li v-for="(activity, index) in recentActivities" :key="index" class="activity-item">
						<div class="activity-content">
							<strong>{{ activity.user }}</strong> {{ activity.action }}
							<span v-if="activity.target">{{ activity.target }}</span>
						</div>
						<div class="activity-time">{{ activity.time }}</div>
					</li>
				</ul>
			</PageCard>
		</div>

		<PageCard title="快速操作">
			<div class="quick-actions">
				<el-button type="primary">
					<el-icon><Plus /></el-icon>
					新建文章
				</el-button>
				<el-button type="success">
					<el-icon><User /></el-icon>
					添加用户
				</el-button>
				<el-button type="warning">
					<el-icon><Setting /></el-icon>
					系统设置
				</el-button>
				<el-button type="info">
					<el-icon><Download /></el-icon>
					导出数据
				</el-button>
			</div>
		</PageCard>
	</div>
</template>

<style lang="scss" scoped>
.home-page {
	padding: 1rem 0;
}

.stats-grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
	gap: 1.5rem;
}

.stat-card {
	display: flex;
	align-items: center;
	padding: 1.25rem;
	background-color: white;
	border-radius: 8px;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
	border-left: 4px solid var(--accent-color, $primary-color);
	transition:
		transform 0.2s ease,
		box-shadow 0.2s ease;

	&:hover {
		transform: translateY(-2px);
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	}
}

.stat-icon {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 48px;
	height: 48px;
	border-radius: 8px;
	background-color: rgba(var(--accent-color, $primary-color), 0.1);
	margin-right: 1rem;

	:deep(.el-icon) {
		font-size: 24px;
		color: var(--accent-color, $primary-color);
	}
}

.stat-info {
	flex: 1;
}

.stat-value {
	font-size: 1.5rem;
	font-weight: 600;
	color: $secondary-color;
	line-height: 1.2;
}

.stat-label {
	font-size: 0.875rem;
	color: #6b7280;
}

.dashboard-row {
	display: grid;
	grid-template-columns: 1.5fr 1fr;
	gap: 1.5rem;
	margin-bottom: 1.5rem;

	@media (max-width: 1024px) {
		grid-template-columns: 1fr;
	}
}

.chart-container {
	height: 300px;
	display: flex;
	flex-direction: column;
}

.chart-placeholder {
	flex: 1;
	display: flex;
	align-items: flex-end;
	justify-content: space-around;
	padding: 1rem;
	background-color: #f9fafb;
	border-radius: 8px;
}

.chart-bar {
	width: 40px;
	border-radius: 4px 4px 0 0;
	transition: height 0.3s ease;
	border: 1px solid;
}

.chart-labels {
	display: flex;
	justify-content: space-around;
	margin-top: 0.5rem;
}

.chart-label {
	font-size: 0.75rem;
	color: #6b7280;
	text-align: center;
}

.activity-list {
	list-style: none;
	padding: 0;
	margin: 0;
}

.activity-item {
	padding: 0.75rem 0;
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid #f3f4f6;

	&:last-child {
		border-bottom: none;
	}
}

.activity-content {
	flex: 1;
	margin-right: 1rem;

	strong {
		color: $secondary-color;
	}
}

.activity-time {
	font-size: 0.75rem;
	color: #6b7280;
}

.quick-actions {
	display: flex;
	flex-wrap: wrap;
	gap: 1rem;
}
</style>
