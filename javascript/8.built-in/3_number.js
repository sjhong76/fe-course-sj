/**
 * Number 클래스
 * - valueOf(), toString() ...
 * 
 */
let a = 100;
let b = 1234567;
let aa = new Number(100);
let bb = new Number(1234567);
console.log(a, typeof a);   // 100, number
console.log(aa, typeof aa); // 100, object(Number)
console.log(b, typeof b);   // 1234567, number
console.log(bb, typeof bb); // 1234567, object(Number)
 
console.log(a.valueOf());   // 100, 자동변환, 원본 데이터타입은 유지된다.
console.log(aa.valueOf());  // 100 
console.log(b.valueOf());   //
console.log(bb.valueOf());  //

console.log(a.toLocaleString(), typeof a);   
console.log(aa.toLocaleString(), typeof aa);  
console.log(b.toLocaleString(), typeof b);   
console.log(bb.toLocaleString(), typeof bb);

let localeNumber = b.toLocaleString();
console.log(localeNumber, typeof localeNumber);

let number = '9123888481819393';
let locNumber = Number.parseInt(number).toLocaleString();
console.log('locNumber = ', locNumber);

let fnumber = '9123.888481819393';
let flocNumber = Number.parseFloat(fnumber).toLocaleString();
let flocNumber2 = parseFloat(fnumber).toFixed(); // 소수점 첫째자리 반올림
let flocNumber3 = parseFloat(fnumber).toFixed(5); // 소수점 6째자리 반올림
console.log('flocNumber = ', flocNumber);
console.log('flocNumber2 = ', flocNumber2);
console.log('flocNumber2 = ', flocNumber3);
