var imagenes = ["img/6.jpg", "img/9.jpg", "img/11.jpg"];
var indice = 0;
var imagen = document.getElementById("camiImg");
var nombreArchivoElement = document.getElementBy("nombreArchivo");

function aldatuAtzera() {
    if (indice > 0) {
        indice--;
        imagen.src = imagenes[indice];
        actualizarNombreArchivo();
    } else {
        alert("Ezin da atzera egin");
    }
}

function aldatuAurrera() {
    if (indice < imagenes.length - 1) {
        indice++;
        imagen.src = imagenes[indice];
        actualizarNombreArchivo();
    } else {
        alert("Ezin da aurrera egin");
    }
}

function actualizarNombreArchivo() {
    var nombreImagen = imagenes[indice];
    var nombreSinExtension = nombreImagen.split("/").pop().split(".")[0];
    nombreArchivoElement.textContent = nombreSinExtension;
}
