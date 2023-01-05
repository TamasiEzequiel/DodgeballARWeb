let button = document.getElementById('buttonContact');
let visual = document.getElementById('vForm');

function btnContact() {

    visual.style.display = "flex";
    button.style.display = "none";
   
}

button.addEventListener('click', btnContact)