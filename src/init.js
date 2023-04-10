import {App} from "./components/app";

export function init() {
    const root = document.getElementById('root');
    const app = new App(root);
}