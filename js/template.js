$(document).ready (function(){
changeNavbarColor();
});

$(window).scroll (function(){
    changeNavbarColor();
});

function changeNavbarColor(){
    var navHeight = $('#navbar').height();
    var actualPos = $(document).scrollTop();
    
    if(actualPos > navHeight) {
        $('#navbar').addClass('bgcolor');
    }else{
        $('#navbar').removeClass('bgcolor');
    }
    
}

