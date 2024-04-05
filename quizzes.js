document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get user responses
    const responses = {
      q1: document.querySelector('input[name="q1"]:checked').value,
      q2: document.querySelector('input[name="q2"]:checked').value,
      q3: document.querySelector('input[name="q3"]:checked').value,
      q4: document.querySelector('input[name="q4"]:checked').value,
      q5: document.querySelector('input[name="q5"]:checked').value,
      q6: document.querySelector('input[name="q6"]:checked').value,
      q7: document.querySelector('input[name="q7"]:checked').value,
      q8: document.querySelector('input[name="q8"]:checked').value,
      q9: document.querySelector('input[name="q9"]:checked').value,
      q10: document.querySelector('input[name="q10"]:checked').value
      // Add more questions here if needed
    };
  
    // Analyze responses and draw conclusion
    const diseases = {
      'Chronic Kidney Disease': ['yes', 'yes', 'no', 'yes', 'no', 'yes', 'yes', 'no', 'yes', 'no'],
      'Chronic Obstructive Pulmonary Disease (COPD)': ['no', 'yes', 'no', 'yes', 'yes', 'yes', 'yes', 'no', 'no', 'no'],
      'Diabetes': ['yes', 'no', 'yes', 'no', 'no', 'no', 'yes', 'no', 'no', 'yes'],
      'Heart Disease': ['no', 'yes', 'no', 'yes', 'no', 'no', 'yes', 'no', 'yes', 'yes'],
      'Hypertension': ['yes', 'yes', 'no', 'no', 'no', 'no', 'yes', 'no', 'yes', 'no'],
      'Arthritis': ['no', 'no', 'no', 'no', 'no', 'yes', 'yes', 'no', 'no', 'no'],
      'Asthma': ['no', 'yes', 'no', 'no', 'yes', 'yes', 'yes', 'no', 'no', 'no'],
      'Alzheimer\'s Disease': ['yes', 'yes', 'yes', 'no', 'no', 'yes', 'yes', 'no', 'yes', 'no'],
      'Osteoporosis': ['no', 'no', 'no', 'no', 'no', 'no', 'yes', 'no', 'no', 'no'],
      'Obesity': ['yes', 'yes', 'yes', 'no', 'yes', 'yes', 'yes', 'no', 'no', 'no'],
      'Stroke': ['no', 'yes', 'no', 'yes', 'no', 'no', 'yes', 'no', 'yes', 'yes'],
      'Depression': ['yes', 'no', 'yes', 'no', 'no', 'no', 'yes', 'no', 'no', 'yes'],
      'Cancer': ['yes', 'yes', 'yes', 'yes', 'no', 'no', 'yes', 'no', 'no', 'no'],
      'Parkinson\'s Disease': ['yes', 'no', 'yes', 'no', 'no', 'yes', 'yes', 'no', 'yes', 'no'],
      'Rheumatoid Arthritis': ['no', 'no', 'no', 'no', 'no', 'yes', 'yes', 'no', 'no', 'no'],
      'Chronic Fatigue Syndrome': ['yes', 'no', 'yes', 'no', 'no', 'yes', 'yes', 'no', 'yes', 'yes'],
      'Crohn\'s Disease': ['yes', 'no', 'yes', 'no', 'no', 'yes', 'yes', 'no', 'no', 'no'],
      'Ulcerative Colitis': ['yes', 'no', 'yes', 'no', 'no', 'yes', 'yes', 'no', 'yes', 'no'],
      'Gout': ['yes', 'no', 'yes', 'no', 'no', 'yes', 'yes', 'no', 'no', 'yes']
      // Add more diseases with their corresponding responses here
    };
  
    let conclusion = 'Based on your responses, you may be suffering from: ';
    let foundDisease = false;
  
    for (const [disease, criteria] of Object.entries(diseases)) {
      let matchCount = 0;
      for (const [key, value] of Object.entries(criteria)) {
        if (responses[key] === value) {
          matchCount++;
        }
      }
      if (matchCount === Object.keys(criteria).length) {
        conclusion += `${disease}, `;
        foundDisease = true;
      }
    }
  
    if (!foundDisease) {
      conclusion += 'No specific disease identified based on your responses.';
    } else {
      conclusion = conclusion.slice(0, -2); // Remove trailing comma and space
    }
  
    document.getElementById('diseaseConclusion').textContent = conclusion;
    document.getElementById('result').style.display = 'block';
  });