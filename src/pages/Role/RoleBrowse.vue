<template>
	<div>
		<ul>
			<li class="active bili-list-style"><span class="tab-panel">全</span></li>
			<li class="bili-list-style"><span class="tab-panel">火</span></li>
			<li class="bili-list-style"><span class="tab-panel">水</span></li>
			<li class="bili-list-style"><span class="tab-panel">风</span></li>
			<li class="bili-list-style"><span class="tab-panel">雷</span></li>
			<li class="bili-list-style"><span class="tab-panel">冰</span></li>
			<li class="bili-list-style"><span class="tab-panel">岩</span></li>
			<li class="bili-list-style"><span class="tab-panel">旅行者</span></li>
		</ul>
		
		<div class="Frame">
			<div class="FrameItem" v-for="(item,index) in ysHeadList" :key="index">
				<el-image class="ysHead" :src="item.img"></el-image>
				<el-image class="HeadFrame" :src="HeadFrame"></el-image>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		// 角色浏览
		name:'RoleBrowse',
		data() {
			return {
				ysHeadList:[
					{img:require('../../assets/ys_head/琴头像.png')},
					{img:require('../../assets/ys_head/琴头像.png')},
					{img:require('../../assets/ys_head/琴头像.png')},
					{img:require('../../assets/ys_head/琴头像.png')},
					{img:require('../../assets/ys_head/琴头像.png')},
					{img:require('../../assets/ys_head/琴头像.png')},
					{img:require('../../assets/ys_head/琴头像.png')},
					{img:require('../../assets/ys_head/琴头像.png')},
					{img:require('../../assets/ys_head/琴头像.png')},
					{img:require('../../assets/ys_head/琴头像.png')},
					{img:require('../../assets/ys_head/琴头像.png')},
					{img:require('../../assets/ys_head/琴头像.png')},
					{img:require('../../assets/ys_head/琴头像.png')},
					{img:require('../../assets/ys_head/琴头像.png')},
					{img:require('../../assets/ys_head/琴头像.png')},
					{img:require('../../assets/ys_head/琴头像.png')},
					{img:require('../../assets/ys_head/琴头像.png')},
					{img:require('../../assets/ys_head/琴头像.png')},
					{img:require('../../assets/ys_head/琴头像.png')},
					{img:require('../../assets/ys_head/琴头像.png')},
					{img:require('../../assets/ys_head/琴头像.png')},
					{img:require('../../assets/ys_head/琴头像.png')},
					{img:require('../../assets/ys_head/琴头像.png')},
					{img:require('../../assets/ys_head/琴头像.png')},
					{img:require('../../assets/ys_head/琴头像.png')}
				],
				HeadFrame: require("../../assets/ys_head/头像框.png"),
			}
		}
	}
</script>

<style scoped>
	/* 宽度自适应
		.Frame{border-radius: 10px;
		border-width: 5px;
		border-style: solid;
  		border-color: black;display:inline-block}*html */
	.Frame{
		text-align: center;
		width: auto;
		height: auto;
		padding-top: 20px;
		padding-left: 10px;
		border-radius: 10px;
		border-width: 5px;
		border-style: solid;
  		border-color: black;
		/* background-color: #66ccff; */
	}
	.Frame:after{
		text-align: center;
		border-radius: 10px;
		border-width: 5px;
		border-style: solid;
  		border-color: black;
		/* 清除子元素浮动 
		after伪元素通过 content 在Frame元素的内容末尾生成了内容为一个点的块级素，再利用clear:both清除浮动*/
		content: "hhhhhhhhhh";
		display:block;
		height:0;
		clear: both;
		/* 隐藏content生成的元素 */
		visibility:hidden;
	}
	.FrameItem{
		float: left;
		width: 112px;
		height: 132px;
		margin: 15px;
		text-align: center;
	}
	.ysHead{
		position: relative;
		z-index: 2;
	}
	.HeadFrame{
		position: relative;
		top: -112px;
		z-index: 1;
	}
</style>
