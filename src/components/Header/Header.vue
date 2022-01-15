<template>
	<div>
		<HeaderTop/>
		<HeaderMenu/>
	</div>
</template>

<script>
	import HeaderMenu from './HeaderMenu.vue'
	import HeaderTop from './HeaderTop.vue'
	
	export default {
		name:'Header',
		components:{
			HeaderTop,
			HeaderMenu
		},
		methods: {
			
		}
	}
</script>

<style>
</style>
