function consultaCep(){
    var cep = $("#cep").val();
    $(".cep").hide();
    $(".barra-progresso").show();

    $.ajax({
        url: "https://viacep.com.br/ws/"+cep+"/json/",
        type: "GET",
        success: function(response){
            $("#titulo").html(response.cep);
            $("#logradouro").html(response.logradouro);
            $("#bairro").html(response.bairro);
            $("#localidade").html(response.localidade);
            $("#uf").html(response.uf);
            $(".cep").show();
            $(".barra-progresso").hide();
        }
    })
}

$(function(){
    $(".cep").hide();
    $(".barra-progresso").hide();
});