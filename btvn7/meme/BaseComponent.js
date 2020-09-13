class BaseComponent extends HTMLElement {
    props;
    state;
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({
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

    /**
     * in html ra ngoaif manf hnh
     * gan su kien cho cac the ben trong component
     */
    render() {
        this._shadowRoot.innerHTML = `
          
        `
    }


    /**
     * duoc goi sau khi component sinh ra 
     */
    componentDidMount() {


    }

    /**
     * duoc goi sau khi props // state thay doi, sau khi render
     */
    componentDidUpdate() {


    }

    /**
     * duoc goi truoc khi cpn bien mat :D tran troi
     */
    componentWillUnmount() {


    }

}
export {
    BaseComponent
}