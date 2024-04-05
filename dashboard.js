function toggleDropdown(id) {
    var dropdownContent = document.getElementById(id);
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  }
  
  function toggleProfile() {
    var profileInfo = document.getElementById("profileInfo");
    profileInfo.style.display = (profileInfo.style.display === "block") ? "none" : "block";
  }
  
  function signOut() {
    // Placeholder function for sign out action
    alert("You have been signed out!");
  }