let nums=[10,1,21,2];
nums.sort((a,b)=>a-b);
console.log(nums);
nums.sort((a,b)=>b-a);

//if it is a string 
let fruits=['banana','apple',"cheery"];
fruits.sort((a,b)=> a.localeCompare(b));
console.log(fruits);