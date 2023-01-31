let student = {
    FirstName: "Kanan",
    LastName: "Yusubov",
    Age: 17,
    isStudent: false,
    contactInfo: {
        Phone: "055-555-55-55",
        Email: "filankes@fesmankes.com",
    },
    Disciplines: ["Python", "Json", "Marathon", "Patron"],
    //   someProperty: undefined,
    //   [Symbol("id")]: 1,
};

// JSON.stringify(obj [, replace, space])
//
// let jsonStudent2 = JSON.stringify(student, ["FirstName","LastName","contactInfo","Disciplines"]);
//
// alert(jsonStudent2);

// let jsonStudent = JSON.stringify(student);

// alert(jsonStudent);


// let jsonStudent3 = JSON.stringify(student, ["FirstName","LastName","contactInfo","Disciplines"],4);
//
// alert(jsonStudent3);

let jsonStudent4 = JSON.stringify(student, null, 4);
// alert(jsonStudent4);
let student2 = JSON.parse(jsonStudent4);

// alert(student.FirstName)

function CheckIsStudent(key, value) {
    if (key === 'isStudent' && value === false) {
        return undefined;
    }
    return value;
}


let student3 = JSON.parse(jsonStudent4, CheckIsStudent);

alert(JSON.stringify(student3, null, 3));

// Circle reference not be serialising
// let First = {
//     name: "first",
// };
//
// let Second = {
//     name: "Second",
// };
//
// First.parent = Second;
//
// Second.child = First;
//
// let jsonFail = JSON.stringify(Second);
// console.log(jsonFail)
//

