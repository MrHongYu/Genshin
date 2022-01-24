// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
import RoleManual from '../pages/Role/RoleManual'
import RoleBrowse from '../pages/Role/RoleBrowse'
import RoleScreen from '../pages/Role/RoleScreen'
import MonsterManual from '../pages/MonsterManual'
import MaterialManual from '../pages/MaterialManual'
import DamageCalculator from '../pages/DamageCalculator'
import CardSimulator from '../pages/CardSimulator'


//创建并暴露一个路由器
export default new VueRouter({
	mode: 'history', // require service support
	routes:[
		{
			//角色图鉴
			name:RoleManual,
			path:'/RoleManual',
			component:RoleManual,
			children:[
				{
					//角色浏览
					name:RoleBrowse,
					path:'/RoleBrowse',
					component:RoleBrowse,
				},
				{
					//角色筛选表
					name:RoleScreen,
					path:'/RoleScreen',
					component:RoleScreen,
				}
			]
		},
		{
			//怪物图鉴
			name:MonsterManual,
			path:'/MonsterManual',
			component:MonsterManual
		},
		{
			//材料图鉴
			name:MaterialManual,
			path:'/MaterialManual',
			component:MaterialManual
		},
		{
			//伤害计算器
			name:'DamageCalculator',
			path:'/DamageCalculator',
			component:DamageCalculator
		},
		{
			//抽卡模拟器
			name:'CardSimulator',
			path:'/CardSimulator',
			component:CardSimulator
		}
	]
})



//防止重复点击导致控制台报错
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (to){
	return VueRouterPush.call(this,to).catch(err => err)
}