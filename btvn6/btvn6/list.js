import {
    BaseComponent
} from "./BaseComponent.js"

class List extends BaseComponent {
    constructor(){
        super();
        this.state = {
            memes: [
                {
                    name : 'doge destroyer',
                    image : 'https://scontent.fhan4-1.fna.fbcdn.net/v/t1.15752-9/118482144_945644442579379_6289872433818969124_n.jpg?_nc_cat=105&_nc_sid=b96e70&_nc_ohc=VJzLQXdXm4oAX8wWJcN&_nc_ht=scontent.fhan4-1.fna&oh=388f21203b3633f734b0505738794922&oe=5F70A74F',
                    description : 'a doge with kanata',
                    'date-modified' : new Date().toLocaleString(),
                },
                {
                    name : 'doge destroyer',
                    image : 'https://scontent.fhan4-1.fna.fbcdn.net/v/t1.15752-9/118482144_945644442579379_6289872433818969124_n.jpg?_nc_cat=105&_nc_sid=b96e70&_nc_ohc=VJzLQXdXm4oAX8wWJcN&_nc_ht=scontent.fhan4-1.fna&oh=388f21203b3633f734b0505738794922&oe=5F70A74F',
                    description : 'a doge with kanata',
                    'date-modified' : new Date().toLocaleString(),
                },
                {
                    name : 'doge destroyer',
                    image : 'https://scontent.fhan4-1.fna.fbcdn.net/v/t1.15752-9/118482144_945644442579379_6289872433818969124_n.jpg?_nc_cat=105&_nc_sid=b96e70&_nc_ohc=VJzLQXdXm4oAX8wWJcN&_nc_ht=scontent.fhan4-1.fna&oh=388f21203b3633f734b0505738794922&oe=5F70A74F',
                    description : 'a doge with kanata',
                    'date-modified' : new Date().toLocaleString(),
                },
                {
                    name : 'doge destroyer',
                    image : 'https://scontent.fhan4-1.fna.fbcdn.net/v/t1.15752-9/118482144_945644442579379_6289872433818969124_n.jpg?_nc_cat=105&_nc_sid=b96e70&_nc_ohc=VJzLQXdXm4oAX8wWJcN&_nc_ht=scontent.fhan4-1.fna&oh=388f21203b3633f734b0505738794922&oe=5F70A74F',
                    description : 'a doge with kanata',
                    'date-modified' : new Date().toLocaleString(),
                }
            ]
        }
    }
    render(){
        let html = ''
        let tmp = this.state.memes
        for(let i = 0; i<tmp.length;i+=3){
            html+= `<tr>`
            for(let j = i; j<i+3;j++){
                if(tmp[j]){
                    html += `
                    <td>
                    <meme-container name="${tmp[j].name}" image="${tmp[j]["image"]}" description="${tmp[j].description}" date-modified="${tmp[j]["date-modified"]}"></meme-container>
                    </td>
             `;
                } else {
                    break
                }
               
            }
            html+= `</tr>`
        }


        this._shadowRoot.innerHTML = `
        <link rel="stylesheet" type="text/css" href="./memeList.css">
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


       this.$formAdd = this._shadowRoot.getElementById('adding');
       this.$formAdd.onsubmit = (event) => {
        event.preventDefault();
        let newMeme = {
            name : this.$formAdd.name.value,
            image : this.$formAdd.image.value,
            description : this.$formAdd.description.value,
            "date-modified" : this.$formAdd.dateModified.value
        };

    //    this.state.memes.push(newMeme);
    //     let $meme = document.createElement('meme-container');
    //     $meme.setAttribute('name',newMeme.name);
    //     $meme.setAttribute('image',newMeme.image);
    //     $meme.setAttribute('description',newMeme.description);
    //     $meme.setAttribute('date-modified',newMeme["date-modified"]);
    //     //append vao list
    //     this.$list = this._shadowRoot.querySelector('.list');
    //     this.$list.appendChild($meme);
    //     console.log("đã thêm newTask");
       this.state.memes.push(newMeme);
        this.render();
        this.componentDidUpdate();
       }
    }
    
}
window.customElements.define("list-container", List);