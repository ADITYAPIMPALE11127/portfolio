
const scriptURL = 'https://script.google.com/macros/s/AKfycby4ZGAQIH_At6R-84tXLZn623Hg9WV2NXLMcoUIt5N7sgd9c0jI1NHR8_vl81au1CNMzQ/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => console.log('Thank you for Contacting', response))
        .catch(error => console.error('Error!', error.message))
})


