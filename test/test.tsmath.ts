/**************************************************************
	@AUTHOR: Kingsley Nnaji <kingsley.nnaji@gmail.com>
	@LICENSE: MIT
	Creation Date: 02.10.2019
***************************************************************/
import { expect } from 'chai';
import 'mocha';
import tsmath from '../src/';

describe('TS MATH FUNCTIONS', () => {
	// id function section
	describe('id function', () => {
		it('should return 1', () => {
			const one: number = tsmath.id(1);
			expect(one).to.equal(1);
		});
	});
	describe('counter function', () => {
		it('should return 3', () => {
			const three: number = tsmath.counter(2);
			expect(three).to.equal(3);
		});
	});
});
