// In this script file, you can fetch and display upcoming medication reminders dynamically using JavaScript.
// For demonstration purposes, I'm leaving it empty.

// You can fetch the medication reminders from your backend API and dynamically update the HTML content accordingly.
// For example:
// fetch('api/medication/reminders')
//   .then(response => response.json())
//   .then(data => {
//     const medicationRemindersDiv = document.getElementById('medicationReminders');
//     // Populate medication reminders into medicationRemindersDiv
//   })
//   .catch(error => console.error('Error fetching medication reminders:', error));
function toggleProfile() {
    var profileInfo = document.getElementById("profileInfo");
    profileInfo.style.display = (profileInfo.style.display === "block") ? "none" : "block";
  }
  
  function toggleMenu() {
    var menu = document.querySelector(".menu");
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
  }
  function signOut() {
    // Here you can add the code to sign the user out.
    // For example, you may want to clear any stored user session or authentication tokens.
    // You can also redirect the user to a sign-out page or perform any other necessary actions.
  
    // For demonstration, let's assume we're clearing some session data and redirecting to a sign-in page.
    sessionStorage.clear(); // Clear session data
    window.location.href = "login.html"; // Redirect to sign-in page
  }