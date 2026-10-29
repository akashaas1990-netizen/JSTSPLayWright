//const score = require('fs').readFileSync(0, 'utf8');
let score=90;
// Write your solution here
if (score < 0 || score > 100)
{
    console.log("Invalid Score");
} else if (score >= 90) {
    console.log("A");
} else if (score >= 80) {
    console.log("B");
} else if (score >= 70) {
    console.log("C");
} else if (score >= 60) {
    onsole.log("D")
} else {
    console.log("F");
}