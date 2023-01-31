let subBtn = document.getElementById("submit-btn");
subBtn.onclick = function () {
    let nameValue = document.getElementById("name-input").value;
    let phoneValue = document.getElementById("phone-input").value;
    let data = `name=${encodeURIComponent(nameValue)}&
                phone=${encodeURIComponent(phoneValue)}`;

    let request;

    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    } else {
        request = new ActiveXObject("Microsoft.XMLHTTP");
    }

    request.open("POST", "server.php");

    request.onreadystatechange = function () {
        console.log(`readyState = ${request.readyState}`);
        if (request.readyState === 4 && request.status === 200) {
            alert(`Hello ${nameValue} we are calling tou after 5 minutes`)
        }
    };

    request.setRequestHeader(
        'Content-Type',
        'application/x-www-form-urlencoded'
    );

    request.send(data)

}