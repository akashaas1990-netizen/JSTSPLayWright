let arr=[1,2,3];
//What is the length of it
console.log(arr);

//if the element Add to the end
arr.push(4);
//push---->Appends a new element to the end of the array and 
// return the new length of the array 
// behind the sceen it actually creates a new array put new length to it

console.log(arr);
//Sir we can new element to the blank array right now right

arr.pop();
console.log(arr);

//you can push 2 elements also
arr.push(10,20);
console.log(arr);
//console.log(arr.length);



//Add to beginning
arr.unshift(0);
console.log(arr);

//remove from beginning element
//removes the first element of the array and return it
//if the array is empty undefined is returned and 
// the array is not modified
arr.shift();
console.log(arr);
// my case
arr.shift(",");
console.log(arr);
arr.splice(2,1);
console.log("jkjk--->"+arr);
console.log(arr);


arr.splice(2,-1,99);
console.log(arr);
arr.splice(3,0,99);
console.log(arr);
// arr.splice(2,-1,100);
// console.log(arr);
// arr.slice(3,2,100);
// console.log(arr);
// arr.slice(3,2);
// console.log(arr);
// arr.slice(2,2,100);
// console.log(arr);

//master //arr.splice(2,1,99)
//master //arr.splice(2,2,99)



//now what happens if i do this
arr.splice(1,2,10,20);
console.log(arr);
