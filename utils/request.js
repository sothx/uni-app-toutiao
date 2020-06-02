module.exports = (params) => {
	let url = params.url;
	let method = params.method;
	let header = params.header || {};
	let data = params.data || {};
	
	// 请求方式
	if(method) {
		method = method.toUpperCase();
		if(method === 'POST'){
			headers = { "content-type": "application/x-www-form-urlencoded" }
		}
	}
	
	// 发起请求 加载动画
	if(!params.hideLoading){
		uni.showLoading({
			title:"加载中..."
		})
	}
	
	// 发起网络请求
	uni.request({
		url,
		method,
		header,
		data,
		success: res => {
			if(res.statusCode && res.statusCode !== 200) { //api请求错误
				uni.showModal({
					content: res.msg
				})
				return;
			}
			
			typeof params.success === 'function' && params.success(res.data)
		},
		fail: e => {
				uni.showModal({
					content: e.msg
				})
			
			typeof params.fail === 'function' && params.fail(e.data)
		},
		complete: () => {
			// 网络请求结束
			uni.hideLoading();
			
			typeof params.complete === 'function' && params.complete()
			return;
		}
	})
}