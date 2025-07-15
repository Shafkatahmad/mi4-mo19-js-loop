// ODD FROM 1 TO 20
// for(let i = -20; i <21; i++) {
//   if(i > 0 && i % 2 !== 0) {
//     console.log(i);
//   }
// }

// EVEN FROM 1 TO 20
// for(let i = -20; i <21; i++) {
//   if(i > 0 && i % 2 === 0) {
//     console.log(i);
//   }
// }

// sum of the numbers from 1 to 20 that are divisible by 3
let sum = 0;
for(let i = 1; i <21; i++) {
  if(i % 3 === 0) {
    sum = sum + i;
  }
}
console.log('The sum of the numbers from 1 to 20 that are divisible by 3 is: ', sum);