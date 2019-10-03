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

export default { id, counter, add, sub };
