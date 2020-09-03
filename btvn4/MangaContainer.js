import {
    BaseComponent
} from "./BaseComponent.js"


    class MangaContainer extends BaseComponent {
        constructor() {
            super();
            this.props = {
                "image": '',
                "name": '',
                "views": '',
                "likes": '',
            }
        }

        static get observedAttributes() {
            return ['image', 'name', 'views', 'likes'];
        }
        render() {
            this._shadowroot.innerHTML = `
<div class="manga-container">

    <div style="position: relative; width:300px;">
        <div>
            <img style="width:100%" src=${this.props.image} alt=${this.props.name}>
        </div>
        <div style="position: absolute; bottom: 5px;background: rgba(0,0,0,0.5);    width: 100%;   
   padding: 2px; 
    color: #fff;">
            <span style=" font-size: 15pt ;color:#fff" id="likes">&#128065 ${this.props.likes} &nbsp;</span><span
                style=" font-size: 15pt; color:#fff" id="views">&#9825 ${this.props.views} &nbsp;</span>
        </div>

    </div>
    <div id="name" style="font-weight: bolder; font-size: 18pt">${this.props.name}</div>
</div>
`
        }
    }
    window.customElements.define('manga-container', MangaContainer)