function PasahitzaKonfirmatu(){
    var x = 1, pasahitza1, pasahitza2
    while( x = 1){
        pasahitza1 = prompt("Pasahitza sartu")
        pasahitza2 = prompt("Pasahitza konfirmatu")
        
        if(pasahitza1 == pasahitza2){
            alert("Ongi etorri")
            x = 0
        }else{
            alert("Pasahitzak ez dira berdinak, sartu berriro.")
            pasahitza1 = prompt("Pasahitza sartu")
            pasahitza2 = prompt("PasahitzA konfirmatu")           
        }
    }
}