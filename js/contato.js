$(function(){
  $('#form_contato').submit(function(e){

  	e.preventDefault();

    var nome = $("input#nome").val();
    var email = $("input#email").val();
    var assunto = $("input#assunto").val();
    var mensagem = $("textarea#mensagem").val();

    $.ajax({
        url: '././email/email.php',
        type: "POST",
        data: {
        	nome :  nome,
        	email: email,
        	assunto: assunto,
        	mensagem: mensagem
        },
        cache: false,
        success: function() {

        $("#modal_titulo").html("Sucesso");
        $("#modal_titulo_div").addClass("modal-header text-success");
		$("#modal_conteudo").html("Mensagem enviada com sucesso!");
		$("#modal_btn").addClass("btn btn-success").html("Voltar");

		$("#modalMensagem").modal("show");

        $('#form_contato').trigger("reset");
        },
        
        error: function () {

        $("#modal_titulo").html("Erro");
        $("#modal_titulo_div").addClass("modal-header text-danger");
		$("#modal_conteudo").html("Mensagem não enviada, tente novamente!");
		$("#modal_btn").addClass("btn btn-danger").html("Voltar");

		$("#modalMensagem").modal("show");

        $('#form_contato').trigger("reset");

        }
    });
    return false;
  });
});

