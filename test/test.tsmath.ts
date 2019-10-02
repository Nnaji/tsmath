/**************************************************************
	@AUTHOR: Kingsley Nnaji <kingsley.nnaji@gmail.com>
	@LICENSE: MIT
	Creation Date: 02.10.2019
***************************************************************/
import { expect } from 'chai';
import 'mocha';
import tsmath from '../src/';

describe('TS MATH FUNCTIONS', () => {
	it('should return 1', () => {
		const one: number = tsmath.id(1);
		expect(one).to.equal(1);
	});
});
