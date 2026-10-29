const data = require('fs').readFileSync(0, 'utf8');
const str = data.split('\n')[0];
// Write your solution here
let words = str.trim().split(/\s+/);
let count = words.length;
console.log(count);