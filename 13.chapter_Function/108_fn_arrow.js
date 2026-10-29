function greet(name)
{
    return `Hello,${name}`;
}
const greet1=function(name)
{
    return  `Hello ,${name}`;
}
//Arrow fn
const greet2=(name)=>`Hello ,${name}`;
//If you want to remove the name of the keyword,
// remove the keyword return , remove the curly braces
console.log(greet2("RAjesha"));
console.log(greet("Rajesh shaiva"));