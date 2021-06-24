let firstName = document.getElementById('name')
let lastName = document.getElementById('lastName')
let email = document.getElementById('email')
let password = document.getElementById('password')
let form = document.getElementById('form')
let pattern =/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    valider(e);
})

function valider(e){
    // for first name
    if(firstName.value == ""){
        let messName = document.getElementById('messName')

        firstName.style.border = "2px solid hsl(0, 100%, 74%)"
        firstName.classList.add('error')
        messName.innerHTML = 'First name cannot be empty'
    }

    else{
        firstName.style.border = "2px solid hsl(154, 59%, 51%)"
        messName.innerHTML = ''
    }
// for last Name
    if(lastName.value == ""){
        let messLastName = document.getElementById('messLastName')

        lastName.style.border = "2px solid hsl(0, 100%, 74%)"
        lastName.classList.add('error')
        messLastName.innerHTML = 'Last name cannot be empty'
    }
    else{
        lastName.style.border = "2px solid hsl(154, 59%, 51%)"
        messLastName.innerHTML = ''
    }

    // for email
    if(email.value == ""){
        let messEmail = document.getElementById('messEmail')

        email.style.border = "2px solid hsl(0, 100%, 74%)"
        email.classList.add('error')
        messEmail.innerHTML = 'Last name cannot be empty'
    }

    else if(pattern.test(email.value)){
        email.style.border = "2px solid hsl(154, 59%, 51%)"
        messEmail.innerHTML = ''
    }
    else{
        email.style.border = "2px solid hsl(0, 100%, 74%)"
        email.classList.add('error')
        messEmail.innerHTML = 'Looks like this is not an email'
    }

    // For password
    if(password.value == ""){
        let messPassword = document.getElementById('messPassword')

            password.style.border = "2px solid hsl(0, 100%, 74%)"
        password.classList.add('error')
        messPassword.innerHTML = 'Password cannot be empty'
    }
    else{
        password.style.border = "2px solid hsl(154, 59%, 51%)"
        messPassword.innerHTML = ''
    }
}