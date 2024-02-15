// B-TASK

function countDigits(str) {
  count = 0;
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(parseInt(str[i]))) {
      count++;
    }
  }
  return count;
}
console.log(countDigits("ad2a54y79wet0sfgb9"));

// A-TASK

// function countLetter(letter, string) {
//   let count = 0;
//   for (let i = 0; i < string.length; i++) {
//     if (string.charAt(i) === letter) {
//       count += 1;
//     }
//   }
//   return count;
// }
// console.log(countLetter("e", "engineer")); // return 3
