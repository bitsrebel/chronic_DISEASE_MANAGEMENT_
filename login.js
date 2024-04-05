document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Simulated login functionality
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
   
    window.location.href = 'home.html';
  });