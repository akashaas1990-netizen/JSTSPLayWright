let Response_time=850;
let SLA=1000;
let SLA_Status=Response_time<=SLA? "with_in_SLA":"SLA_BReached";
console.log(`Response_time:${Response_time} - ${SLA_Status}`);

//template  literal
console.log(`What is the SLA time? - ${SLA}`);