$(document).ready (function(){
    prepict();
});

function curtain(){
$('.curtainleft').animate({
    left:'-70vh'}, 5000);
    $('.curtainright').animate({
    left:'70vh'}, 5000, function(){
        $('#img').css('z-index', '1');
    });
    };

curtain();

var pre;

function prepict(){
    pre = setTimeout(curtain, 1000);
}

$('html').addClass('js');
$(window).on('load',function(){
    $("#loader-wrapper").fadeOut();
});