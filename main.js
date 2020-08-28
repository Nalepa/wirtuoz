const sectionPlace = document.querySelector("#sectionPlace");

const mainPageSectionHTML = document.querySelector("#mainPageSection").innerHTML;
document.querySelector("#mainPageSection").remove();
const offerPageSectionHTML = document.querySelector("#offerPageSection").innerHTML;
document.querySelector("#offerPageSection").remove();

const buttons = [document.querySelector("#mainPageButton"), document.querySelector("#offerPageButton"), document.querySelector("#aboutPageButton"), document.querySelector("#contactPageButton")]
buttons[0].addEventListener('click', () => {
    sectionPlace.innerHTML = mainPageSectionHTML
    setColor(0);
})
buttons[0].click();

buttons[1].addEventListener('click', () => {
    sectionPlace.innerHTML = offerPageSectionHTML;
    setColor(1);
})

buttons[2].addEventListener('click', () => {
    fetchHtml("about.html");
    setColor(2);
})

buttons[3].addEventListener('click', () => {
    fetchHtml("contact.html");
    setColor(3);
    document.querySelector("#submitButton").addEventListener('click', onSubmit);
})

function setColor(index){
    buttons.forEach((button)=>{
        button.style.backgroundColor = "transparent";
    })
    buttons[index].style.backgroundColor = "black";
}

function onSubmit(e) {
    e.preventDefault();
    if(firstNameInputField.value === '' || lastNameInputField.value === ''
    || emailInputField.value === '' || messageInputField.value === '')
    {
        statement.innerHTML = "Pola nie moga byc puste";
        statement.classList.add("error");
        setTimeout(() =>
        { 
            statement.innerHTML = '';
            statement.classList.remove("error");
        }, 3000);
    }
    else{
        statement.innerHTML = "Wyslano wiadomosc";
        statement.classList.add("success");
        ClearFields();
        setTimeout(() =>
        { 
            statement.innerHTML = '';
            statement.classList.remove("success");
        }, 3000);
    }
}

function ClearFields()
{
    firstNameInputField.value = ''
    lastNameInputField.value = ''
    emailInputField.value = ''
    messageInputField.value = ''
}

function fetchHtml(path) {
    fetch(path)
    .then((response) => {
      return response.text();
    })
    .then((html) => {
        sectionPlace.innerHTML = html     
    });
  }