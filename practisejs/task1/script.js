


document.getElementById("signupForm").addEventListener("submit", validateForm);

function validateForm(event) {
    event.preventDefault(); 
    let isValid = true;
    clearErrors();
    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();
    const phoneNumber = document.getElementById("phoneNumber").value.trim();
    
     if (fullName === "") {
        displayError("fullNameError", "Full Name is required.");
        isValid = false;}
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
     if (email === "") {
        displayError("emailError", "Email is required.");
        isValid = false;} else if (!emailRegex.test(email)) {
        displayError("emailError", "Email must be a valid format.");
        isValid = false;}
    if (password === "") {
        displayError("passwordError", "Password is required.");
        isValid = false;
    } else if (password.length < 6) {
        displayError("passwordError", "Password must be at least 6 characters.");
        isValid = false;}
    if (confirmPassword === "") {
        displayError("confirmPasswordError", "Please confirm your password.");
        isValid = false;} 
        else if (confirmPassword !== password) {
        displayError("confirmPasswordError", "Passwords do not match.");
        isValid = false; }

    const phoneRegex = /^[0-9]+$/;
    if (phoneNumber === "") {
        displayError("phoneNumberError", "Phone number is required.");
        isValid = false;
    } else if (!phoneRegex.test(phoneNumber)) {
        displayError("phoneNumberError", "Phone number must contain only digits.");
        isValid = false;
    }

    if (isValid) {
        document.getElementById("successMessage").innerText = "Registration Successful!";
        document.getElementById("successMessage").style.color = "green";
    }
}

function clearErrors() {
    const errorMessages = document.querySelectorAll("span[id='Error']");
    errorMessages.forEach(error => error.innerText = "");
}

function displayError(fieldId, message) {
    document.getElementById(fieldId).innerText = message;
    document.getElementById(fieldId).style.color = "red";
}
