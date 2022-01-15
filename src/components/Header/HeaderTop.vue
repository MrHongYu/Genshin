<template>
	<div class="top">
		<el-image class="url_logo" :src="url_logo"></el-image>
		<div class="mymsg">
			<el-button circle class="unlogin" ></el-button>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				url_logo: require("../../assets/logo_ys.png"),
				unlogin:require("../../assets/unlogin.png")
			}
		}
	}
</script>

<style scoped>
	.top{
		height: 100px;
		text-align: center;
	}
	.unlogin{
		border-width: 5px;
		width: 60px;
		height: 60px;
		margin-top: 15px;
		margin-left: 400px;
		background-image: url(../../assets/unlogin.png);
	}
	.mymsg{
		width: 50%;
		float: right;
		line-height: 100px;
		/* text-align: center; */
	}
	.url_logo{
		width: 400px;
		height: 100%;
		float: left;
	}
</style>
