/**************************************************************
	@AUTHOR: Kingsley Nnaji <kingsley.nnaji@gmail.com>
	@LICENSE: MIT
	Creation Date: 02.10.2019
***************************************************************/
import { expect } from 'chai';
import 'mocha';
import tsmath from '../src';

describe('TS MATH FUNCTIONS', () => {
	// id function section
	describe('id function', () => {
		it('should return 1', () => {
			const one: number = tsmath.id(1);
			expect(one).to.equal(1);
		});
	});

	// counter function section
	describe('counter function', () => {
		it('should return 3', () => {
			const three: number = tsmath.counter(2);
			expect(three).to.equal(3);
		});
	});

	// add function section
	describe('add function', () => {
		it('should return 3', () => {
			const total: number = tsmath.add(1, 2);
			expect(total).to.equal(3);
		});
	});

	// sub function section
	describe('sub function', () => {
		it('should return 0', () => {
			const diff: number = tsmath.sub(2, 2);
			expect(diff).to.equal(0);
		});
	});

	// Highest common divisor function section
	describe('hcdivisor function', () => {
		it('should return 3', () => {
			const hcd: number = tsmath.hcdivisor(9);
			expect(hcd).to.equal(3);
		});
	});
	// mult function section
	describe('multiplication function', () => {
		it('should return 8', () => {
			const product: (a: number) => number = tsmath.mult(4);
			expect(product(2)).to.equal(8);
		});
	});
	// IsPrime function section
	describe('IsPrime function', () => {
		it('should return true', () => {
			const prime: boolean = tsmath.isPrime(2);
			expect(prime).to.equal(true);
		});
	});
});
