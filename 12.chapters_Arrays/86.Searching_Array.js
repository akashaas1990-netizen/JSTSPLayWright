//can we search in an array

let result = ["pass","fail","error","fail","Error"];
result.indexOf("fail");//1 
console.log(result.indexOf("fail"));
//it returns the index of the first occurance of a value in the array
//-1 it is not present
result.indexOf("skip");//-1
//lastIndexof-search from the end
console.log(result.indexOf("skip"));

result.lastIndexOf("fail");
console.log(result.lastIndexOf("fail"));

//
result.lastIndexOf("Akasha");
console.log(result.lastIndexOf("Akasha"));

//Includes actually give True and false result
//determines and give you the true and false result
result.includes("error");
console.log(result.includes("error"));

