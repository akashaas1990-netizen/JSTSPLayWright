let count=45;
let negative=-100;
let zero=0;
console.log("count,negative,zero",count+" "+negative+" "+zero);
let h=0xFF;
console.log(typeof h);
let color_hex=0xFF0000;
console.log(typeof color_hex);
let octal = 0o77; //base
let million=1e6;
let tiny=1.5e-4;
console.log(typeof octal,typeof million,typeof tiny);


// --------------------------------------------------------
// 4. BIGINT - For arbitrarily large integers
// --------------------------------------------------------

let big = 123456789012345678901234567890n;
let big2 = BigInt("123456789012345678901234567890");
let bigFromNum = BigInt(42);

console.log("BigInt literal:", big);
console.log("BigInt from string:", big2);
console.log("BigInt from number:", bigFromNum);
console.log("typeof BigInt:", typeof big); // "bigint"