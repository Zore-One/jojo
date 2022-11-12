<template>
	<view :class="['x-toast',position]">
		<text>{{content}}</text>
	</view>
</template>

<script>
	export default {
		name:"x-toast",
		props:{
			position:{
				type:String,
				default:'center',
				validator:(value) => {
					return [
						'top',
						'center',
						'bottom',
					].includes(value)
				}
			},
			content:{
				type:String,
				default:'oooooooooooo'
			}
		},
		data() {
			return {
				// content:'这是一个提示'
				ishow:true
			};
		},
	}
</script>

<style lang="scss">
	.x-toast {
		background: rgba(0,0,0,.5);
		color: #000;
		border-radius: 10rpx;
		padding: 12rpx 24rpx;
	}
	
	@mixin fixed($t:50%) {
		position: fixed;
		top: $t;
		left: 50%;
		transform: translateX(-50%);
	}
	
	.top {@include fixed(20%);}
	.center {@include fixed(50%);}
	.bottom {@include fixed(80%);}
</style>