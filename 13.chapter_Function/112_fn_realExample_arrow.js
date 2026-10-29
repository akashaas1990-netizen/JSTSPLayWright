//multiline
function validateStatusCode(status)
{
    if(status>=200 && status<=300)
    {
        console.log("Request is fine");
    }
}
const validate_exp=function(status)
{
    if(status>=200 && status<=300)
    {
        console.log("REquest is fine");
    }
}
const validate_arrows=status=>{
    if(status>=200 && status<=300)
{
   console.log("result is fine");
}
}
console.log("validate normal func",validateStatusCode(200));
console.log("validate function expression",validate_exp(250));
console.log("validate using function arrow",validate_arrows(300));
