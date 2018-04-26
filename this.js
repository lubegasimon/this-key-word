// //IMPLICIT BINDING;

// // However, the call-site uses the obj context to reference the function,
// //  so you could say that the obj object "owns" or "contains" the function 
// //  reference at the time the function is called.

console.log('first:');

function foo(){
    console.log(this.b);
};

var obj = {
    b: 4,
    foo: foo
}
obj.foo();//default binding.

console.log('second:');

function bar(){
    console.log(this.a);
}
var obj1 = {
    a: 49,
    bar: bar
}
var obj2 = {
    a: 8,
    obj1: obj1
}

obj2.obj1.bar();

// function boo(){
//     console.log(this.c);
// }
// function doFoo(fn){
//     fn();//<---call-site
// }
//  var obj4 = {
//      c: 35,
//      boo
//  }

//  var c = 'Implicit lost!';

//  doFoo(obj4.boo());



