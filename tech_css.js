移动端css核心教学

写移动端，最核心的当然是使用rem单位进行统一布局，
达到响应式布局的目的。

但是在这之前，你需要时刻的关注自适应高度或宽度的问题，也就是说
你只有在非常确定的情况，你才会给一个div设置一个具体高度或
宽度。

那么怎么才能对自适应高度或宽度有非常明确概念呢？
答案是：只有对文档流，有非常清楚的了解才能达到这个目的。

css中 --》 文档流是一个非常核心，对于布局说至关重要。

为了让块级元素挨着显示，浮动发明了出来

但是 浮动会触发浮动流，它不属于文档流，它是飘在文档流上方
，不占据位置

所以说为了解决这个问题：

清楚浮动就被使用：被作用于，被感染普通文档流元素，比如普通的div

注意，清楚浮动，在我们的布局，一般不咋使用。
经常使用的是： 闭合浮动

怎么才能闭合浮动呢，要给其父元素设置2个非常至关重要的2个属性：
overflow:hidden;
zoom:1;

至此，所有使用float布局的同学，注意以上我说的几点。

下面，我现在给经常使用 相对定位与绝对定位讲一讲自适应问题

在文档流中，绝对定位是绝对不属于文档流的，它不存在文档流中，
它可以移动到页面中的任何一个位置。
用相对定位与绝对定位去布局，很有可能丧失自适应能力。

对于定位中的 fixed属性：
应该注意的是什么呢：


fixed: 对于移动端有一个不可忽视的问题，
在90%的安卓机下，它等价相对定位，它会失去固定定位的特点。


css中 优先级关系
<div class="parent">
	<div class="person_down"></div>
</div>

inline_style：  <div style="color:red" class="person_down"></div>
id: <div id="downid" class="person_down"></div>
class: <div class="person_down"></div>
伪类： .person_down:after
		

		inline_style  id   class element 伪类
			1		   0	 0      0      0
			0		   1	 0      0      0
			0		   0	 1      0      0
			0		   0	 0      1      0
			0		   0	 0      0      1
.person_down {
	color:red !impotant;
}
#downid {
	color:yellow;
}

body #id .class ___> 1000 + 100 + 10

impotant --->无穷大


#id .class ----> 1000 + 100