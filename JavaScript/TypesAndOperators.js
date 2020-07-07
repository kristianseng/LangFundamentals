// Dynamic typing --> you dont tell engine what type of data a varibale hold

// dynamic type vs static typing (like in Java)
// dynamic typing is powerful but can be problematic

// Primitive type --> that represents single value --> is not an object
// undefined/null/boolean/number/string/boolean/symbol

// good idea --> leave undefined to engine and use null when needed.


// Operators
// a special function that is syntactically written differently, 
//generally take two parameters and output one result

var 3+4;
console.log(a);

//7

// + is a function
//  in fix notation ( 3 + 4 ) // + in the middle

//operator precedence and associativity
// functions are called in order of precedence
// associativity what order operator functions get called in: left-to-right or right-to-left (what have the same precedence)

var a = 3 + 4 * 5
console.log(a);
// 23

var a = 2, b = 3, c = 4;

a = b = c;

// 4 // assignment right to left


// Coercion --> converting a value from one type to another

var a = 1 + '2'; //12 // 1 got coerced to a string

// Comparison operators

console.log(1 < 2 < 3); //true             left to right
console.log(3 < 2 < 1); //true             // false < 1

// number(false) ==> zero
// number(undefined) => Nan
// number(null) => 0

// looked as a negative aspect of languge, often coercion works unexpected

// null == 0 / false
// null < 1 / true
// "" == 0 / true
// "" == false / true

// === does not try to coerce the type


// Existence and Booleans

// Boolean(undefined) / false
// Boolean(null) / false
// Boolean("") / false

// problem boolean(0) / false

if (a || a === 0) {
    console.log('something is there');
}
// can be useful

// default values
// old way of setting default value
// or operator value special function, 0 || 1 => 1, 'hello' || 'hi' => 'hello'
function greet(name) {
    name = name || 'ivar';
    console.log('hello ' + undefined);
}
greet(); // Hello undefined


// framework aside ==> code that you see a lot in frameworks

var libraryName = "lib 2";
// files should not collide with each other, becouse all js files are treathed as 1 stack ==> variables can be overwritten

window.libraryName = window.libraryName || "Lib 2";

// if it is set we do not change it
// checks global environment, not to overwrite