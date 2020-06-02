<template>
	<view class="container">
		<homeHeader v-if="showHeader"></homeHeader>
		<!-- 分类导航 -->
		<scroll-view scroll-x class="tab-bar" scroll-with-animation="true">
			<view @tap="onTabTap(index)" class="uni-tab" v-for="(item,index) in tabList" :id="item.id" :key="item.id">
				<text class="uni-tab-item">{{ item.name }}</text>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import homeHeader from '../../../components/home/homeHeader.vue';
	import interfaces from '../../../utils/interfaces.js';
	export default {
		components: {
			homeHeader
		},
		data() {
			return {
				showHeader: true, // 是否显示自定义表头
				tabList: []
			}
		},
		onLoad() {
			// #ifdef APP-PLUS
			this.showHeader = false;
			// #endif

			this.getTabsData();
		},
		methods: {
			getTabsData() {
				// uni.request({
				// 	url: interfaces.getTabList,
				// 	success: res => {
				// 		console.log(res);
				// 		uni.tabList = res.data;
				// 	}
				// })
				this.request({
					url: interfaces.getTabList,
					success: (res => {
						console.log(res.data);
						this.tabList = res.data;
					})
				})
			},
			onTabTap(index) {
				console.log(index)
			}
		}
	}
</script>

<style lang="scss">
	.tab-bar {
		background-color: #f4f5f6;
		white-space: nowrap;
		position: fixed;
		z-index: 99;
		top: 100rpx; //375 2rpx = 1px;
		// #ifdef APP-PLUS
		top: 0;

		// #endif
		.uni-tab {
			display: inline-block;
			white-space: normal;
			padding: 20rpx 0 20rpx 20rpx;

			.uni-tab-item {
				padding: 0 20rpx;
				height: 52rpx;
				line-height: 52rpx;
				color: #505050;
			}
		}
	}

	.tab-bar ::-webkit-scrollbar {
		width: 0 !important;
		display: none;
		height: 0 !important;
		-webkit-appearance: none;
		background: transparent;
	}
</style>
