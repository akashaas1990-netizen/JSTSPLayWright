//Immediate invoked functional expression
//They don't need to called

function name1()
{
    console.log("HI");

}
name1();

(function()
{
    console.log("Hi");
})();

(()=>{
    console.log("Hi");
})();