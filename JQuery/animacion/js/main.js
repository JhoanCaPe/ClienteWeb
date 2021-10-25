$(function(){
    $("#representar").on("click", function(event){
        $("tbody tr").each(function(index){
            let cityIndex = index;

            $(this).children(":gt(0)").each(function(indice){
                let yearIndex = indice;
                let value = parseInt($(this).text());

                $(".graphics > div").eq(cityIndex).children().eq(yearIndex).animate({
                    "height" : value
                });
            });
        });
    });
});