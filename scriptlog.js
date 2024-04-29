document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault(); // Prevent form submission
    // Here you can add your login logic
    // For demonstration, let's just redirect to index.html after successful login
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    // Check login credentials (replace this with your actual login logic)
    if(username === "niru" && password === "123") {
        window.location.href = "index.html"; // Redirect to index.html
    } else {
        alert("Invalid username or password. Please try again.");
    }
});