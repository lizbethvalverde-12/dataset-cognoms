document.addEventListener("DOMContentLoaded", function () {

const url = "https://opendata-ajuntament.barcelona.cat/resources/bcn/EstadisticaPadro/pad/2025/2025_pad_m_cognom.json";

    fetch(url)
        .then(response => response.json())
        .then(data => {

            const tbody = document.querySelector("#tabla tbody");

            data.forEach(item => {

                const fila = document.createElement("tr");

                const celdaCognom = document.createElement("td");
                celdaCognom.textContent = item.COGNOM;  

                const celdaNumero = document.createElement("td");
                celdaNumero.textContent = item.Valor;    

                fila.appendChild(celdaCognom);
                fila.appendChild(celdaNumero);

                tbody.appendChild(fila);
            });

        })
        .catch(error => {
            console.error("Error cargando datos:", error);
        });

});
