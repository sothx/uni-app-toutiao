<template>
	<view class="container publish-page">
		<!-- 编辑区域 -->
		<view class="edit">
			<textarea placeholder="分享新鲜事" auto-height="true" cursor-spacing="500"></textarea>
		</view>
		<!-- 添加图片 -->
		<view class="imgs-wrap">
			<view class="add-img" @tap="insertImg">
				<view class="icon iconfont">&#xe603;</view>
			</view>
		</view>
		<!-- 工具栏 -->
		<view class="edit-tools-flex"></view>
		<view class="edit-tools" :style="{bottom: footerbottom}">
			<view class="location">
				<view class="icon iconfont">&#xe602;</view>
				<view class="city">成都</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				footerbottom: "0",
			}
		},
		onLoad() {
			// 兼容h5的底部菜单
			// #ifdef H5
			this.footerbottom = document.getElementsByTagName('uni-tabbar')[0].offsetHeight + "px";
			// #endif
		},
		methods: {
			insertImg() {
				if (this.filesArray.length >= this.limit) {
					uni.showToast({
						title: '已达到最大上传数量',
						icon: 'none'
					})
				
					return;
				}
				
				uni.chooseImage({
					count: 3,
					sizeType: ['original', "compressed"],
					sourceType: ['album', 'camera'],
					success: (res => {
						// console.log(res);
						this.filesArray = [...this.filesArray, ...res.tempFilePaths];
					})
				})
			}
		}
	}
</script>

<style lang="scss">
	.publish-page {
		padding: 30upx;
		box-sizing: border-box;
		overflow-y: auto;

		// edit textarea
		.edit {
			width: 100%;
			box-sizing: border-box;
			background: #fff;
			padding-top: 20upx;

			textarea {
				width: 100%;
			}
		}

		// img icon
		.imgs-wrap {
			margin-top: 30upx;
			display: flex;
			flex-wrap: wrap;
			width: 100%;

			& .file,
			& .add-img {
				width: 32%;
				border: 1px solid #ccc;
				box-sizing: border-box;
				margin-top: 20upx;
				position: relative;
				height: 240upx;
				margin-left: 5upx;
				border-radius: 4upx;
			}

			& .file {
				position: relative;

				.del {
					position: absolute;
					width: 35rpx;
					height: 35rpx;
					background: #f56c6c;
					color: #fff;
					top: 0;
					text-align: center;
					right: 0;
					line-height: 35rpx;
					font-size: 30rpx;
					z-index: 100;
				}

				image {
					width: 100%;
					height: 100%;
				}
			}



			& .add-img {
				display: flex;
				align-items: center;
				justify-content: center;

				.icon {
					font-size: 80upx;
					color: #999;
				}
			}
		}

		// location
		.edit-tools {
			position: fixed;
			z-index: 99;
			left: 0;
			bottom: 0;
			width: 100%;
			background: #fff;
			border-top: 0.5px solid #ccc;
			height: 98upx;
			align-items: center;
			display: flex;
			box-sizing: border-box;
			justify-content: flex-end;

			.location {
				display: flex;
				margin-right: 30upx;
				align-items: center;
				background: #f0f0f0;
				border-radius: 50upx;
				color: #666666;
				font-size: 24upx;
				padding: 0 20upx;
				height: 51upx;

				.city {
					margin-left: 10upx;
				}

				.icon {
					color: #999;
				}
			}
		}
	}
</style>
