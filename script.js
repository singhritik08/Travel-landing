const signUp = document.getElementById("showSignup");
const signIn = document.getElementById("showLogin");


// display sign up part
signUp.addEventListener("click", () => {
    // removing the sign in part.
    document.getElementById("sign-in").classList.add("d-none");
    document.getElementById("sign-up").classList.remove("d-none");
    document.getElementById("signupText").classList.add("d-none");
    document.getElementById("loginText").classList.remove("d-none");
    document.getElementById("loginModalLabel").textContent = "Sign Up";
});

// display sign in part

signIn.addEventListener("click" , () => {
    document.getElementById("sign-up").classList.add("d-none");
    document.getElementById("sign-in").classList.remove("d-none");
    document.getElementById("signupText").classList.remove("d-none");
    document.getElementById("loginText").classList.add("d-none");
    document.getElementById("loginModalLabel").textContent = "Login";
});


// login verification
document.getElementById("sign-in").addEventListener("submit", function(event) {
    event.preventDefault();

    let email = document.getElementById("sign-in-email").value.trim();
    let password = document.getElementById("sign-in-password").value.trim();
    let emailError = document.getElementById("email-error");
    let passwordError = document.getElementById("password-error");

    // Reset errors
    emailError.textContent = "";
    passwordError.textContent = "";

    let isValid = true;

    // Email Validation
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
        emailError.textContent = "Invalid email format";
        emailError.style.color = "#699E1F";
        isValid = false;
    }

    // Password Validation
    if (password.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters";
        passwordError.style.color = "#699E1F";
        isValid = false;
    }

    // If validation passes, submit the form
    if (isValid) {
        alert("Login successful!");
        document.getElementById("sign-in").submit();
    }
});

document.getElementById("sign-up").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission if invalid
  
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("sign-up-email").value.trim();
    let password = document.getElementById("sign-up-password").value.trim();
  
    let nameError = document.getElementById("name-error1");
    let emailError = document.getElementById("email-error1");
    let passwordError = document.getElementById("password-error1");
  
    // Reset error messages
    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
  
    let isValid = true;
  
    console.log("Validating Name:", name);
    console.log("Validating Email:", email);
    console.log("Validating Password:", password);
  
    // Name validation
    if (name.length < 3) {
      nameError.textContent = "Name must be at least 3 characters long";
      nameError.style.color = "#699E1F";
      isValid = false;
    }
  
    // Email validation
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      emailError.textContent = "Invalid email format";
      emailError.style.color = "#699E1F";
      console.log("Invalid email detected");
      isValid = false;
    }
  
    // Password validation
    if (password.length < 6) {
      passwordError.textContent = "Password must be at least 6 characters";
      passwordError.style.color = "#699E1F";
      console.log("Invalid password detected");
      isValid = false;
    }
  
    // Submit only if all validations pass
    if (isValid) {
      alert("Sign Up successful!");
      document.getElementById("sign-up").submit();
    }
  });
  
  



