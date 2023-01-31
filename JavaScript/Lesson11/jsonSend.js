let person = {
    name: "Kanan",
    surname: "Yusubov",
    age: 180_000
};

let request;

if (window.XMLHttpRequest) {
    request = new XMLHttpRequest();
} else {
    request = new ActiveXObject("Microsoft.XMLHTTP");
}

let jsonPerson = JSON.stringify(person);
request.open("POST", "server.php");

request.setRequestHeader("Content-Type", "application/json");

request.send(jsonPerson);
