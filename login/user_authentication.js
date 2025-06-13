document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById("loginForm");
  
  if (loginForm)
 {
    loginForm.addEventListener("submit", function(e) 
    {
      e.preventDefault();
      const enteredEmail = document.getElementById("email").value;
      const enteredPassword = document.getElementById("password").value;
      const storedUser = JSON.parse(localStorage.getItem("user"));

      if (storedUser && enteredEmail === storedUser.email && enteredPassword === storedUser.password) {
        alert("Login successful!");
        window.location.href = "dashboard.html";
      } 
      else 
      {
        alert("Invalid email or password.");
      }
    });
  }
});
