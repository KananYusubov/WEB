// document.cookie =
//   "registered=User;expires=Sat,21 Jan 2023 19:21:00 GMT; path=/";

// document.cookie = "registered=User;expires=Sat,01/21/2023 19:21:00 GMT; path=/";

// document.cookie = "registered=User;expires=Sat,2023-01-21 19:21:00 GMT; path=/";

// document.cookie =
//   "registered=User;expires=Sat,2023-01-21 19:21:00 GMT; path=/; domain=itstep.org;secure";

document.cookie =
  "registered=User;expires=Fri, 20 Jan 2023 15:40:00 GMT; path=/";
document.cookie =
  "organization=Step;expires=Fri, 20 Jan 2023 15:40:00 GMT; path=/";

window.out.innerHTML = document.cookie;
