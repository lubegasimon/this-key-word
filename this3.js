//EXPLICIT-binding

function foo(num) {
    // console.log(this.a, num)
    return this.a + num;
}
var obj = {
    a: 5,
}

var bar = foo.bind(obj);
var b = bar(4);
console.log('after binding:', b);


function boo() {
    console.log('returned:',this.a)
    // return this.a;
}

var obj1 = {
    a: 4,
}

boo.call(obj1);


function mine(num) {
   
    this.c = num;
    // return this.c;
    //  console.log(this.c);
}
var obj2 = {}
var obj3 = {
    mine,
}
obj3.mine(60);
console.log('object1:',obj3.c);

obj3.mine.call(obj2, 50);
console.log('object2:',obj2.c);

var baa = new obj3.mine(70)
console.log('new construted object:',baa.c);


