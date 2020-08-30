class tourHN1 extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({
            mode: 'open'
        });
        this._shadowRoot.innerHTML = `
        <div id="name"></div>
        <div id="age"></div>
        <img src="" alt="">
        <div id="date-modified">${new Date().toLocaleString()}</div>
        `;
        this.$name = this._shadowRoot.querySelector("#name");
        this.$age = this._shadowRoot.querySelector("#age");
        this.$img = this._shadowRoot.querySelector("img");
    }
    static get observedAttributes() {
        return ['name', "age", "img", "description"];
    }
    attributeChangedCallback(name, oldval, newval) {
        if( name === 'name'){
            this.$name.innerHTML = newval;
        } else if(name === 'img'){
            this.$img.setAttribute("src", newval);
            this.$img.setAttribute("alt", this.$name.innerHTML)
        }
        else if(name === 'age'){
            this.$age.innerHTML = (newval);
        }
    }
}
window.customElements.define("tour-hn",tourHN1);