function KalkulatuFaktoriala(){
    var zenbakia = prompt("Sartu znbakia haren faktoriala kalkulatzeko");
    var zenbakiaInt = parseInt(zenbakia);
    var faktoriala = 1
    
    for (var i = 1; i <= zenbakiaInt; i++) {
       faktoriala *= i;
    }

    alert(faktoriala);
}