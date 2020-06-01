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
	@import "/static/iconfont/iconfont.css";
	
	.container {
		width: 750rpx;
		height: 100vh;
		display: flex;
		flex-direction: column;
		font-size: 36upx;
		font-family: 'STHeiti', 'Microsoft YaHei', 'Helvetica', 'Arial', sans-serif;
		overflow: hidden;
	}
</style>
