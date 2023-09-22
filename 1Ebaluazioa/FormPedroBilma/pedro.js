function CambiarFoto(){
    rbHombre = document.getElementById("generoHombre");
    rbMujer = document.getElementById("generoMujer");
    foto = document.getElementById("foto");
    
    if(rbHombre.checked){
        foto.src = "img/caraHombre.jpg";
    }
    
    if(rbMujer.checked){
        foto.src = "img/caraMujer.jpg";
    }
}

function EscribirDatos(){
            // Obtén el formulario y el div de resultados
            var resultadosDiv = document.getElementById("derecha");
            var genero = document.querySelector('input[name="genero"]:checked').value;
            var izena = document.getElementById("izena").value;
            var abizena = document.getElementById("abizena").value;
            var helbidea = document.getElementById("Helbidea").value;
            var hiri = document.getElementById("hiri").value;
            var gustokoenaElements = document.getElementsByName("gustokoena");
            var gustokoena = [];
    
                for (var i = 0; i < gustokoenaElements.length; i++) {
                    if (gustokoenaElements[i].checked) {
                        gustokoena.push(gustokoenaElements[i].value);
                    }
                }
    
                // Construye el mensaje de resultados
                var resultadosMensaje = `
                    Genero: ${genero}<br>
                    Izena: ${izena}<br>
                    Abizena: ${abizena}<br>
                    Helbidea: ${helbidea}<br>
                    Hiri: ${hiri}<br>
                    Gustokoenak: ${gustokoena.join(", ")}
                `;
    
                // Muestra los resultados en el div de resultados
                resultadosDiv.innerHTML = resultadosMensaje;
            };