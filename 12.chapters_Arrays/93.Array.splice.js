//splice and splice look same
//slice (start,end)-return new array
//does not muted-actual array->(start,end-1)=>index=0
//SLicing uses te cocept of index
//Don't give the end , it will automaticaly
//take from start to end
let arr=[1,2,3,4,5];
console.log(arr.slice(1,3));
console.log(arr);
//what happens if i use this
console.log(arr.slice(2));
// if not mentioned end it will everything
console.log(arr.slice(-2));
//inducdation will be increase every time doesn't decrease
//answer will be forword direction
console.log(arr.slice(0));

//crazy part comes here
console.log(arr.slice(-3,-5));
