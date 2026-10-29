let status=0;
console.log(typeof status);
let status1="Akasha";
console.log(typeof status1);
let status2=[10,20,30];
console.log(typeof status2);

switch(status1)
{
    case false:
        console.log("False attached");
        break;
    case 0:
        console.log("0 matched");
        break;
    case 1:
        console.log("string matched"+status1);
        break;
     case 2:
            console.log("Object print"+status2);
            break;

}