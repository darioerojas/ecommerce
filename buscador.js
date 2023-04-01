const baseUrl = 'http://localhost:3000';

function searchProducts(term) {
    return $.ajax({
        url: `${baseUrl}/productos?q=${term}`,
        type: 'GET',
        dataType: 'json'
    });
}

function displayResults(results) {
    const div = document.getElementById('results');
    div.innerHTML = '';

    const h3 = document.createElement('h3');
    const h3text = document.createTextNode('Resultado de la Búsqueda');
    h3.appendChild(h3text);
    div.appendChild(h3);

    results.forEach(result => {
        const img = document.createElement('img');
        img.src = result.imagen;
        img.alt = result.nombre;

        const h4 = document.createElement('h4');
        const h4text = document.createTextNode(result.nombre);
        h4.appendChild(h4text);

        const p = document.createElement('p');
        const ptext = document.createTextNode(`Precio: $${result.precio}`);
        p.appendChild(ptext);

        const itemDiv = document.createElement('div');
        itemDiv.appendChild(h4);
        itemDiv.appendChild(img);
        itemDiv.appendChild(h4);
        itemDiv.appendChild(p);

        div.appendChild(itemDiv);
    });
}

const form = document.querySelector('form');
form.addEventListener('submit', event => {
    event.preventDefault();
    const searchInput = document.getElementById('search');
    const results = searchProducts(searchInput.value);
    results.then(displayResults);
});