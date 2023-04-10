import './components/logInForm/logInForm.js'
import './components/signUpForm/signUpForm.js'
import './components/logged/logged.js'

let app = document.getElementById("app")
let logIn;
let signUp;
let logged;
renderLogIn()
app.append(logIn)
rendersignUp()
renderLogged()
setChangeScreenButtons()


//__________________________________________________________________________________

function renderLogIn() {
    logIn = document.createElement('log-in-form')
    updateAttribute(logIn, 'formName', 'Log In')
    updateAttribute(logIn, 'userEmail', 'Email')
    updateAttribute(logIn, 'password', 'Password')
}

function rendersignUp() {
    signUp = document.createElement('sign-up-form')
    updateAttribute(signUp, 'formName', 'Sign In')
    updateAttribute(signUp, 'userName', 'First Name')
    updateAttribute(signUp, 'userLastName', 'Last Name')
    updateAttribute(signUp, 'userPhone', 'Phone')
    updateAttribute(signUp, 'userEmail', 'Email')
    updateAttribute(signUp, 'password', 'Password')
}

function renderLogged() {
    logged = document.createElement('logged-section')
    //let json = localStorage.getItem(email)
    //let data = JSON.parse(json)
    updateAttribute(logged, 'userName', 'Usuario')
}

function updateAttribute(item, key, value) {
    item[key] = value
    item.setAttribute(key, value)
}

function setChangeScreenButtons() {
    const buttonTosignUp = logIn.shadowRoot.querySelector("#no-account-text")
    const buttonToLogIn = signUp.shadowRoot.querySelector('#account-text')
    const buttonToLogout = logged.shadowRoot.querySelector("#log-out")

    
    const logUser = logIn.shadowRoot.querySelector("#log-in")
    logUser?.addEventListener('click', () => {
        logInUser()
    })
    
    const signUpButton = signUp.shadowRoot.querySelector('#sign-up-button')
    signUpButton?.addEventListener('click', () => {
        signUpUser()
    })
    
    buttonToLogIn ?.addEventListener('click', () => goToLogIn())
    buttonTosignUp ?.addEventListener('click', () => goTosignUp())
    buttonToLogout ?.addEventListener('click', () => logoutSession())

}

function goTosignUp() {
    logIn.remove()
    app.append(signUp)
    setChangeScreenButtons()
}

function goToLogIn() {
    signUp.remove()
    app.append(logIn)
    setChangeScreenButtons()
}

function goToLogged() {
    logIn.remove()
    app.append(logged)
    console.log(logged.shadowRoot)
    setChangeScreenButtons()
}

function logoutSession() {
    logged.remove()
    app.append(logIn)
    setChangeScreenButtons()
}

//__________________________________________________________________________________

function signUpUser() {
    let userName = signUp.shadowRoot.getElementById('name').value
    let userlastName = signUp.shadowRoot.getElementById('last-name').value
    let userPhone = signUp.shadowRoot.getElementById('phone').value
    let userEmail = signUp.shadowRoot.getElementById('email').value
    let userPassword = signUp.shadowRoot.getElementById('password').value


    let user = {
        name: userName,
        lastName: userlastName,
        phone: userPhone,
        email: userEmail,
        password: userPassword
    }

    let json = JSON.stringify(user)
    localStorage.setItem(userEmail, json)
    console.log(localStorage.getItem(userEmail))
    console.log(json);
    console.log('submitted!');

    userName = signUp.shadowRoot.getElementById('name').value = ''
    userlastName = signUp.shadowRoot.getElementById('last-name').value = ''
    userPhone = signUp.shadowRoot.getElementById('phone').value = ''
    userEmail = signUp.shadowRoot.getElementById('email').value = ''
    userPassword = signUp.shadowRoot.getElementById('password').value = ''
}



//__________________________________________________________________________________

function logInUser() {
    let userEmail = logIn.shadowRoot.getElementById('email').value
    let userPassword = logIn.shadowRoot.getElementById('password-input').value

    let user = localStorage.getItem(userEmail)
    let data = JSON.parse(user)

    if (user === null) {
        console.log('wrong username')
    } else if (userEmail === data.email && userPassword === data.password) {
        console.log('Logger!')
        updateAttribute(logged, 'userName', data.email)
        goToLogged()
    } else {
        console.log('wrong password')
    }
}