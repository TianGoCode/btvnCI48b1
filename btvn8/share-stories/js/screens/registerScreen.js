import {
    BaseComponent
} from "../../BaseComponent.js"

class RegisterScreen extends BaseComponent {
    constructor() {
        super();
    }

    render() {
        this._shadowRoot.innerHTML = `
            <section class="register-screen">
                <form class="form-register">
                    <input-wrapper class="name" label="Name" type="name" error=""></input-wrapper>
                    <input-wrapper class="email" label="Email" type="email" error=""></input-wrapper>
                    <input-wrapper class="password" label="Password" type="password" error=""></input-wrapper>
                    <input-wrapper class="confirm-password" label="Confirm Password" type="password" error=""></input-wrapper>
                    <button class="btn-register">Register</button>
                </form>
            </section>
        `;

        this.$formRegister = this._shadowRoot.querySelector('.form-register');
        this.$formRegister.onsubmit = (event) => {
            event.preventDefault();
            // lay du lieu tu cac input wrapper
           
            let a = this._shadowRoot.querySelector('.password').value;
            let b = this._shadowRoot.querySelector('.confirm-password').value;
            //ktr dlieu nhap vao, loi thi show

            //luu vao firebase
            if(a==b){
                (async ()=>{
                    await firebase.firestore().collection('user').add({
                        name: this._shadowRoot.querySelector('.name').value,
                        email: this._shadowRoot.querySelector('.email').value,
                        password: this._shadowRoot.querySelector('.password').value,
                    })
                })()
            } else {
                alert('sai mật khẩu nhập lại')
            }
            
        }
    }
}
window.customElements.define('register-screen', RegisterScreen)