function aldatuAtzera(){

    var imagen = document.getElementById("1");

    if (imagen.src === "http://127.0.0.1:5500/img/6.jpg") {
        alert("Ezin da atzera egin");
    } else if (imagen.src === "http://127.0.0.1:5500/img/9.jpg") {
        imagen.src = "http://127.0.0.1:5500/img/6.jpg";
    } else if (imagen.src === "http://127.0.0.1:5500/img/11.jpg") {
        imagen.src = "http://127.0.0.1:5500/img/9.jpg";
    }
}

function aldatuAurrera(){
    
    var imagen = document.getElementById("1");

    if (imagen.src === "http://127.0.0.1:5500/img/6.jpg") {
        imagen.src = "http://127.0.0.1:5500/img/9.jpg";
    } else if (imagen.src === "http://127.0.0.1:5500/img/9.jpg") {
        imagen.src = "http://127.0.0.1:5500/img/11.jpg";
    } else if (imagen.src === "http://127.0.0.1:5500/img/11.jpg") {
        alert("Ezin da aurrera egin");
    }
}