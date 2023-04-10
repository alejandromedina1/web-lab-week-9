class Logged extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({
            mode: 'open'
        })
        this.userName = this.getAttribute('userName')
    }
    static get observedAttributes() {
        return ['userName']
    }
    render() {
        this.shadowRoot.innerHTML = `
        <link rel = "stylesheet" href = "./src/components/signUpForm/style.css">
        <div class ="container">
        <h2> Your Account </h2>    
        <h2> ${this.userName} </h2>
            <button type="button" id="log-out"> Logout </button>
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

customElements.define('logged-section', Logged)
export default Logged