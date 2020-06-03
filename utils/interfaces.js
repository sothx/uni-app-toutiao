const domain = "https://uniapp-toutiao.herokuapp.com/";
const interfaces = {
	// 获取首页tab
	getTabList: domain + "api/profiles/home_tab_list",
	// 获取首页新闻信息
	getNewsList: `${domain}api/profiles/home_news_list/`
}

module.exports = interfaces;