$(document).ready (function(){
    $('#navbar').find('a').click(function () {
        if (this.hash !== '') {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 200
            }, 800, function () {
                window.location.hash = hash;
            })
        }
    });
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

$('#authorimg').hover(function(){
    $('#authorimg').attr('src','img/DSC_0184hover.jpg')
},
function(){$('#authorimg').attr('src','img/DSC_0184.jpg')
      }
);