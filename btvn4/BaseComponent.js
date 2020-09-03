class BaseComponent extends HTMLElement {
    props;
    state;
    constructor() {
        super();
        this._shadowroot = this.attachShadow({
            mode: 'open'
        })
        this.props = {};
        this.state = {};
    }

    connectedCallback() {
        this.render();
        this.componentDidMount();
    }

    attributeChangedCallback(name, oldval, newval) {
        this.props[name] = newval;
        this.render();
        this.componentDidUpdate();
    }

    disconnectedCallback() {
        this.componentWillUnmount();

    }

    setState(newState) {
        this.state = newState;
        this.render();
        this.componentDidUpdate();
    }


    render() {
        this._shadowroot.innerHTML = `
        <div class="manga-container">
        <div>
            <img src=${this.props.image} alt=${this.props.name}>
        </div>
        <div>
            <span id="likes">${this.props.likes}</span><span id="views">${this.props.views}</span>
        </div>
        <div id="name">${this.props.name}</div>
   </div>
        `
    }

   
    componentDidMount() {

    }

   
    componentDidUpdate() {

    }

  
    componentWillUnmount() {

    }

}
export {
    BaseComponent
}