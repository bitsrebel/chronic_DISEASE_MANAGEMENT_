document.getElementById('communicationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get user inputs
    const selectedDisease = document.getElementById('disease').value;
    const userName = document.getElementById('name').value;
    const userEmail = document.getElementById('email').value;
    const userMessage = document.getElementById('message').value;
  
    // Lookup healthcare expert based on selected disease
    let expertName, expertEmail, expertPhone;
  
    switch (selectedDisease) {
      case 'Chronic Kidney Disease':
        expertName = 'Dr. John Doe';
        expertEmail = 'john.doe@example.com';
        expertPhone = '+1234567890';
        break;
      case 'Diabetes':
        expertName = 'Dr. Jane Smith';
        expertEmail = 'jane.smith@example.com';
        expertPhone = '+1987654321';
        break;
      case 'Heart Disease':
        expertName = 'Dr. Robert Johnson';
        expertEmail = 'robert.johnson@example.com';
        expertPhone = '+1122334455';
        break;
      // Add more cases for other diseases
      default:
        // Handle default case or show error message
        break;
    }
  
    // Now you have expert's information, you can use it to connect with the user
    console.log(Connecting user "${userName}" with healthcare expert "${expertName}" for disease "${selectedDisease}");
    console.log(Expert Email: ${expertEmail}, Expert Phone: ${expertPhone});
  
    // You can also send an email to the expert with user's message
    console.log(Sending message from "${userName}" to expert "${expertName}": "${userMessage}");
  
    // Optionally, you can reset the form after submission
    this.reset();
  });