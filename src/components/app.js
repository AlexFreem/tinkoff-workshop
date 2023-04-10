import {Element} from './element';
import {Form} from "./form";
import {List} from "./list";

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
    }

    formSubmit(value) {
        console.log(value);
    }
}
