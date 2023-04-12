import {Element} from "./element";

export class List extends Element {
    itemsWrapper;
    constructor(parentElement) {
        super(parentElement);

        this.element.className = 'list';

        const header = document.createElement('div');
        header.className = 'header';
        header.innerHTML = `<div class="row"><div class="name">Имя</div><div class="description">Описание</div></div>`;
        this.itemsWrapper = document.createElement('div');
        this.itemsWrapper.className = 'rows';

        this.element.appendChild(header);
        this.element.appendChild(this.itemsWrapper);
    }

    setRows(rows) {
        this.itemsWrapper.innerHTML = '';
        this.itemsWrapper.innerHTML = rows.map(row => {
            return `<div class="row"><div class="name">${row.name}</div><div class="description">${row.description}</div></div>`;
        }).join('');
    }
}