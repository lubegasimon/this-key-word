
var sum = new Function('a,b', 'return a + b');

    console.log(sum(2,6));//The basic difference is that a constructor function is used with the new keyword (which causes JavaScript to automatically create a new object, set this within the function to that object, and return the object

function identify() {
    return this.name.toUpperCase();
}

function speak() {
    var greeting = "Hello, I'm " + identify.call(this);
    console.log(greeting);
}

var me = {
    name: "Simon"
};

var you = {
    name: "zilla"
};

identify.call( me ); // KYLE
identify.call( you ); // READER

speak.call( me ); // Hello, I'm KYLE
speak.call( you ); // Hello, I'm READER
