function checkLogin() {
 var username = document.getElementById
  ("form_login").username.value;
 var password = document.getElementById
  ("form_login"). password.value;
  if (username == "admin" &&  password == "888")
  alert("berhasil login");
  window.location = "loop.html";
  
  
}

document.getElementById("form_login").addEventListener
    ("submit", function(event) {
     event.preventDefault();
     checkLogin();
    });
