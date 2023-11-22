const scriptURL = 'https://script.google.com/macros/s/AKfycbyaHM_eRk3-yoPS7dF7d9SNes1rBV58tqrEPsSNKgHnH3tLmMQk9pflB5QQ5Ru7lob3/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
