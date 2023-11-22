/*
const scriptURL = 'https://script.google.com/macros/s/AKfycbyaHM_eRk3-yoPS7dF7d9SNes1rBV58tqrEPsSNKgHnH3tLmMQk9pflB5QQ5Ru7lob3/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
*/

        function updateSectionOptions() {
            var gradeInput = document.getElementById('gradeInput');
            var sectionInput = document.getElementById('sectionInput');
            var selectedGrade = gradeInput.options[gradeInput.selectedIndex].value;

            // Clear existing options
            sectionInput.innerHTML = '<option value="" disabled selected>Select Section</option>';

            // Add new options based on the selected grade
            switch (selectedGrade) {
                case '7':
                    addOption(sectionInput, 'Camia');
                    addOption(sectionInput, 'Carnation');
                    addOption(sectionInput, 'Moonstone');
                    break;
                case '8':
                    addOption(sectionInput, 'Dove');
                    addOption(sectionInput, 'Nightingale');
                    addOption(sectionInput, 'Hummingbird');
                    break;
                case '9':
                    addOption(sectionInput, 'Newton');
                    addOption(sectionInput, 'Einstein');
                    addOption(sectionInput, 'Galileo');
                    break;
                case '10':
                    addOption(sectionInput, 'Gold');
                    addOption(sectionInput, 'Silver');
                    addOption(sectionInput, 'Platinum');
                    break;
                case '11':
                    addOption(sectionInput, 'Anderson');
                    addOption(sectionInput, 'Tenneson');
                    break;
                case '12':
                    addOption(sectionInput, 'Heraclitus');
                    addOption(sectionInput, 'Pythagoras');
                    break;
            }
        }

        function addOption(selectElement, optionText) {
            var option = document.createElement('option');
            option.value = optionText;
            option.text = optionText;
            selectElement.add(option);
        }

        const scriptURL = 'https://script.google.com/macros/s/AKfycbyaHM_eRk3-yoPS7dF7d9SNes1rBV58tqrEPsSNKgHnH3tLmMQk9pflB5QQ5Ru7lob3/exec'

        const form = document.forms['contact-form'];
        const overlay = document.getElementById('overlay');

        form.addEventListener('submit', e => {
            e.preventDefault();
            overlay.style.display = 'block'; // Show overlay

            fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                .then(response => {
                    overlay.style.display = 'none'; // Hide overlay
                    alert("Thank you! Your form is submitted successfully.");

                    // Reset the form
                    form.reset();
                })
                .catch(error => {
                    overlay.style.display = 'none'; // Hide overlay on error
                    console.error('Error!', error.message);
                });
        });
