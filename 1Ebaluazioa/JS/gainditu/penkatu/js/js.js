function EskatuZenbakiak(){
var nota1 = prompt("Idatzi lehenengo ikaslearen nota.")
var nota2 = prompt("Idatzi bigarrren ikaslearen nota.")
var nota3 = prompt("Idatzi hirugarren ikaslearen nota.")

nota1Int = parseInt(nota1)
nota2int = parseInt(nota2)
nota3int = parseInt(nota3)

if ((nota1Int + nota2int + nota3int) / 3 >= 5){
    alert("Gaindituta.")
}else{
    alert("Ez gaindituta.")
}
}





