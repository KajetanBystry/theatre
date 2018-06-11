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

$('#photofull').hide();

$('.background').click(function(){
//    $('#photofull').css('display','flex');
    $('#photofull').fadeIn(1000);
})
$('.btn').click(function(){
    $('#photofull').hide();
})

$('#photo1').click(function(){
    if($('#inside').hasClass('expanded')){
        document.getElementById('inside').className = '';
        $('#inside').addClass('photo1');
        $('#inside').addClass('expanded');
    }else{
       $('#inside').addClass('photo1');
    $('#inside').addClass('expanded');
    }
});

$('#photo2').click(function(){
    if($('#inside').hasClass('expanded')){
       document.getElementById('inside').className = '';
        $('#inside').addClass('photo2');
        $('#inside').addClass('expanded');
        console.log('123');
    }else{
        $('#inside').addClass('photo2');
        $('#inside').addClass('expanded');
        
    }
});

$('#photo3').click(function(){
    if($('#inside').hasClass('expanded')){
       document.getElementById('inside').className = '';
        $('#inside').addClass('photo3');
        $('#inside').addClass('expanded');
        console.log('123');
    }else{
        $('#inside').addClass('photo3');
        $('#inside').addClass('expanded');
        
    }
});

$('#photo4').click(function(){
    if($('#inside').hasClass('expanded')){
       document.getElementById('inside').className = '';
        $('#inside').addClass('photo4');
        $('#inside').addClass('expanded');
        console.log('123');
    }else{
        $('#inside').addClass('photo4');
        $('#inside').addClass('expanded');
        
    }
});

$('#photo5').click(function(){
    if($('#inside').hasClass('expanded')){
       document.getElementById('inside').className = '';
        $('#inside').addClass('photo5');
        $('#inside').addClass('expanded');
        console.log('123');
    }else{
        $('#inside').addClass('photo5');
        $('#inside').addClass('expanded');
        
    }
});

$('#photo6').click(function(){
    if($('#inside').hasClass('expanded')){
       document.getElementById('inside').className = '';
        $('#inside').addClass('photo6');
        $('#inside').addClass('expanded');
        console.log('123');
    }else{
        $('#inside').addClass('photo6');
        $('#inside').addClass('expanded');
        
    }
});

$('#photo7').click(function(){
    if($('#inside').hasClass('expanded')){
       document.getElementById('inside').className = '';
        $('#inside').addClass('photo7');
        $('#inside').addClass('expanded');
        console.log('123');
    }else{
        $('#inside').addClass('photo7');
        $('#inside').addClass('expanded');
        
    }
});

$('#photo8').click(function(){
    if($('#inside').hasClass('expanded')){
       document.getElementById('inside').className = '';
        $('#inside').addClass('photo8');
        $('#inside').addClass('expanded');
        console.log('123');
    }else{
        $('#inside').addClass('photo8');
        $('#inside').addClass('expanded');
        
    }
});