import {sum} from '../sum';

test("sum function should cacluate the sum of two numbers ", ()=>{
 const result= sum(6,4);
 
//Assertion
expect(result).toBe(10);
 
});
