const numbers = [1, 2, 3, 4, 5];

const maps = numbers.map(num => num * 2);

console.log(maps);


//////////Filters//////////////

const filters = numbers.filter(num1 => num1 % 2 === 0);

console.log(filters);


////////interview///////////
let s=["pass","fail","skip"].join("|");
console.log("Teke-->"+s);

////////2nd////////////////////
let s1=["pass","fail","skip"].indexOf("skip");
console.log("interview 2",s1);

///////3rd//////////////
let s2=[10,20,30];
let s3=[...s2];
console.log("s3-->",s3);
s2=s3;
console.log("s2-->"+s2);
let s4=splice(2,4)