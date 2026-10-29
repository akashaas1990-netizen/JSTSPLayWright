//TDZ temperory dead zone
//TDZ is the time when a variableexists but you are not allowed to used yet
//TDZ is time b/w entering a block and initialising let or const variable.During this time
//the variable exist but can't be accessed
var a="Akash";
//10000
if(true)
{
    console.log(a);
    var a ="temp";
    console.log(a);
}