// Define los valores de la moneda, la moneda fiat y el volumen
let coin = 'btc';
let fiat = 'ars';
let volumen = 0.1;

// Construye el endpoint con los valores definidos
let endpoint = `https://criptoya.com/api/${coin}/${fiat}/${volumen}`;

// Realiza la solicitud fetch al endpoint
console.log("Realizando solicitud a:", endpoint);
fetch(endpoint)
    .then(respuesta => {
        console.log("Respuesta recibida.");
        return respuesta.json();
    })
    .then(data => {
        console.log("Datos obtenidos:", data);
        mostrarData(data);
    })
    .catch(e => console.error("Error:", e));

// Función para mostrar los datos en la tabla HTML
const mostrarData = (data) => {
    console.log("Mostrando datos en la tabla.");
    let tableBody = document.getElementById('data');

    // Vaciar el contenido previo de la tabla
    tableBody.innerHTML = '';

    // Iterar sobre las claves del objeto data
    for (let key in data) {
        // Crear una nueva fila
        let row = tableBody.insertRow();
        
        // Insertar celdas en la fila
        let cellPlatform = row.insertCell(0);
        let cellPrice = row.insertCell(1);

        // Asignar valores a las celdas
        cellPlatform.textContent = key;
        cellPrice.textContent = data[key].ask;
    }
};