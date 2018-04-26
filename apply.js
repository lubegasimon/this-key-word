// It's quite common to use apply(..) for spreading out arrays of values as parameters to a function call. Similarly,
// bind(..) can curry parameters (pre-set values), which can be very helpful.

function foo(a, b) {
    console.log('surname: ' + a, 'AND', 'other name: ' + b );
}

// spreading out array as parameters
foo.apply(null, ['Lubega', 'Simon']);

// currying with `bind(..)`
var bar = foo.bind(null, 'walker');
bar('zilla');


///NOTE: this one is more safer than the one above(due to over usage of 'null') which could cause problematc error in the program.
function mine(a,b) {
    console.log('surname: ' + a, 'AND', 'other name: ' + b );
}

var emptyObj = Object.create(null);

// spreading out array as parameters
mine.apply(emptyObj, ['Martin', 'Wax']);

// currying with `bind(..)`
var boo = mine.bind(emptyObj, 'Alex');
boo('Allan');