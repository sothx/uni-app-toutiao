<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	/* #ifndef APP-NVUE */
	@import "/static/iconfont/iconfont.css";
	/* #endif */
	
	uni-page{
		overflow: hidden;
	}
	
	.container {
		width: 750rpx;
		height: 100vh;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		font-size: 36rpx;
		font-family: 'STHeiti', 'Microsoft YaHei', 'Helvetica', 'Arial', sans-serif;
		overflow: hidden;
	}
</style>
