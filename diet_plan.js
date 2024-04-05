const searchForm = document.getElementById('searchForm');

searchForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const diseaseInput = document.getElementById('diseaseInput').value.toLowerCase();
  const dietPlans = document.querySelectorAll('.diet-plan');

  dietPlans.forEach(function(plan) {
    const diseaseName = plan.querySelector('h3').textContent.toLowerCase();
    if (diseaseName.includes(diseaseInput)) {
      plan.style.display = 'block';
    } else {
      plan.style.display = 'none';
    }
  });
});