<template>
	<div>
		<h1>角色图鉴</h1>
		<el-breadcrumb separator="/">
			<el-breadcrumb-item >首页</el-breadcrumb-item>
			<el-breadcrumb-item :to="{ path: '/RoleBrowse' }">角色一览</el-breadcrumb-item>
			<el-breadcrumb-item :to="{ path: '/RoleScreen' }">角色筛选表</el-breadcrumb-item>
		</el-breadcrumb>
		<router-view></router-view>
	</div>
</template>

<script>
	export default{
		// 角色图鉴
		name:'RoleManual',
	}
</script>

<style>
</style>
