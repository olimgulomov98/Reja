// A-TASK

function countLetter(letter, string) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string.charAt(i) === letter) {
      count += 1;
    }
  }
  return count;
}
console.log(countLetter("e", "engineer")); // return 3

// Video darslik

console.log("Jack Ma maslahatlari");
const list = [
  "yaxshi talaba boling", // 0-20
  "togri boshliq tanlang va koproq hato qiling", // 20-30
  "uzingizga ishlaringizni boshlang", // 30-40
  "siz kuchli bolgan narsalarni qiling", // 40-50
  "yoshlarga investitsiya qiling", // 50-60
  "endi dam oling, foydasi yoq endi", // 60
];

function maslahatBering(a, callback) {
  if (typeof a !== "number") callback("insert a number", null);
  else if (a <= 20) callback(null, list[0]);
  else if (a > 20 && a <= 30) callback(null, list[1]);
  else if (a > 30 && a <= 40) callback(null, list[2]);
  else if (a > 40 && a <= 50) callback(null, list[3]);
  else if (a > 50 && a <= 60) callback(null, list[4]);
  else {
    setInterval(function () {
      callback(null, list[5]);
    }, 1000);
  }
}
console.log("passed here 0");
maslahatBering(70, (err, data) => {
  if (err) console.log("ERROR:", err);
  else {
    console.log(data);
  }
});
console.log("passed here 1");

// callback
// callback qayta qongiroq qilish funksiyasi

// function maslahatBering(a, callback) {
//   if (typeof a !== "number") callback("insert a number", null);
//   // callbackning 1 chi qismi error yani hatolikka tegishli, 2 chi qismi biz qaytarmoqchi bolgan dataga tegishli
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <= 30) callback(null, list[1]);
//   else if (a > 30 && a <= 40) callback(null, list[2]);
//   else if (a > 40 && a <= 50) callback(null, list[3]);
//   else if (a > 50 && a <= 60) callback(null, list[4]);
//   else {
//     setTimeout(function () {
//       callback(null, list[5]);
//     }, 5000);
//   }
// }
// console.log("passed here 0");
// maslahatBering(65, (err, data) => {
//   if (err) console.log("ERROR:", err);
//   else {
//     console.log("javob:", data);
//   }
// });
// console.log("passed here 1");

//asynchronous
// async function maslahatBering(a) {
//   if (typeof a !== "number") throw new Error("insert a number");
//   else if (a <= 20) return list[0];
//   else if (a > 20 && a <= 30) return list[1];
//   else if (a > 30 && a <= 40) return list[2];
//   else if (a > 40 && a <= 50) return list[3];
//   else if (a > 50 && a <= 60) return list[4];
//   else {
//     // return list[5];
//     return new Promise((resolve, reject) => { // resolve return boladi, reject throw new Error boladi
//       //   setTimeout(() => {
//       //     resolve(list[5]);
//       //   }, 5000);
//       setInterval(() => {
//         resolve(list[5]);
//       }, 1000);
//     });

// setTimeout(function () {
//   return list[5];
// }, 5000);
//   }
// }

//then/catch
// console.log("passed here 0");
// maslahatBering(20)
//   .then((data) => {
//     console.log("javob:", data);
//   })
//   .catch((err) => {
//     console.log("ERROR:", err);
//   });
// console.log("passed here 1");

// catch da error ni catch qiladi
// then da datani catch qiladi

/* synchronous operationlar toliq ishga tushib bolgach asynchronous functionni natijalari bn nodejs ishlay boshlaydi 
shuning uchun  asynchronous singlethread ni band qilmaydi operatsiyalarni event loop orqali threadga tashlayveradi */

//async/await
// await kutish degani va u kutib turadi va await javob omaguncha keyingisiga utmaydi

// async function run() {
//   let javob = await maslahatBering(65);
//   console.log(javob);
//   javob = await maslahatBering(70);
//   console.log(javob);
//   javob = await maslahatBering(41);
//   console.log(javob);
// }
// run();
