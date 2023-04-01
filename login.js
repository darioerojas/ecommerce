// Get the form element
var form = document.getElementById("login-form");
// Add an event listener for the submit event
form.addEventListener("submit", function(event) {
  // Prevent the default behavior of the form
  event.preventDefault();
  // Get the username and password values
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  // Validate the username and password
  if (username === "admin" && password === "1234") {
    // If valid, redirect to another page
    window.location.href = "../screens/administrador.html";
  } else {
    // If invalid, show an alert message
    alert("Invalid username or password");
  }
});