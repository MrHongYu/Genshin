<template>
	<div>
		<el-menu 
		router
  		class="el-menu-demo"
		mode="horizontal"
		background-color="#545c64"
		text-color="#fff"
		active-text-color="#ffd04b">
			<el-menu-item index="1">首页</el-menu-item>
			<el-submenu index="2">
				<template slot="title">图鉴</template>
				<el-menu-item v-for="item in list" :key="item.id" :index="item.router">{{item.name}}</el-menu-item>
			</el-submenu>
			<el-submenu index="3">
				<template slot="title">工具</template>
				<el-menu-item v-for="item2 in list2" :key="item2.id" :index="item2.router">{{item2.name}}</el-menu-item>
			</el-submenu>
			<el-menu-item index="4"><a href="https://wiki.biligame.com/ys/%E9%A6%96%E9%A1%B5" target="_blank">其他</a></el-menu-item>
			<HeaderSearch/>
		</el-menu>
		<el-container>
			<el-main>
				<router-view></router-view>
			</el-main>
		</el-container>
		
		
	</div>
</template>

<script>
	import HeaderSearch from './HeaderSearch.vue'
	export default {
		name:'HeaderMenu',
		components:{
			HeaderSearch,
		},
		data() {
			return {
				list:[{
					name: '角色图鉴',
					router: '/RoleManual'
				},{
					name: '怪物图鉴',
					router: '/MonsterManual'
				},{
					name: '材料图鉴',
					router: '/MaterialManual'
				}],
				list2:[{
					name: '伤害计算器',
					router: '/DamageCalculator'
				},{
					name: '抽卡模拟器',
					router: '/CardSimulator'
				}]
			};
		}
	}
</script>

<style>
</style>
