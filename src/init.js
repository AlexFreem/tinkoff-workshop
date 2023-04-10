export function init() {
    const button = document.getElementById('button');

    button.addEventListener('click', () => {
        const rows = document.getElementsByClassName('row');
        const evenness = rows.length % 2 ? 'even' : 'odd';
        const table = document.getElementsByTagName('tbody')[0];
        const newRow = document.createElement('tr');

        newRow.className = `row ${evenness}`;
        newRow.innerHTML = `<td>${randomString()}</td><td>${randomString()}</td>`;

        table.appendChild(newRow);
    });

    function randomString() {
        return (Math.random() + 1).toString(36).substring(7);
    }
}