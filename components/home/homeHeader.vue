<template>
	<view>
		<view class="home-header">
			<view class="search-bar">
				<view class="icon iconfont">&#xe600;</view>
				<input type="text" class="search-input" placeholder="搜索栏">
			</view>
		</view>
		<view class="space"></view>
	</view>
</template>

<script>
</script>

<style lang="scss">
	.home-header {
		height: 100rpx;
		background: #d43d3d;
		padding: 10rpx 50upx;
		box-sizing: border-box;
		position: fixed;
		width: 750upx;
		z-index: 99;
	}
	.search-bar {
		background-color: #fff;
		height: 80rpx;
		display: flex;
		align-items: center;
		padding: 10rpx 20rpx;
		color: #505050;
		border-radius: 10rpx;
		box-sizing: border-box;
	}
	
	.search-input {
		font-size: 32rpx;
		margin-left: 20rpx;
	}
	
	.space{
		height: 100upx;
	}
</style>
