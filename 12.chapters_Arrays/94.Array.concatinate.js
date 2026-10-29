//concate basically means we have 2 array how do i concatinate together
let a=[1,2];
let b=[3,4];
let c=a.concat(b);
console.log(a+b);
console.log(c);

//spread (modern way) -concatenation (...)
let d=[...a,...b];
console.log(d);