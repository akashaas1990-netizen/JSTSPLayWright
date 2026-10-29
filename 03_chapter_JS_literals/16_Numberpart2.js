//==========================================
//3.Numeric  Seperators
//==========================================
let millions=1_000_000;
let binarySep =0b1010_0001;
let hexSep=0xFF_FF;
console.log("millions"+millions+"binarySep"+binarySep+"hexSep"+hexSep);

//==========================================
//4.BIGINT-For arbitarly large numbers
//==========================================
let big=123456789012345678901234567890n;
let big2=BigInt("123456789012345678901234567890");
let bigFromNum=BigInt(42);
console.log("BigInt literal:",big);
console.log("BigInt from string:",big2);
console.log("BigInteger from number",bigFromNum);
console.log("typeof BigInt:",typeof big); //"bigInt"
