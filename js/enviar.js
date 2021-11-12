$(function () {
   
    $(".formulario-contacto").bind("submit", function(){
        
        $.ajax({
            type: $(this).attr("method"),
            url: $(this).attr("action"),
            data: $(this).serialize(),
            success: function(respuesta) {
                if(respuesta == "ok"){$("#alerta").removeClass("hide").removeClass("alert-danger").removeClass("alert-success").addClass("alert-success");
                $(".respuesta").html("¡Enviado!");
                $(".mensaje-alerta").html("¡El mensaje ha sido enviado con éxito!");
            }else{
                $("#alerta").removeClass("hide").addClass("alert-danger");
                $(".respuesta").html("¡Error al enviar!");
                $(".mensaje-alerta").html("¡El mensaje no se ha sido enviado! Inténtalo de nuevo...");
            }
                
            },
            error: function(){
                $("#alerta").removeClass("hide").addClass("alert-danger");
                $(".respuesta").html("¡Erro al enviar!");
                $(".mensaje-alerta").html("¡El mensaje no se ha sido enviado! Inténtalo de nuevo...");

            }
        });

        return false
    });

});