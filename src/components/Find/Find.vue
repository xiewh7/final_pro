<template>
	<div class="push">
		<tab :line-width="2" custom-bar-width="60px">
	      <tab-item selected @on-item-click="toMustPush">按发布时间</tab-item>
	      <tab-item @on-item-click="FindByPeople">按人气</tab-item>
	      <tab-item @on-item-click="FindByComment">按评论数</tab-item>
	    </tab>
		<view-box ref="viewBox">
			<router-view></router-view>
		</view-box>
	</div>
</template>

<script>
	import { Tab, TabItem, ViewBox } from 'vux'
	export default {
		name: 'push',
		data() {
			return {
				selected:'mustPush',//选中状态
				mustPushGoods:[{
					imgSrc:'',
					name:'JSLJD-32 好大一个灯',
					price:'1234',
					returnPrice:'10'
				},{
					imgSrc:'',
					name:'JSLJD-32 好大一个灯',
					price:'1234',
					returnPrice:'10'
				},{
					imgSrc:'',
					name:'JSLJD-32 好大一个灯',
					price:'1234',
					returnPrice:'10'
				}]
			}
		},
		components: {
			Tab,
			TabItem,
			ViewBox
		},
		methods: {
			toMustPush(){
				this.$router.push({
					path:'/Find/MustFind'
				})
			},
			FindByPeople(){
				this.$router.push({
					path:'/Find/FindBypeople'
				})
			},
			FindByComment(){
				this.$router.push({
					path:'/Find/FindByComment'
				})
			},
		}
	}
</script>

<style scoped lang="less">
	
</style>