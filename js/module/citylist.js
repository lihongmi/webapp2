window.cityListModule = Object.create(baseModule);
//每个对象互相独立---》简称继承
(function(){
	var selfModule = {
		el: $('#citylist'),
		name: '我是表单页',
		renderContent: function(){
			this.el.html('我是城市列表页的模块')
			console.log('我是城市列表页的模块');
		},
		bindEvent: function(){
			
		}
	}
	$.extend(cityListModule, selfModule);
})();