一个好的前端工程师，他需要一些必要的一些素质：
1. 有代码洁癖 --> 尽量让代码简约、优雅


项目技术需求及代码设计
整个移动端项目，因为我们现在没有用框架去实现，那么我们现在依赖一个类似jQuery的一个第三方js文件,它被称作迷你jQuery：

zepto.js

需要引入一个概念，叫做SPA（单页面开发）--》backbone angularjs vue
即 用一个网页去模拟很多个页面；

但是这样会存在比较关心的问题，页面状态如何保持？

为了解决这个问题，所有的SPA框架，都引入了一个很核心的功能：路由控制。
监听路由控制，实际上是监听url hash变化

通过hash变化，我们可以知道页面切换状态。

在进行理想目录结构划分时，我们需要认清
项目有哪些页面：
1. 首页 --》 home
2. 排名页 --》 rank
3. 表单页 --》 form_bus
4. 登录页 --> login
5. 城市选择页 -->cityList
通过目录结构，我们可以非常明确的了解到
我们有5大模块，可以用面向对象编程思想去开发它
5大模块，互相独立，都拥有自己的一些特性和方法。
我们需要用init.js去把它们有条理的组织在一起。

现在我开始分析项目理想目录结构
src
	css
		common
			common.css
		home.css 
		rank.css
	js
		module
			home.js
			rank.js
			form_bus.js
			login.js
			citylist.js
		init.js ==> 把页面模块有条理的组织在一起，负责页面初始化执行操作。
		route.js ==> 监听页面hash值变化，负责对页面状态的分析

		比如，通过route.js我们发现hash变化是:首页（home）,我们会调用首页模块下方法：
		home --> home.render()
		rank --> rank.render()


现在我们就需要做一件事：
监控hash的变化，也就是实现一个路由

实现一个路由控制这么一个对象： routeModule over

现在还需要做： 最核心最核心： 监控页面hash值的改变
我们需要引入第三方插件去支持： director.js






