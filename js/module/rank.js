window.rankModule = Object.create(baseModule);
//每个对象互相独立---》简称继承
(function(){
	var selfModule = {
		el: $('#rank'),
		name: '我是排名页',
		listel: $(".js-ranklist"),
		init: function(){
			this.getData();
			console.log('我在getData后面');
			console.log('我是重载的init方法');		 	
		},
		enter: function(){
			this.el.show();
			$(EventCenter).trigger('returnTop'); 	
		},
		renderContent: function(obj){
			str = "";
			var targetNum = null;
			var count = 0;
			for(var key in obj) {
				if(count === 0) {
					targetNum = obj[key];
				}
				var LEFT_OFFSET_REM = 9.5;
				var dotted_num = LEFT_OFFSET_REM/targetNum;
				var left = dotted_num * obj[key];
				if(left < 2.8) {
					left = 2.8 + left;
				}
				count++;
				str += '<li>' +
						'	<div class="left_pane inl">' +
						'		<div class="rank_number inl">' + count + '</div>' +
						'		<div class="rank_name inl">' + key + '</div>' +
						'	</div>' +
						'	<div data-left="' + left + '" class="right_pane inl">' +
						'		<div class="bus_info">' +
						'			' + obj[key] + '人' +
						'		</div>' +
						'	</div>' +
						'	<div class="barline"></div>' +
						'	<div class="citybar" style="animation:runcity '+ (3 - obj[key]/targetNum ) +'s infinite linear both 1.5s;-webkit-animation:runcity '+ (3 - obj[key]/targetNum ) +'s infinite linear both 1.5s;"></div>' +
						'</li>';
			}
			this.listel.html(str);
			setTimeout(function(){
				$(".right_pane").each(function(index, val){
				   val.style.left = val.dataset.left + 'rem';
				});	 	
			}, 1000)
			//IScroll 就是iscroll.js暴露出的全局变量
		},
		bindEvent: function(){
			
		},
		getData: function(){
			var me = this;
			$.ajax({
				url: "js/data.json",
				type: 'get',
				success:function(res){
					console.log('异步代码');
					if(typeof res === "string") {
						res = JSON.parse(res)
					}else {
						res = res;
					}
					me.renderContent(res);
					$(EventCenter).trigger('iscroll_load');
					console.log(res);
				},
				error: function(res){
					console.log(res); 	
				}
			})
		}
	}
	$.extend(rankModule,selfModule);
})();