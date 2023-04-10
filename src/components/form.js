import {Element} from "./element";

export class Form extends Element {
    nameInput;
    descriptionInput;
    submit;

    constructor(
        parentElement,
        submitCallback,
    ) {
        super(parentElement);

        this.element.className = 'form';
        // Create elements
        this.nameInput = document.createElement('input');
        this.nameInput.placeholder = 'Имя';
        this.descriptionInput = document.createElement('input');
        this.descriptionInput.placeholder = 'Описание';
        this.submit = document.createElement('button');
        this.submit.textContent = 'Создать';
        // Append to parent
        this.element.appendChild(this.nameInput);
        this.element.appendChild(this.descriptionInput);
        this.element.appendChild(this.submit);
        // Add event listeners
        this.submit.addEventListener('click', () => {
            submitCallback({
                name: this.nameInput.value,
                description: this.descriptionInput.value,
            });
        });
    }

    reset() {
        this.nameInput.value = '';
        this.descriptionInput.value = '';
    }
}
