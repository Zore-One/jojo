<template>
	<view class="content">
		<!-- <image class="logo" src="/static/logo.png"></image> -->
		<view class="text-area">
			<text class="title">{{title}}</text>
			<!-- <x-loading></x-loading> -->
			<!-- <xtoast position="bottom"></xtoast> -->
			
		</view>
		<!-- <button @click="showtoast">xtoast</button> -->
		<view class="out">
			<view class="row" v-for="item in arrList" :key="item._id">
				姓名：{{item.name}}---年龄：{{item.age}}---性别：{{item.sex}}
			</view>
		</view>
		<button @click="addDb">插入</button>
	</view>
</template>

<script>
	// import {ref,reactive} from 'vue'
	// import loading from '../../libs'
	// import xtoast from '@/components/x-toast/lib/x-toast.vue'
	export default {
		// components:{
		// 	xtoast
		// },
		// setup() {
			
		// }
		data() {
			return {
				title: 'Hello',
				arrList:[]
			}
		},
		onLoad() {
			// console.log(this)
			// console.log('uni',uni)
			// console.log(loading)
			this.initDb()
		},
		methods: {
			addDb() {
				
			},
			async initDb() {
				const res = await uniCloud.callFunction({
					name:"uni-demo"
				})
				console.log(res)
				this.arrList = res.result.data
			}
			// showtoast() {
			// 	console.log(this.$xtoast({
			// 		position:'top',
			// 		content:'酷酷酷酷酷酷酷酷酷酷酷',
			// 		success:(res) => {
			// 			console.log(res)
			// 		}
			// 	}))
			// 	// this.$xtoast.show()
			// 	// this.$xtoast.hide()
			// },
			// preview() {
			// 	const url = 'https://xinxii-dev-1302479696.picgz.myqcloud.com//0c2a7372ca394c7f968dcb7013911206/file/1641958888738.pdf'
			// 	// const path = plus.io.convertLocalFileSystemURL(url)//将地址转为平台绝对路径
			// 	uni.navigateTo({
			// 		url:`/pages/pdfviewer/pdfviewer?url=${encodeURIComponent(url)}`
			// 	})
			// }
		}
	}
</script>

<style lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
	.out {
		width: 100%;
		.row {
			line-height: 80rpx;
			border-bottom: 1rpx solid #8f8f94;
		}
	}
</style>
