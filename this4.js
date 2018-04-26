function foo(num) {

    this.a = num;
}
var obj = {};

var bar = foo.bind(obj);//bar is hard bound against obj
bar(3);

console.log(obj.a);

var baz = new bar(35);//baz is a newly constructed object

console.log(baz.a);