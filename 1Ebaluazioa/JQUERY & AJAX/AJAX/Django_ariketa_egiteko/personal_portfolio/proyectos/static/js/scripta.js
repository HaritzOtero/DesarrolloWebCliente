$(document).ready(function(){
   $("#botoia").click(function() {
       var datuak = {tecnologia: $("#tekno_aldatu").val()}
       /*var datuak = {}
       datuak*/
       alert(datuak.tecnologia);
       nireurl= "{% url 'post_teknologia' proyecto.pk %}";
       alert(nireurl);
        $.ajax({
            type: 'POST',
            url: "{% url 'post_teknologia' proyecto.pk %}",
            data: datuak,
            success: function (response) {
                alert(response)
                $("#teknologia").html(response);
            },
            error: function (response) {
                alert("Ezin da aldatu. Saiatu beranduago" + response);
            }
        })
   })

});