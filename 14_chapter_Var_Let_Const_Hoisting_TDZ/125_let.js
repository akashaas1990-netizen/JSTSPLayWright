{
    console.log(a);
    let a = 10;
}
// ReferenceError: Cannot access 'a' before initialization

// Enter Block
//  ↓
// a is created 
// if a -> var-> undefined
// if a -> let -> no value
// a has NO value yet  

// console.log(a) // Error TDZ (let, const), Var => undefined

// let a = 10;
//     ↓
// a = 10 