<script setup>
const tableData = ref([
	{
		id: 1,
		name: "张三",
		email: "zhangsan@example.com",
		role: "管理员",
		status: 1,
		lastLogin: "2023-09-15 14:30:22",
		avatar: "https://i.pravatar.cc/150?img=1",
	},
	{
		id: 2,
		name: "李四",
		email: "lisi@example.com",
		role: "编辑",
		status: 1,
		lastLogin: "2023-09-14 09:15:36",
		avatar: "https://i.pravatar.cc/150?img=2",
	},
	{
		id: 3,
		name: "王五",
		email: "wangwu@example.com",
		role: "用户",
		status: 0,
		lastLogin: "2023-09-10 18:45:12",
		avatar: "https://i.pravatar.cc/150?img=3",
	},
	{
		id: 4,
		name: "赵六",
		email: "zhaoliu@example.com",
		role: "用户",
		status: 1,
		lastLogin: "2023-09-13 11:22:45",
		avatar: "https://i.pravatar.cc/150?img=4",
	},
	{
		id: 5,
		name: "钱七",
		email: "qianqi@example.com",
		role: "编辑",
		status: 1,
		lastLogin: "2023-09-12 16:08:33",
		avatar: "https://i.pravatar.cc/150?img=5",
	},
])

const search = ref("")
const dialogVisible = ref(false)
const formData = ref({
	name: "",
	email: "",
	role: "用户",
	status: 1,
})

const statusOptions = [
	{ value: 1, label: "激活" },
	{ value: 0, label: "禁用" },
]

const roleOptions = [
	{ value: "管理员", label: "管理员" },
	{ value: "编辑", label: "编辑" },
	{ value: "用户", label: "用户" },
]

const handleEdit = (index, row) => {
	formData.value = { ...row }
	dialogVisible.value = true
}

const handleDelete = (index, row) => {
	ElMessageBox.confirm(`确定要删除用户 ${row.name} 吗?`, "警告", {
		confirmButtonText: "确定",
		cancelButtonText: "取消",
		type: "warning",
	})
		.then(() => {
			tableData.value.splice(index, 1)
			ElMessage({
				type: "success",
				message: "删除成功",
			})
		})
		.catch(() => {
			ElMessage({
				type: "info",
				message: "已取消删除",
			})
		})
}

const handleCreate = () => {
	formData.value = {
		name: "",
		email: "",
		role: "用户",
		status: 1,
	}
	dialogVisible.value = true
}

const submitForm = () => {
	if (!formData.value.name || !formData.value.email) {
		ElMessage.error("请填写完整信息")
		return
	}

	if (formData.value.id) {
		// 编辑现有用户
		const index = tableData.value.findIndex((item) => item.id === formData.value.id)
		if (index !== -1) {
			tableData.value[index] = { ...formData.value }
		}
	} else {
		// 创建新用户
		const newUser = {
			...formData.value,
			id: Date.now(),
			lastLogin: "-",
			avatar: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 10) + 1}`,
		}
		tableData.value.push(newUser)
	}

	dialogVisible.value = false
	ElMessage({
		type: "success",
		message: formData.value.id ? "用户更新成功" : "用户创建成功",
	})
}

const filteredData = computed(() => {
	if (!search.value) return tableData.value

	return tableData.value.filter((data) => {
		return Object.keys(data).some((key) => {
			if (typeof data[key] === "string") {
				return data[key].toLowerCase().includes(search.value.toLowerCase())
			}
			return false
		})
	})
})
</script>

<template>
	<div class="users-page">
		<PageCard title="用户管理" subtitle="管理系统用户">
			<template #actions>
				<el-button type="primary" @click="handleCreate">
					<el-icon><Plus /></el-icon>
					添加用户
				</el-button>
			</template>

			<div class="table-actions">
				<el-input v-model="search" placeholder="搜索用户..." class="search-input">
					<template #prefix>
						<el-icon><Search /></el-icon>
					</template>
				</el-input>
			</div>

			<el-table :data="filteredData" style="width: 100%" border stripe>
				<el-table-column type="index" width="50" />

				<el-table-column label="用户" min-width="200">
					<template #default="{ row }">
						<div class="user-info">
							<el-avatar :size="40" :src="row.avatar" />
							<div>
								<div class="user-name">{{ row.name }}</div>
								<div class="user-email">{{ row.email }}</div>
							</div>
						</div>
					</template>
				</el-table-column>

				<el-table-column prop="role" label="角色" width="120" />

				<el-table-column prop="status" label="状态" width="100">
					<template #default="{ row }">
						<el-tag :type="row.status ? 'success' : 'danger'">
							{{ row.status ? "激活" : "禁用" }}
						</el-tag>
					</template>
				</el-table-column>

				<el-table-column prop="lastLogin" label="最后登录" min-width="160" />

				<el-table-column label="操作" width="150" fixed="right">
					<template #default="scope">
						<el-button size="small" type="primary" @click="handleEdit(scope.$index, scope.row)">
							编辑
						</el-button>
						<el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">
							删除
						</el-button>
					</template>
				</el-table-column>
			</el-table>

			<template #footer>
				<div class="table-footer">
					<div class="table-info">共 {{ filteredData.length }} 条记录</div>
					<el-pagination
						background
						layout="prev, pager, next"
						:total="filteredData.length"
						:page-size="10" />
				</div>
			</template>
		</PageCard>

		<el-dialog v-model="dialogVisible" :title="formData.id ? '编辑用户' : '新建用户'" width="500px">
			<el-form :model="formData" label-width="80px">
				<el-form-item label="姓名" required>
					<el-input v-model="formData.name" placeholder="请输入姓名" />
				</el-form-item>

				<el-form-item label="邮箱" required>
					<el-input v-model="formData.email" placeholder="请输入邮箱" />
				</el-form-item>

				<el-form-item label="角色">
					<el-select v-model="formData.role" style="width: 100%">
						<el-option
							v-for="item in roleOptions"
							:key="item.value"
							:label="item.label"
							:value="item.value" />
					</el-select>
				</el-form-item>

				<el-form-item label="状态">
					<el-select v-model="formData.status" style="width: 100%">
						<el-option
							v-for="item in statusOptions"
							:key="item.value"
							:label="item.label"
							:value="item.value" />
					</el-select>
				</el-form-item>
			</el-form>

			<template #footer>
				<div class="dialog-footer">
					<el-button @click="dialogVisible = false">取消</el-button>
					<el-button type="primary" @click="submitForm">
						{{ formData.id ? "更新" : "创建" }}
					</el-button>
				</div>
			</template>
		</el-dialog>
	</div>
</template>

<style lang="scss" scoped>
.users-page {
	padding: 1rem 0;
}

.table-actions {
	margin-bottom: 1rem;
	display: flex;
	justify-content: space-between;
}

.search-input {
	width: 300px;
}

.user-info {
	display: flex;
	align-items: center;
	gap: 0.75rem;
}

.user-name {
	font-weight: 500;
	color: $secondary-color;
}

.user-email {
	font-size: 0.75rem;
	color: #6b7280;
}

.table-footer {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.table-info {
	color: #6b7280;
	font-size: 0.875rem;
}

.dialog-footer {
	display: flex;
	justify-content: flex-end;
	gap: 0.5rem;
}
</style>
