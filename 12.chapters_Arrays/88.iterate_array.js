//How do we iterate over the array?????
let test=["login","checkout","search"];
for(let index=0;index< test.length;index++)
{
const element=test[index];
console.log(element);
}
//i prefer to use generally i i'don't use index or some thing in for loop
for(let i=0;i<test.length;i++);
{
    console.log(i,test[i]);
}
console.log("-------------------");
//for...of  (Cleanes for values)
for(let test of test)
{
    console.log(test);//value
}
console.log("-----");


console.log("------------------------");
test.forEach((test,index)=>{
    console.log(`${index}:{test}`);
});

console.log("-------------------------");


//entries()-index+value
for(let[i,test] of test.entries())
{
    console.log(i,test);
}



//
let students=["Methis","Senthil","Ajay","Rahul"];
for(let student in students)
{
    console.log(student,"->",students[student]);//index =in
}