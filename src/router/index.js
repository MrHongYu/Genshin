// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
import RoleManual from '../pages/RoleManual'
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
			component:RoleManual
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
