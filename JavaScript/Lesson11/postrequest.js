let subBtn = document.getElementById("submit-btn");
subBtn.onclick = function () {
    let form = document.getElementById('form');
    let formData = new FormData(form);
    formData.append("date", new Date().toLocaleString());

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
            alert(`Hello ${formData.get("name")} we are calling tou after 5 minutes`);
            alert(formData.get("date"));
        }
    };

    request.setRequestHeader(
        'Content-Type',
        'multipart/form-data'
    );

    request.send(formData);

}