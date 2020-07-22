function consultaCep(){

    var cep = document.getElementById("cep").value;
    
    //Função JQuery
    $.ajax({
        url: "https://viacep.com.br/ws/"+cep+"/json/",
        type: "GET",
        success: function(response){
            console.log(response);
            document.getElementById("logradouro").innerHTML = response.logradouro;
            document.getElementById("localidade").innerHTML = response.localidade;
            //document.getElementById("uf").innerHTML = response.uf;
            //Como fica usando JQuery:
            $("#uf").html(response.uf);
        }
    })



}