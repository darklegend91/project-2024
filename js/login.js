document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.querySelector('.submit');
    const emailField = document.querySelector('.input-field[placeholder="Username or Email"]');
    const passwordField = document.querySelector('.input-field[placeholder="Password"]');
  
    loginButton.addEventListener('click', (event) => {
      event.preventDefault();
  
  
      const email = emailField.value.trim();
      const password = passwordField.value;
  
  
      const storedUser = JSON.parse(localStorage.getItem('user'));
  
  
      if (storedUser && storedUser.email === email && storedUser.password === password) {
        alert('Login successful!');
        window.location.href = 'home.html';
      } else {
        alert('Invalid email or password. Please try again.');
      }
    });
  });
  