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

var select = document.getElementById('role');
$('#warning').hide();

select.onchange = function(){
$('#warning').hide();
$('#default').css('display', 'none');
document.getElementById('button').setAttribute('type',"submit");    
}

$('[type=button]').click(function(){
$('#warning').show();
});

$('[type=submit]').click(function(){
$('#warning').after('<span id="thanks">Dziękujemy za wysłanie formularza!</span>');
});

