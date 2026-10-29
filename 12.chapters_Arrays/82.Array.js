//How do we create the array
let browsers=["chrome","Firefox","Safari"];
//you can create by using new keyword
let scores=new Array(3);//create an empty array
//this is how many element you want
//if you give 3 take this as a length
scores[0]="1";
console.log(scores[0]);

//we can array like this also
let scores2=new Array(1,2,3);//if you give multiple take this as a multiple element
console.log(scores2);

let numbers=new Array(100,200,300,400);

//Array.of()
let test=Array.of(10,20,30,40,50);
console.log(test.length);

//Array.from() always used for string to character conversion
let chars=Array.from("Hello");
// ["h","e","l","l","o"]



