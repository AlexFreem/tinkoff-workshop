export class Element {
    element;

    constructor(
        parentElement,
    ) {
        this.element = document.createElement('div');
        parentElement.appendChild(this.element);
    }
}