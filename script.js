var height =$("#header").height();

$(window).scroll(function(){

    if($(this).scrollTop()>height){
        $('.nav-bar').addClass('fixed-navbar');

    }else{
        $('.nav-bar').removeClass('fixed-navbar');

    }
});