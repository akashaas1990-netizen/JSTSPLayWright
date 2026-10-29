let nums=[10,25,30,45];
//what is this find do ?
//let say find the all this element which is greater then 20
let result=nums.find(temp=>temp>20);
//returns the value of the first element in the array where predicate
//is true and undefied otherwise
console.log(result);

//Apart from find we can find index also
let index=nums.findIndex(n=>n>=20);
console.log(index);
nums.findLast(n=>n>20);//45
console.log(nums.findLast(n=>n>20));

nums.findLastIndex(n=>n>=20);
console.log(nums.findLastIndex(n=>n>=20));

//Finding is use for search and everthing also in this case
