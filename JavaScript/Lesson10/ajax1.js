// let request;
//
// if(window.XMLHttpRequest){
//     request = new XMLHttpRequest();
// }
// else{
//     request = new ActiveXObject("Microsoft.XMLHTTP");
// }

// open(method, URL, [, async, user, password]) - initialize request

// send() - request sending

// onreadystatechange
// 0 ~ request not initialized
// 1 ~ request initialized
// 2 ~ request sent
// 3 ~ request working on server
// 4 ~ request finished and  received response server

let request;

if (window.XMLHttpRequest) {
    request = new XMLHttpRequest();
} else {
    request = new ActiveXObject("Microsoft.XMLHTTP");
}

request.open('GET', "text.txt");
request.responseType = "json";
request.onreadystatechange = function () {
    console.log(`readyState = ${request.readyState}`);
    if (request.readyState === 4) {
        alert('request response')
    }
}


request.send();
// alert(request.statusText)
