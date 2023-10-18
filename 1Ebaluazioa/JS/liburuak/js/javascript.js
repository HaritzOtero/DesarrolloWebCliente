function Liburuak(){
    var liburuak = [
        {
            titulua: "las aventuras de Rodri",
            autorea: "Haritz",
            irakurrita: true
        },
        {
            titulua: "las aventuras de Raul el lokillo",
            autorea: "Haritz",
            irakurrita: false
        },
        {
            titulua: "Alaintxo",
            autorea: "Haritz",
            irakurrita: true
        }
    ];
    
    // Array osoa irakurri eta mezuak erakutsi
    for (var i = 0; i < liburuak.length; i++) {
        var liburua = liburuak[i];
        if (liburua.irakurrita) {
            alert("Liburu hau irakurrita daukazu: " + liburua.titulua + " - " + liburua.autorea);
        } else {
            alert("Liburu hau irakurri behar duzu: " + liburua.titulua + " - " + liburua.autorea);
        }
        
    }
    
}