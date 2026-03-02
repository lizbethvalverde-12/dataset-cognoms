fetch("https://opendata-ajuntament.barcelona.cat/resources/bcn/EstadisticaPadro/pad/2025/2025_pad_m_cognom.json  ")
.then(res => res.json())
.then(data => {
    let tabla = document.getElementById("tabla");

    data.forEach(item => {
        let fila = document.createElement("tr");

        let celda1 = document.createElement("td");
        celda1.textContent = item.nom;

        fila.appendChild(celda1);
        tabla.appendChild(fila);
    });
});
