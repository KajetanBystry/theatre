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

$('#expand').hide()

//$('.photo2').click(function(){
//$('#pictexp').attr('src','img/kb.jpg');
//$('#name').html('Kajetan Bystry 2');
//$('#place').html('Aktor');
//$('#desc').html('Patrz jak się zmienia!')
//    });
//
//$('.photo1').click(function(){
//$('#pictexp').attr('src','img/Kajetan%20Bystry.jpg');
//$('#name').html('Kajetan Bystry');
//$('#place').html('Aktor');
//$('#desc').html('<span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente cumque ab mollitia rem laudantium! Quibusdam corporis quod vero voluptas, labore. Veniam vero enim officia nostrum excepturi provident, delectus dolore saepe.</span><span>Consequuntur repellendus sint praesentium commodi sapiente quas accusantium neque, ea et beatae nam perferendis nostrum reprehenderit enim sunt atque sed perspiciatis aperiam, numquam itaque at inventore laudantium! Amet consectetur, totam!</span>')
//    });

//$(document).ready (function(){
//   $('.clicker').click(function(){
//       $('html, body').animate({
//        scrollTop: $("#move").offset().top
//    }, 1000);
//    $('#expand').fadeIn(2000);
////       event.preventDefault;
//   }) 
//});


$(document).ready (function(){
   $('.clicker').click(function(event){
       event.preventDefault();
   }) 
});


