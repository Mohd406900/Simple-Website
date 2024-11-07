// Simulate user credentials
const validUsername = "user";
const validPassword = "password";

// Function to handle login
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const statusMessage = document.getElementById("statusMessage");

    if (username === validUsername && password === validPassword) {
        statusMessage.textContent = "Logged in successfully!";
        statusMessage.style.color = "green";
        document.getElementById("loginForm").reset();
    } else {
        statusMessage.textContent = "Invalid credentials, please try again.";
        statusMessage.style.color = "red";
    }
}

// Function to handle logout
function logout() {
    const statusMessage = document.getElementById("statusMessage");
    statusMessage.textContent = "Logged out successfully!";
    statusMessage.style.color = "blue";
}
