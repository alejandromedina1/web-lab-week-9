class SignUpForm extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({
            mode: 'open'
        })
        this.userName = this.getAttribute('userName')
        this.userLastName = this.getAttribute('userLastName')
        this.userPhone = this.getAttribute('userPhone')
        this.userEmail = this.getAttribute('userEmail')
        this.password = this.getAttribute('password')
    }
    static get observedAttributes() {
        return ['userName', 'userLastName', 'userPhone', 'userEmail', 'password']
    }
    render() {
        this.shadowRoot.innerHTML = `
        <link rel = "stylesheet" href = "./src/components/signUpForm/style.css">
        <div class ="container">
            <h2> Sign Up </h2>
            <form> 
                <label > ${this.userName} </label>
                <input type="text" id="name" name="name">

                <label > ${this.userLastName} </label>
                <input type="text" id="last-name" name="lastname">

                <label > ${this.userPhone} </label>
                <input type="phone" id="phone" name="phone">

                <label > ${this.userEmail} </label>
                <input type="email" id="email" name="email">
                
                <label > ${this.password} </label>
                <input type="password" id="password" name="password">

                <div>
                    <p id="account-text"> Already have an account? Log In</p>
                </div>

                <button type="button" id="sign-up-button"> Sign Up </button>
            </form>
        </div>
        `
    }
    connectedCallback() {
        this.render()
    }
    attributeChangedCallback(propName, oldValue, newValue) {
        this[propName] = newValue
        this.render()
        console.log(`attr ${propName} changed`)
    }
}

customElements.define('sign-up-form', SignUpForm)
export default SignUpForm