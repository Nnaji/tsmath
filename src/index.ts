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

let counter = id;
counter = (n: number): number => {
	const result = (n = n + 1);
	return result;
};
export default { id, counter };
