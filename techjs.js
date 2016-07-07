//构造函数产生的唯一目的：
//就是完全的实现 因为对象是互相引用的关系，它反其道而行，就是想让对象之间的互相独立
function createObj(){
    this.a = 1;
    this.b = 2;
}
createObj.prototype.C = 78;
var obj = new createObj();
var obj2 = new createObj();

createObj.prototype.C = 21;
obj.C //---> 21  
obj2.C //---> 21

Object.create = function(obj) {
	//Object.create方法自己实现
	function name(){

	}
	name.prototype = obj;
	return new name();
}

var obj = {
	a: 34;
}
obj.a = 67;
function name(){

}
name.prototype = obj;

var newObj = new name();
/*newObj.a ---> 34;

newObj.a ---> 67;*/





