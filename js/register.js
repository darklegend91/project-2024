document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.querySelector(".form-box");
    const nameField = document.getElementById("user_name");
    const emailField = document.querySelector(
      '.input-field[placeholder="Username or Email"]'
    );
    const passwordField = document.querySelector(
      '.input-field[placeholder="Password"]'
    );
    const confirmPasswordField = document.querySelector(
      '.input-field[placeholder="Confirm Password"]'
    );
    const submitButton = document.querySelector(".submit");

    submitButton.addEventListener("click", (event) => {
      event.preventDefault();

      const name = nameField.value.trim();
      const email = emailField.value.trim();
      const password = passwordField.value;
      const confirmPassword = confirmPasswordField.value;

      if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
      }

      if (!name || !email || !password || !confirmPassword) {
        alert("Please fill out all fields.");
        return;
      }

      const userData = {
        name: name,
        email: email,
        password: password,
      };

      localStorage.setItem("user", JSON.stringify(userData));

      alert("Registration successful!");
      window.location.href = "../index.html";
    });
  });