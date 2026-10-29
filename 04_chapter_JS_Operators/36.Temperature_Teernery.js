let temp=0;
let feel=(temp>=40)?"Very Hot":
(temp>=35)?"Hot":
(temp>=30)?"Warm":
(temp>=25)?"Slightly Warm":
(temp>=20)?"Normal":
(temp>=10)?"Slightly Cold":
(temp>0)?"fully Cold":"Freeze";
console.log("7. Temperature", temp,"|Feel",feel)
