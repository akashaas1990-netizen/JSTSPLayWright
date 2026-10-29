//MAp vs Filter
//every vs some
//every-All must pass
// 
//------------every--All must pass-------------------
console.log([80,90,85].every(s=>s>=70));
console.log([80,60,85].every(s=>s>=70));
//-----------some--Atleast one condtion must tre-----
console.log([80,60,85].some(s=>s>=70));
console.log([80,90,85].some(s=>s<70));


