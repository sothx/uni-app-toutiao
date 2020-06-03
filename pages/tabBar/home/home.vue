<template>
	<view class="container">
		<homeHeader v-if="showHeader"></homeHeader>
		<!-- 分类导航 -->
		<scroll-view :scroll-into-view="toview" scroll-x class="tab-bar" scroll-with-animation="true">
			<view @tap="onTabTap(index)" class="uni-tab" v-for="(item,index) in tabList" :id="item.id" :key="item.id">
				<text :class="{'tab-cur': tabIndex === index}" class="uni-tab-item">{{ item.name }}</text>
			</view>
		</scroll-view>
		<!-- 占位 -->
		<view class="place"></view>
		<!-- 内容 -->
		<swiper @change="onSwiperChange" :current="tabIndex" class="tab-box" :duration="300">
			<swiper-item class="swiper-item" v-for="(page,index) in tabList" :key="page.id">
				<scroll-view scroll-y class="panel-scroll-box">
					<view class="news-page" v-for="(newsItem,newsIndex) in newsList" :key="newsIndex">
						<!-- 引入组件 -->
						<newsCell :newsItem="newsItem"></newsCell>
					</view>
				</scroll-view>
				
			</swiper-item>
		</swiper>
		
		<!-- 底部占位 -->
		<view :style="{height:footerbottom}"></view>
	</view>
</template>

<script>
	import homeHeader from '../../../components/home/homeHeader.vue';
	import interfaces from '../../../utils/interfaces.js';
	import newsCell from '../../../components/home/newsCell.vue';
	export default {
		components: {
			homeHeader,
			newsCell
		},
		data() {
			return {
				showHeader: true, // 是否显示自定义表头
				tabList: [],
				tabIndex:0,
				toview: "",// scroll-view 滚动到的视图ID
				page: 1,
				size: 10,
				newsid: "",
				newsList: [],
				footerbottom:"0"
			}
		},
		onLoad() {
			// #ifdef APP-PLUS
			this.showHeader = false;
			// #endif
			
			// #ifdef H5
			this.footerbottom = document.getElementsByTagName("uni-tabbar")[0].offsetHeight + 'px';
			console.log(this.footerbottom)
			// #endif

			this.getTabsData();
			// setTimeout(() => {
			// 	this.loadTabData();
			// },1000)
			this.loadTabData();
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
						// console.log(res.data);
						this.tabList = res.data;
					})
				})
			},
			onTabTap(index) {
				// console.log(index)
				this.tabIndex = index;
			},
			onSwiperChange(e) {
				console.log(e);
				this.tabIndex = e.target.current || e.detail.current;
				this.toview = this.tabList[this.tabIndex].id;
				
				// 加载内容数据
			},
			loadTabData () {
				this.page = 1;
				this.newsid = this.tabList.length > 0 ? this.tabList[this.tabIndex].newsid : "all";
				// 数据请求
				this.request({
					url: interfaces.getNewsList + `${this.newsid}/${this.page}/${this.size}`,
					success: (res => {
						console.log(res.data)
						this.newsList = res.data;
					})
				})
			}
		}
	}
</script>

<style lang="scss">
	// 分类样式
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
			
			.tab-cur{
				color:#f85959;
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
	
	// 内容样式
	.tab-box{
		flex:1;
		.swiper-item{
			display: flex;
			flex:1;
			flex-direction: column;
			overflow: hidden;
			.panel-scroll-box{
				height:100%;
			}
		}
	}
	
	// 占位
	.place{
		height:100rpx;
	}
	
</style>
