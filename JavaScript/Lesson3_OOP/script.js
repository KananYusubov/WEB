//#region  Object

// let kanan = {
//   firstname: "Kanan",
//   lastname: "Yusubov",
//   age: 16,
//   showInfo: function () {
//     console.log(
//       `${this.firstname} | ${this.lastname} | ${this.age} | Birth Year: ${
//         2022 - this.age
//       }`
//     );
//   },
// };

// kanan.firstname = "Filankes";
// kanan.lastname = "Filankesov";

// kanan.showInfo();

//#endregion

//#region Constructor Functions

// function Human(firstname, lastname, age) {
//   this.firstname = firstname;
//   this.lastname = lastname;
//   this.age = age;

//   this.showInfo = function () {
//     console.log(
//       `${this.firstname} | ${this.lastname} | ${this.age} | Birth Year: ${
//         2022 - this.age
//       }`
//     );
//   };
// }

// let human1 = new Human("Kanan", "Yusubov", 16);
// let human2 = new Human("Filankes", "Filankesov", 33);

// human1.showInfo();
// human2.showInfo();

// function Car(model, vendor, year) {
//   this.model = model;
//   this.vendor = vendor;
//   this.year = year;

//   this.showInfo = function () {
//     console.log(`${this.model} | ${this.vendor} | ${this.year}`);
//   };

//   this.showCarStatus = function () {
//     if (this.year < 1990) console.log("Old");
//     else if (this.year < 2000) console.log("Normal");
//     else if (this.year < 2010) console.log("Good");
//     else if (this.year > 2010) console.log("New");
//   };
// }

// let car1 = new Car("XC-60", "VOLVO", 1890);
// car1.showInfo();
// car1.showCarStatus();

//#endregion

//#region Class

// class Student {
//   constructor(name, surname, birthday) {
//     this.name = name;
//     this.surname = surname;
//     this.birthday = birthday;
//   }

//   showInfo() {
//     console.log(`${this.name} | ${this.surname} | ${this.birthday}`);
//   }

//   showAge() {
//     const dateTime = Date.now() - Date.parse(this.birthday);
//     const age = Math.floor(dateTime / 31536000000);
//     console.log(`Age: ${age}`);
//   }
// }

// let kanan = new Student("Kanan", "Yusubov", "3/19/2006");
// kanan.showInfo();
// kanan.showAge();

//#endregion

//#region Encapsulation

// class Student {
//   #id;
//   #score = 0;

//   constructor(name, surname, birthday) {
//     this.#id = Math.floor(Math.random() * 10e6);
//     this.name = name;
//     this.surname = surname;
//     this.birthday = birthday;
//   }

//   get score() {
//     return this.#score;
//   }

//   set score(value) {
//     if (value >= 1 && value <= 5) {
//       this.#score = value;
//     }
//   }

//   showInfo() {
//     console.log(
//       `${this.#id}. ${this.name} | ${this.surname} | ${this.birthday} | ${
//         this.#score
//       }*`
//     );
//   }

//   showAge() {
//     const dateTime = Date.now() - Date.parse(this.birthday);
//     const age = Math.floor(dateTime / 31536000000);
//     console.log(`Age: ${age}`);
//   }
// }

// let st = new Student("John", "Doe", "07/07/2007");

// // st.showInfo();
// // st.surname = "Dayi";
// st.showInfo();

// class Human {
//   #id;

//   constructor(name, surname, birthday) {
//     this.#id = Math.floor(Math.random() * 10e6);
//     this.name = name;
//     this.surname = surname;
//     this.birthday = birthday;
//   }

//   showInfo() {
//     console.log(
//       `${this.#id}. ${this.name} | ${this.surname} | ${this.birthday}`
//     );
//   }

//   showAge() {
//     const dateTime = Date.now() - Date.parse(this.birthday);
//     const age = Math.floor(dateTime / 31536000000);
//     console.log(`Age: ${age}`);
//   }
// }

// class Teacher extends Human {
//   constructor(name, surname, birthday, subject = []) {
//     super(name, surname, birthday);
//     this.subject = subject;
//   }

//   showSubjects() {
//     this.subject.forEach((element) => {
//       console.log(element);
//     });
//   }
// }

// let teacher = new Teacher("Kanan", "Yusubov", "03/19/2006", [
//   "Python",
//   "C#",
//   "JS",
// ]);

// // teacher.showInfo();
// // teacher.showSubjects();

// class Mentor extends Teacher {
//   constructor(name, surname, birthday, subject = [], level) {
//     super(name, surname, birthday, subject);
//     this.level = level;
//   }

//   showSubjects() {
//     console.log(this.subject.join(","));
//     document.write(`<ol><li>${this.subject.join("<li>")}</ol>`);
//   }

//   showLevel() {
//     console.log(this.level);
//   }
// }

// let mentor = new Mentor(
//   "Filankes",
//   "Filankesov",
//   "01/01/2001",
//   ["Java Script", "C++", "Python"],
//   3
// );

// mentor.showInfo();
// mentor.showAge();
// mentor.showSubjects();
// mentor.showLevel();

// console.log(mentor instanceof Teacher);
// console.log(mentor instanceof Mentor);
// console.log(mentor instanceof Human);
// console.log(mentor instanceof Object);

//#endregion

//#region Polymorphism

// class Human {
//   #id;

//   constructor(name, surname, birthday) {
//     this.#id = Math.floor(Math.random() * 10e6);
//     this.name = name;
//     this.surname = surname;
//     this.birthday = birthday;
//   }

//   showInfo() {
//     console.log(
//       `${this.#id}. ${this.name} | ${this.surname} | ${this.birthday}`
//     );
//   }

//   showAge() {
//     const dateTime = Date.now() - Date.parse(this.birthday);
//     const age = Math.floor(dateTime / 31536000000);
//     console.log(`Age: ${age}`);
//   }
// }

// class Teacher extends Human {
//   constructor(name, surname, birthday, subject = []) {
//     super(name, surname, birthday);
//     this.subject = subject;
//   }

//   showSubjects() {
//     this.subject.forEach((element) => {
//       console.log(element);
//     });
//   }
// }

// let teacher = new Teacher("Kanan", "Yusubov", "03/19/2006", [
//   "Python",
//   "C#",
//   "JS",
// ]);

// // teacher.showInfo();
// // teacher.showSubjects();

// class Mentor extends Teacher {
//   constructor(name, surname, birthday, subject = [], level) {
//     super(name, surname, birthday, subject);
//     this.level = level;
//   }

//   showSubjects() {
//     console.log(this.subject.join(","));
//     document.write(`<ol><li>${this.subject.join("<li>")}</ol>`);
//   }

//   showLevel() {
//     console.log(this.level);
//   }

//   toString() {
//     return `${this.name} ${this.surname} is a ${this.constructor.name}`;
//   }
// }

// let mentor = new Mentor(
//   "Filankes",
//   "Filankesov",
//   "01/01/2001",
//   ["Java Script", "C++", "Python"],
//   3
// );

// console.log(mentor);
// document.write(`Class mentor: ${mentor}`);
// console.log(`Class mentor: ${mentor}`);

//#endregion

//#region  Extends

// class StringInfo extends String {
//   calcLetter(letter) {
//     let count = 0;
//     let index = this.indexOf(letter);
//     while (index != -1) {
//       count++;
//       index = this.indexOf(letter, index + 1);
//     }
//     return count;
//   }
// }

// let myNewString = new StringInfo("Lorem Ipsum Dolor sit amer.");
// console.log(`m in ${myNewString} = ${myNewString.calcLetter("m")}`);

//#endregion
