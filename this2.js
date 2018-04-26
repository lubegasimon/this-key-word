 //EXPLICIT-binding...force the function's 'this' to be the object..
function foo() {
    console.log(this.d);
  
}
 var obj = {
     d:{
         name: 'simon', age: 20
     }
 }
 foo.call(obj);

 function bar(num) {
    console.log(this.a, num);
    return this.a + num;
 }

 var obj2 = {
     a: 4,
 }
var boo = bar.bind(obj2);

var b = boo(5);
console.log(b);

// var arr = [2, 3, 4, 5];

// function boo(num) {
//     for( var i = 0; i < arr.length; i++){
//         console.log(this.a, num);
//     }
//     return this.a + num;
// }