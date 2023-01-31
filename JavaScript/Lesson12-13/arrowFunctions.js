// let msg = (name) => {
//     return `Hello ${name} !`;
// };
// console.log(msg("Kanan"))


// let add = (num1, num2) => num1 + num2;
// let subtract = (num1, num2) => num1 - num2;
//
// console.log(add(25, subtract(25, 8)));


// let getUser = (name, surname) => ({name: name, surname: surname});
// let user1 = getUser("Kanan", "Yusubov");
// let user2 = getUser("Salam", "Salamzade");
// console.log(user1);
// console.log(user2);


// let arr = [25, 68, 694, 125];
// console.log(`arr = ${arr}`);
//
// let result = arr.map(e => e * 5);
// console.log(`result = ${result}`);
//
// let odd = arr.filter(e => e % 2 === 0);
// console.log(`odd = ${odd}`);


// let student = {
//     name: "Kanan",
//     showInfo: function () {
//         console.log(this.name);
//     }
// }
//
// student.showInfo();


// let studentKanan = {
//     nameStudent: "Kanan",
//     diciplines: ['Python', 'C++', 'C#'],
//     showDiciplines: function () {
//
//         let print = (element) => {
//             console.log(`${this.nameStudent} learn ${element}`);
//         }
//
//         for (let i = 0; i < this.diciplines.length; i++) {
//             print(this.diciplines[i]);
//         }
//
//     }
// };
//
// studentKanan.showDiciplines();
// // console.log(studentKanan)


// let person = {
//     myName: "Kanan",
//     holla: () => {
//         console.log(`Hollo ${this.myName}`);
//     }
// }
//
// person.holla();