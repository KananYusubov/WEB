let request;

if (window.XMLHttpRequest) {
    request = new XMLHttpRequest();
} else {
    request = new ActiveXObject("Microsoft.XMLHTTP");
}


request.open("GET", "person.js");
// request.responseType = 'json'
request.onload = function () {
    if (request.status === 200) {
        alert(request.response);
    } else if (request.status === 404) {
        alert('404 not found');
    }
};

request.onloadend = function (event) {
    alert(`Loaded ${event.loaded}`)
}

request.onerror = function () {
    alert("Error");
}

request.send();