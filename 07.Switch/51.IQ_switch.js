let day=2;
//day++;
let x=++day;
switch(day)
{
    case 0:
        console.log("Sunday-Rest Day");
    case 1:
        console.log("Monday-Sprint Planning");
    case 2:
        console.log("Tuesday-development");
    case 3:
        console.log("Wednesday-Code Review");
    case 4:
        console.log("Thursday-Testing");
    case 5:
        console.log("Friday-Deployment & Retro");
    case 6:
        console.log("Saturday-Rest Day");
    default:
        console.log("INvalid day value");
}

console.log(x);