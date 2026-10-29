let original=[1,2,3];
let copy1=[...original];
console.log(original);
console.log(copy1);
//slice gives a new array or same array
//by the way          it return a new array
let copy2=original.slice();
copy2.push(92);
copy1.push(100);


console.log("cccc--->",original);
console.log("bbbb--->",copy2);
console.log("spred--->",copy1);




//if you push the element original array
//slice create a new array
//when you use slice and whenever use Orginal it creates a new array
let deep_copy_array=original;
deep_copy_array.push(91);
//deep copy changes also changes original array
console.log(original);
console.log(deep_copy_array);
//if you change the deep_copy_array the orginal array also changing that why
//arrays are mutable 
//this is one of the problem why js is a funny language


//which one is used for copy slice or spread  spread is better
//shallow takes the different memory space

console.log("//--------------------example 2-------------------//");
//-----------------Example 2-----------------//
let orginal=['A','B','C'];
console.log("Origin-->",orginal);
let copy_alpha=[...orginal];//spread
//console.log("spread "+copy_alpha);
let copy_alpha1=orginal.slice();//slice
//console.log("Slice ",copy_alpha1);
let copy_alpha2=Array.from(orginal);
//console.log("Array.from-->",copy_alpha2);
let copy_alpha3=orginal.concat();
//console.log("Concatniates data-->",copy_alpha3);


//console.log("Orginal--->",copy_alpha);

copy_alpha.push(34);
copy_alpha1.push(36);
copy_alpha2.push(37);
console.log("copy_alpha2 to orginal",orginal);

copy_alpha3.push(38);

console.log(copy_alpha3);
console.log("copy_alpha3 to orginal",orginal);

console.log(copy_alpha);
console.log(copy_alpha1);
console.log(copy_alpha2);
console.log(copy_alpha3);
console.log("Orginal"+orginal);
//deep copy 
copy_alpha3.push('D');
console.log("deeps--->",orginal);
//deep copy
let snack=orginal;
snack.push('17');
console.log("snack--->",snack);
console.log("orginal real things-->",orginal);

//deep copy
// copy_alpha3.push('40');
// console.log("copy_alpha2-6-6",copy_alpha3);
// console.log("deep_copy",orginal);

//show something
let a=copy_alpha1;
a.push(29);
console.log("a--->>>",a);
console.log("copy alpha to a",copy_alpha1);
z=a.slice(-4,3);
console.log(" a element Slice changing  z-->",z);
let b=copy_alpha2;
b.push(30);
console.log("b--->",b);
console.log("copy alpha2 to b",copy_alpha2);

