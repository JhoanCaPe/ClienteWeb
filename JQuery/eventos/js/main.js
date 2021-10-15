//Cuando el documento este listo $(document).ready(function() {});
$(function(){
    $("button").on("click", function(event){
        let op = $(this).val();
        let op1 = parseFloat($("#op1").val());
        let op2 = parseFloat($("#op2").val());
        let result;

        switch(op){
            case "+":
                result = op1 + op2;
                break;
            case "-":
                result = op1 - op2;
                break;
            case "*":
                result = op1 * op2;
                break;
            case "/":
                result = op1 / op2;
                break;
        }

        $("#res").text(result);
    });

    $("body").keydown(function(event){
        let keycode = event.which;
        
        switch(keycode){
            case 37:
                $("#cuadrado").css("left", "-=10");
                break;
            case 38:
                $("#cuadrado").css("top", "-=10");
                break;
            case 39:
                $("#cuadrado").css("left", "+=10");
                break;
            case 40:
                $("#cuadrado").css("top", "+=10");
                break;
        }
    });
});