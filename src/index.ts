/**************************************************************
	@AUTHOR: Kingsley Nnaji <kingsley.nnaji@gmail.com>
	@LICENSE: MIT
	Creation Date: 02.10.2019
***************************************************************/
// Identity function takes a number as its only argument and returns that number when called
// id function definition
let id: (n: number) => number;
// id function implementation
id = (n: number): number => {
	return n;
};

// Counter function takes a number and increments it by 1
// counter function definition
let counter = id;
// id function implementation
counter = (n: number): number => {
	const result: number = (n = n + 1);
	return result;
};
// Add function take two arguments and returns their product
// add function definition
let add: (a: number, b: number) => number;
// add function implementation
add = (a: number, b: number): number => {
	const total: number = a + b;
	return total;
};

// Sub function take two arguments and returns their difference
// sub function definition
let sub: (a: number, b: number) => number;
// sub function implementation
sub = (a: number, b: number): number => {
	const diff: number = a - b;
	return diff;
};

// Highest common divisor function takes an argument of the type number and returns the hcd of that number
// hcd function definition
let hcdivisor: (a: number) => number;
// hcd function implementation
hcdivisor = (a: number): number => {
	let result: number = 1;
	let current: number = 2;
	for (current; current < a; current = current + 1) {
		if (a % current === 0) {
			result = current;
		}
	}
	return result;
};

/* mult function take a argument and returns a function that returns the product as a result by taking an argument */
// mult function definition
let mult: (a: number) => (b: number) => number;
// mult function implemetation
mult = (a: number) => {
	return (b: number): number => {
		return a * b;
	};
};

export default { id, counter, add, sub, hcdivisor, mult };
