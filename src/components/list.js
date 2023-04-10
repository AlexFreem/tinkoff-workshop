import {Element} from "./element";

export class List extends Element {
    constructor(parentElement) {
        super(parentElement);

        this.element.className = 'list';
    }
}