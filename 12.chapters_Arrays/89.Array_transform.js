let scores=[45,82,91,60,73];
let grades=scores.map(i=>i>70? "pass":"fail");
//My reference
//calls a defined call back function on each element of an array, and returns 
//an array that contains the result
//@param call back function that accepts up to three arguments.
//map method calls the callback function one time for each element in the array
console.log(scores+"\n"+grades);
//it very similar to streams in java

//It transform the array into a new array into a same size

//same exmple take filter also
//filter
let passing=scores.filter(s=>s>=70);
console.log(passing);



