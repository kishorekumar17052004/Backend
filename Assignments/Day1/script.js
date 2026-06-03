// Task 1
// var can Can be redeclared and reassigned.
var userName = "Kishore";
console.log("var before:",userName);

userName = "Kumar"; // Reassigned
console.log("var after:", userName);

// let Cannot be redeclared in the same scope, but can be reassigned.
let userAge = 22;
console.log("let before:", userAge);

userAge = 23; // Reassigned
console.log("let after:", userAge);

// const Cannot be redeclared or reassigned after declaration.
const userCountry = "India";
console.log("const:", userCountry);

// country = "USA"; // Error: Assignment to constant variable



// Task 2
// Global Variable
const globalVar = "I am global";

const scopeTest = () => {
	var functionScoped = "I am function scoped";

	if (true) {
		let blockScoped = "I am block scoped";
		console.log("Task 2 inside block:", globalVar, functionScoped, blockScoped);
	}

	console.log("Task 2 inside function:", globalVar, functionScoped);
	try {
		// blockScoped is not visible here
		console.log(blockScoped);   
	} catch (err) {
		console.log("Task 2 block scope error:", err.name);
	}
};

scopeTest();
console.log("Task 2 outside function:", globalVar);
try {
	console.log(functionScoped);
} catch (err) {
	console.log("Task 2 function scope error:", err.name);
}


// Task 3

const grandParent = () => {
    let grandParentName = "Ravi";

    const parent = () => {
        let parentName = "Kumar";

        const child = () => {
            console.log("Grand Parent:", grandParentName);
            console.log("Parent:", parentName);
        };

        child();
    };

    parent();
};

grandParent();

// The child function is inside the parent function, and parent is inside the grandParent function.
// Because of JavaScript's Lexical Scope, the child function can access variables from Its own scope, 
// Parent scope Grandparent scope



// Task 4
const company = "SLA";

function level1() {
    
    function level2() {
        
        function level3() {
            console.log(company);
        }

        level3();
    }

    level2();
}

level1();

//A scope chain is the process JavaScript uses to find a variable. 
// It starts searching in the current scope and then moves outward through parent scopes until the variable is found or the global scope is reached.


// Task 5
console.log(a);

var a = 100;
//output : undefined 

/*
Memory Creation Phase: var a is hoisted and initialized to undefined.
Execution Phase: console.log runs first, then a gets value 100.
*/

// Task 6
try {
	console.log("Task 6:", username);
} catch (err) {
	console.log("Task 6 error:", err.name);
}
let username = "Sudhan";
console.log("Task 6 after init:", username);
/*
TDZ Start: from start of scope to declaration line.
TDZ End: after let is initialized.
ReferenceError happens because username is accessed inside TDZ.
*/

// Task 7 
// When the program starts, JavaScript creates the Global Execution Context.
const greet = () => {
  console.log("Hello");
};
// JavaScript stores the function in memory.
greet();
// JavaScript sees a function call and creates a new Function Execution Context (FEC).

/*
Execution flow:
Global Execution Context
	-> Function Execution Context (greet)
	-> Return to Global
	-> Execution Complete
*/

// Task 8 
console.log("10" + 5);
// output:"105" + is used for string concatenation when one operand is a string.
console.log("10" - 5);
// output: 5 - only performs numeric subtraction.
console.log(true + 1);
// output: 2 Boolean values convert to numbers
console.log(false + 10);
// output: 10 Boolean values convert to numbers , false = 0 + 10 = 10
console.log(Number("100"));
// output : 100 Number() converts a string to a number.
console.log(String(500));
// output: "500" String() converts a number to a string.

// Task 9 
const primString = "Hello"; // primitive
const primNumber = 42; // primitive
const primBoolean = true; // primitive
let primUndefined; // primitive
const primNull = null; // primitive (special)
const primBigInt = 123n; // primitive
const primSymbol = Symbol("id"); // primitive

const objValue = { name: "SLA" }; // non-primitive
const arrValue = [1, 2, 3]; // non-primitive
const fnValue = function () { return "Hi"; }; // non-primitive (Function Expression)

console.log("Task 9 types:", typeof primString, typeof primNumber, typeof primBoolean);
console.log("Task 9 types:", typeof primUndefined, typeof primNull, typeof primBigInt, typeof primSymbol);
console.log("Task 9 types:", typeof objValue, typeof arrValue, typeof fnValue);

/*
Primitives: String, Number, Boolean, Undefined, Null, BigInt, Symbol.
Non-primitives: Object, Array, Function.
Primitives store values directly (stack). Non-primitives store references to heap objects.
*/

// Task 10 


var functionVar = 1; // var
let functionLet = 2; // let
const functionConst = 3; // const

const Outer = () => {
	var functionScopedVar = "FS"; // function scope

	if (true) {
		let blockScopedVar = "BS"; // block scope
		const typeConversion = "7" + 1; // type conversion
		console.log("Task 10 type conversion:", typeConversion, blockScopedVar);
	}

	const Inner = () => {
		console.log("Task 10 lexical scope:", functionVar, functionLet, functionConst, functionScopedVar);
	};

	Inner(); // function call
};

Outer();

console.log("Task 10 hoisting:", Hoisted); // undefined
var Hoisted = "Hoisted";

try {
	console.log("Task 10 TDZ:", toTDZ);
} catch (err) {
	console.log("Task 10 TDZ error:", err.name);
}
let toTDZ = "TDZ";
console.log("Task 10 TDZ after init:", toTDZ);

/*
Task 10 Explanation
Memory Creation Phase:
	- var declarations are hoisted and initialized to undefined.
	- let/const are hoisted but uninitialized (TDZ).
Execution Phase:
	- Code runs top to bottom, values assigned, functions executed.
Scope Creation:
	- Global scope -> t10Outer scope -> block scope -> t10Inner scope.
Variable Lookup:
	- JS searches current scope, then outer scopes, then global.
Final Output (in order):
	Task 10 start
	Task 10 type conversion: 71 BS
	Task 10 lexical scope: 1 2 3 FS
	Task 10 hoisting: undefined
	Task 10 TDZ error: ReferenceError
	Task 10 TDZ after init: TDZ
*/

// Bonus task 
var a = 10;

const outer = () => {

  let b = 20;

  const inner = () => {

    console.log(a);

    console.log(b);

    console.log("5" + 2);

  };

  inner();

};

outer();

// Output : 10 20 52



