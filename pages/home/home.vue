<template>
	<view class="home-container">
		<x-nav-bar title="首页" noBorder backgroundColor="#FF6510" ></x-nav-bar>
		<view class="top-banner">
			<swiper :indicator-dots="true" circular :interval="3000" :duration="1000">
				<swiper-item v-for="item in swiperLisr" :key="item.id">
					<view class="swiper-item">
						<image :src="item.url" mode="aspectFill"></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				swiperLisr:[
					{id:'1',url:'/static/swiper/home_top_bg2.png'},
					{id:'2',url:'/static/swiper/banner_guide.png'},
					{id:'3',url:'/static/swiper/shop-banner.png'},
				]
			};
		},
		onLoad() {
			uniCloud.callFunction({
				name:"users",
				data:{
					name:'张三'
				}
			}).then(res => {
				console.log(res)
			})
		},
		methods:{
			
		}
	}
</script>

<style lang="scss">
.home-container {
	padding: 0 24rpx;
}
.top-banner {
	margin-top: 24rpx;
	// border-radius: 10rpx;
	.swiper-item {
		width: 100%;
		height: 100%;
		image {
			width: 100%;
			height: 100%;
			display: block;
			border-radius: 10rpx;
		}
	}
}

</style>
