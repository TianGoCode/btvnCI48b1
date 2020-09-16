import {
    BaseComponent
} from "./BaseComponent.js"




class List extends BaseComponent {
    constructor() {
        super();
        this.state = {
            memes: [{
                    name: 'doge destroyer',
                    image: 'https://scontent.fhan4-1.fna.fbcdn.net/v/t1.15752-9/118482144_945644442579379_6289872433818969124_n.jpg?_nc_cat=105&_nc_sid=b96e70&_nc_ohc=VJzLQXdXm4oAX8wWJcN&_nc_ht=scontent.fhan4-1.fna&oh=388f21203b3633f734b0505738794922&oe=5F70A74F',
                    description: 'a doge with kanata',
                    'date-modified': '2020-09-14',
                    'is-editing': 'false',
                },
                {
                    name: 'đầu cắt moi',
                    image: 'https://s.memehay.com/files/posts/20200907/1-2-3-chu-ca-koi-vai-loz-luon-dau-cat-moi-958d4a9f948ea50897a826156ecfe357.jpg',
                    description: 'người ae cho xin cái địa chỉ',
                    'date-modified': '2020-09-14 05:00',
                    'is-editing': 'true',
                },
                {
                    name: 'à thế à',
                    image: 'data:image/jpeg;base64,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',
                    description: 'a doge with kanata',
                    'date-modified': '2020-09-14',
                    'is-editing': 'false',
                },
                {
                    name: 'doge destroyer1',
                    image: 'https://scontent.fhan4-1.fna.fbcdn.net/v/t1.15752-9/118482144_945644442579379_6289872433818969124_n.jpg?_nc_cat=105&_nc_sid=b96e70&_nc_ohc=VJzLQXdXm4oAX8wWJcN&_nc_ht=scontent.fhan4-1.fna&oh=388f21203b3633f734b0505738794922&oe=5F70A74F',
                    description: 'a doge with kanata',
                    'date-modified': '11:05',
                    'is-editing': 'false',
                }
            ]
        }
    }
    render() {
        let html = ''
        let tmp = this.state.memes
        for (let i = 0; i < tmp.length; i += 3) {
            html += `<tr>`
            for (let j = i; j < i + 3; j++) {
                if (tmp[j]) {
                    html += `
                    <td>
                    <meme-container name="${tmp[j].name}" image="${tmp[j]["image"]}" description="${tmp[j].description}" date-modified="${tmp[j]["date-modified"]}" is-editing="${tmp[j]["is-editing"]}"></meme-container>
                    </td>
                    
             `;
                } else {
                    break
                }

            }
            html += `</tr>`
        }


        this._shadowRoot.innerHTML = /*html*/ `
       
        <form id="adding">
            <input type="text" name="name" placeholder="Name"><br>
            <input type="text" name="image" placeholder="Image source"><br>
            <input type="text" name="description" placeholder="Description"><br>
            <input type="datetime-local" name="dateModified" placeholder="Date modified"><br>
            <button>Add</button>
        </form>
        <div class="list">
            <table>
                <tr>
                ${html}
                </tr>
            </table>
       </div>`;


        this.$list = this._shadowRoot.querySelector('.list');
        this.$list.addEventListener('delete-meme', (event) => {
            this.deleteMeme(event.detail.name, event.detail.image)
        })

        this.$list.addEventListener('edit-meme', (event) => {
            this.editMeme(event.detail)
        })

        this.$list.addEventListener('save-meme',(event) => {
            this.saveMeme(event.detail)
        })

        this.$formAdd = this._shadowRoot.getElementById('adding');
        this.$formAdd.onsubmit = (event) => {
            event.preventDefault();
            let newMeme = {
                name: this.$formAdd.name.value,
                image: this.$formAdd.image.value,
                description: this.$formAdd.description.value,
                "date-modified": this.$formAdd.dateModified.value
            };
            this.setState({
                memes: [
                    ...this.state.memes,
                    newMeme
                ]
            })
        }
    }

    deleteMeme(name, img) {
        this.setState({
            memes: this.state.memes.filter((item) => {
                return item.name != name && item.image != img;
            })
        })
    }

    editMeme(detail) {
        this.setState({
            memes: this.state.memes.map((item) => {
                if (item.image == detail.image) {
                    item["is-editing"] = 'true';

                }
                return item
            })
        })
    }

    saveMeme(detail) {
        this.setState({
            memes: this.state.memes.map((item) => {
                if(item.image == detail.oldImg) {
                    item.image = detail.newImg
                    item.name = detail.newName
                    item.description = detail.newDescription
                    item['date-modified'] = detail.newDate
                    item['is-editing'] = 'false'
                };
                return item
            })
        })
    }

}
window.customElements.define("list-container", List);