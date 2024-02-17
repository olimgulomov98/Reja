// D-TASK

function checkContent(str1, str2) {
  // harflar katta yoki kichikligini oldini olish uchun
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  var a = str1.split("").sort().join("");
  var b = str2.split("").sort().join("");

  return a === b;
}

console.log(checkContent("mitgroup", "gmtiprou"));

// C-TASK

// class Shop {
//   // constructor
//   constructor(non, lagmon, cola) {
//     this.non = non;
//     this.lagmon = lagmon;
//     this.cola = cola;
//   }

//   // method
//   qoldiq() {
//     const now = new Date().toLocaleTimeString();
//     console.log(
//       `hozir ${now}da ${this.non}ta non, ${this.lagmon}ta lagmon va ${this.cola}ta cola mavjud!`
//     );
//   }

//   sotish(name, num) {
//     if (name === "non") {
//       this.non -= num;
//     } else {
//       null;
//     }
//   }

//   qabul(name, num) {
//     if (name === "cola") {
//       this.cola += num;
//     } else {
//       null;
//     }
//   }
// }

// const shop = new Shop(4, 5, 2);
// shop.sotish("non", 3);
// shop.qabul("cola", 4);
// shop.qoldiq();

// B-TASK

// function countDigits(str) {
//   count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (!isNaN(parseInt(str[i]))) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(countDigits("ad2a54y79wet0sfgb9"));

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
