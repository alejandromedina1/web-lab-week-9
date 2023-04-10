class LogInForm extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({
            mode: 'open'
        })
        this.userEmail = this.getAttribute('userEmail')
        this.password = this.getAttribute('password')
    }
    static get observedAttributes() {
        return ['userEmail', 'password']
    }
    render() {
        this.shadowRoot.innerHTML = `
        <link rel = "stylesheet" href = "./src/components/logInForm/style.css">
        <div>
            <h2> Login </h2>
            <form>
                <label > ${this.userEmail} </label>
                <input type="email" id="email" name="email">

                <label > ${this.password} </label>
                <input type="password" id="password-input" name="password">

                <p> Forgot password? </p>

                <p id="no-account-text"> Don't have an account? Create one</p>
                
                <button type="button" id="log-in"> Log In </button>
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

customElements.define('log-in-form', LogInForm)
export default LogInForm