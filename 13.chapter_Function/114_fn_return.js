function getStatus(code)
{

}
let status_code=status=>{
if(status>=200  && status<300)
{
return "Success";
}
else if(status>=400 && status<500)
{
    return "client error";
}
else if(status>=500 && status<600)
{
    return "server error";
}
else{
    return "Unknown";
}
}
console.log(status_code());