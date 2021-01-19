let service_card = $('.service-card');

if (service_card!= null || service_card!=false || service_card!=""){

    $(service_card).hover(
        function(){
            $(this).addClass('bg-tmp-primary text-white');
            let icono = $(this).children().children()[0];
            $(icono).removeClass('text-tmp-primary');  
        },
        function(){
            $(this).removeClass('bg-tmp-primary text-white');
            let icono = $(this).children().children()[0];
            $(icono).addClass('text-tmp-primary');  
        }
    );
}
