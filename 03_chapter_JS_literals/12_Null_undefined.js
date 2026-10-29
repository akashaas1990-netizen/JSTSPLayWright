//==================================
//null vs undefined in js
//==================================
/*
Simple defination
undefined--->A Variable exist but it is not beeen assigned any value yet
            javascript itself sets its automatically
null---> A variable exists, but the developer explicitly assign
"no value" or "empty"
       It is intentionally absence of any value
*/
var x;
console.log(x);
var audi=null;
console.log(audi);


//-------------------------------------------
//1.undefined
//-------------------------------------------
let userName;// declared the variable but not assigned value to that
console.log(userName);
console.log(typeof userName);


function greet()
{
       //no return statement
}
console.log(greet());

//------------------------------
let x;
x=10;
console.log(x);

//--------------------------------------
//2.null
//--------------------------------------
let profilePicture=null;
console.log(profilePicture);
console.log(typeof profilePicture);// type of null value object<----known JS quirk
/*
  | Feature              | undefined                     | null                           |
  |----------------------|-------------------------------|--------------------------------|
  | Meaning              | Not assigned yet              | Intentionally empty            |
  | Who sets it?         | JavaScript automatically      | Developer manually             |
  | Type                 | undefined                     | object (historical bug in JS)  |
  | ==  comparison        | null == undefined  -> true    |                                |
  | === comparison       | null === undefined -> false   |                                |
*/
