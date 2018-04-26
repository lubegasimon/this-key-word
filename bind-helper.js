//creatin a re-usable bind helper binding
function foo(num) {
    console.log(this.a, num);
    return this.a + num; 
}

function bind(fn, obj) {
   return function() {
       return fn.apply(obj, arguments);
   }
}

var obj = {
    a:5,    
}

var bar = bind(foo, obj);

var b = bar(4);

console.log(b);