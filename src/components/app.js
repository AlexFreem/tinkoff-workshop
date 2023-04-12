import {Element} from './element';
import {Form} from "./form";
import {List} from "./list";

const API = 'http://90.156.228.208:8080/api/raccoon';

export class App extends Element {
    form;
    list;

    constructor(
        parentElement,
    ) {
        super(parentElement);
        this.init();
    }

    init() {
        this.element.className = 'application';
        this.form = new Form(this.element, this.formSubmit.bind(this));
        this.list = new List(this.element);
        this.reload();
    }

    formSubmit = (value) => {
        fetch(API, {
            method: 'POST',
            body: JSON.stringify(value),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => this.reload());
    }

    reload = () => {
        return fetch(API, {
            method: 'GET',
        })
            .then(res => res.json())
            .then(res => this.list.setRows(res));
    }
}
