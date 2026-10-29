

function add(a,b,c)
{
    return a+b+c;
}
let num=[1,2,3,4];
console.log(add(...num));


function hasError(...codes)
{
    console.log(...codes);
    return codes.every(c=>c>=400);
   
}
 
let responseCodes=[200,250,300];
let responseCodes2=[200,201,404,500,800,900];
console.log("responseCodes...",hasError(...responseCodes));
console.log("responseCodes2...",hasError(...responseCodes2));

console.log("ssss->",responseCodes2);
