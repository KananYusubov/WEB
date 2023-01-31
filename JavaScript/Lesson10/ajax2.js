let request;

if (window.XMLHttpRequest) {
  request = new XMLHttpRequest();
} else {
  request = new ActiveXObject("Microsoft.XMLHTTP");
}

request.open("GET", "http://www.omdbapi.com/?t=Avatar&y=2022&apikey=69b0e7cd");
// request.responseType = 'json'
request.onload = function () {
  if (request.status === 200) {
    alert(request.response);
  }
};

request.send();
