let button = document.getElementById('buttonContact');
let visual = document.getElementById('vForm')

function btnContact() {

    visual.style.display = "flex";
    button.style.display = "none";
   
}

button.addEventListener('click', btnContact);


/*
let form = document.getElementById('signup-form');

// Function to check that the input field is not empty while submitting
function requireValue(input) {
    return !(input.value.trim() === '');
}
// Event listener to perform the validation when user clicks on submit button
form.addEventListener('submit', (event) => {
    requiredFields.forEach((input) => {
        valid = valid|requireValue(input.input);
    });
    if (!valid) {
        event.preventDefault();
    }
});*/
