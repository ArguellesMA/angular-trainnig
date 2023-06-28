import { compute } from './compute';

describe('compute test suite', () => {
	xit('Should return 0 if input is negative', () => {
           const result = compute(-1);
	   expect(result).toBe(0);	
	})	

	xit('Should increment the input if it is positive', () => {
           const result = compute(1);
           expect(result).toBe(2);
	})
})
