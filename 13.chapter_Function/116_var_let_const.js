
//let is acting as a block scoped and var is for function scoped

var a=10;
console.log(a);
function printHello()
{
    console.log("Hello The testing academy");
    var a=20;
    console.log(a);
    b=a;
    console.log("B addig A",b);
    a=b+a;
    console.log("B+a assign a",a);


    if(true)
    {
        var a=30;
        console.log("k-mama",a);

    }
     if(true)
    {
        let a=40;
        console.log("s mama",a);

    }
    console.log("b mama",a);
}
printHello();
console.log("mama",a);
