//Nested ternery
//Nested ternery means ternery operator within ternery operator
//When we have multiple condtions


//age=26
//age>18 ->Go_to_Goa
// interview questions
let age=34;
//let is_pramod_enjoy=(age>18)?(age>25 ? "Drink well":"no drink only goa"):"no goa";
let is_pramod_enjoy=(age>18)?((age>25)?(age>=30?"goa+Drink+girlfriend":"no girls"):"no drink"):"no goa";
console.log(`you can enjoy,${is_pramod_enjoy}`);