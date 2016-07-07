//这是我们项目中，执行全局初始化的一个文件

//routeModule.router('home'); //告诉页面，首页发生了变化

//routeModule -->核心路由器模块对象

window.EventCenter = {};  //-->全局事件中心
window.myScroll = null;
$(EventCenter).bind('iscroll_load', function(){
	myScroll = new IScroll('.rank_list', {
       scrollbars: true,
       bounce:true
    });
});

$(EventCenter).bind('returnTop', function(){
	if (myScroll) {
		myScroll.scrollTo(0, 0);
	}
});

$(EventCenter).bind('loading', function(){
	Loading.loading();
});

$(EventCenter).bind('loaded', function(){
	Loading.loaded();
});

	
//第三方插件会暴露一个全局Router变量，
//专门负责监听hash值的变化
new Router({
	'/:hashName': function (hashName) {
			//执行对应的路由变化
			routeModule.router(hashName);
	}.bind(this)
}).init('/home');