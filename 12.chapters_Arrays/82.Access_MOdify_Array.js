let status=["Pass","fail","Skip"];
console.log(status[0]);
console.log(status[2]);
//what exactly will come willtalk abt -1
console.log(status.at(-1));
console.log(status.at(-2));
console.log(status.at(-4));

//I told you that arrays are mutable in nature what you mean by mutable
//mutable means ther will can be change
status[1]="blocked";
console.log(status);
console.log(status.length);
//my own 
console.log(status[1].length);
//what if crete an empty array add element at the index 4 it is possible to it
//not valid
//you can add a new values you can't change the length

//array values can't be changed once the created its a fixed size
//dynamic array concept will be different 