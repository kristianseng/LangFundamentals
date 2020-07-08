// Conceptual aside --> syntax parsers -->> the program that reads your code and determines what it does
// translation engine can be given instructions for extra stuff

// execution contexts --> a wrapper to help manage the code that is running


// and lexical(having to do with words) environments --> where something sits physically in the code you write
// in javascript syntax parser cares where code is writen


// name/value pair--> name which mas to a unique vlue
//and objects --> collection of name/value pairs


// Execution Context

// base execution context --> global execution context
// it creates global object (window object for browser) and special variable --> this


// all variables and functions created globally are attached to window object!

 

// outer environment


// execution context - creation and hoisting

// --> Hoisting

// global object, $this, outer variables
// recognizes variables and functions and set up space
// before code begin to be excecuted javascript has set aside memory for variables that ar being excecuted

// all variables initially set to undefined (placeholder)!!
// next phase -> assignments are set -> like var a ='hello world';

//Javascript and undefinied (aside)

// a is not defienied and undefined is diffrent thing --> undefined is a special value+

// better never set variables to undefined --> better for debugging

console.log(a); // undefiened
var a = 'hello world';
console.log(a); // hello world

b(); //called b! 
function b() {
    console.log('called b!');
}

// ASIDE // single threaded --> one command at a time, synchronous execution --> one at a time and in order

// function invocation and the execution stack
// invoce --> run
//execution stack the one on top is running
// beaware of execution context, always goes line by lane but function changes execution context. wWhen function finishes -> it being popped of


// functions, context and variable environments
// variable environment ---> where is variable created

// every exectution context has its own variable environment!

function b() {
    var myVar;
    console.log(myVar);
}
function a() {
    var myVar=2;
    console.log(myVar);
    b();
}

var myVar =1;
console.log(myVar);
a();
console.log(myVar);

// 1 , 2, undefined , 1

// The scope chain

function b() {
    console.log(myVar);
}

function a() {
    var myVar=2;
    b();
}

var myVar =1;
a();

// global value  --> refrence to outer environment --> here to global environment
// window --> function b , b function sits lexically on global environment
// scope chain


function a() {
    function b() {
        console.log(myVar);
    }
    var myVar=2;
    b();
}

var myVar =1;
a();
b(); // not be in global execution context --> is not definied error
// now myVar is console logged 2 --> b outer refrence was a, and found myvar value, if it wouldnt be there it would go to global object

// scope, es6, and let

// scope where is it located in your code

// cant run let before it is declared
// cant access let outside that block
// block scoping 

// Asynchronous callbacks

// rendering engine <==> the javascript engine <===> http request

// Event Queue ---> javascript looks at it when execution stack is empty!


// long running function

function waitThreeSeconds() {
    var ms = 3000 + new Date().getTime();
    while (new Date() < ms) {}
    console.log('finished function')
}
function clickHandler() {
    console.log('click event!');
}

//listen for the click event
document.addEventListener('click', clickHandler);

waitThreeSeconds();
console.log('finished execution');

// finished function ==> finished execution ==> click event!
