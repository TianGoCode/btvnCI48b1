class tourHN1 extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({
            mode: 'open'
        });
        this._shadowRoot.innerHTML = `
        <div id="name"></div>
        <div id="age"></div>
        <div id="address"></div>
        <div id="date-modified">${new Date().toLocaleString()}</div>
        <img src="" alt="">
        `;
        this.$name = this._shadowRoot.querySelector("#name");
        this.$age = this._shadowRoot.querySelector("#age");
        this.$img = this._shadowRoot.querySelector("img");
        this.$address = this._shadowRoot.querySelector("#address");
    }
    static get observedAttributes() {
        return ['name', "age",  "address", "img"];
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
        }  else if(name === 'address'){
            this.$address.innerHTML = (newval);
        }
    }
}
window.customElements.define("tour-hn",tourHN1);
