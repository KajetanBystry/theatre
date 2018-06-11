function mycarousel(){
$("#myCarousel").carousel({
    interval: 5000,
pause:false});}

mycarousel();

$(window).scroll (function(){
    changeNavbarColor();
});

$(document).ready(function () {
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
});

$('.carousel--all').click(function(){
    document.getElementById('sztukilink').click();
    console.log(123)
});

function changeNavbarColor(){
//    var navHeight = 200;
    var actualPos = $(document).scrollTop();

    if(actualPos > 200) {
        $('#navbar').fadeIn(500);
    }else{
        $('#navbar').fadeOut(500);
    }
    
}

$('#photofull').hide();

$('.newsbackground').click(function(event){
    event.preventDefault();
    $('#photofull').fadeIn(1000);
})
$('.btn').click(function(){
    $('#photofull').hide();
})

$('.linked').click(function(){
    if($('#inside').hasClass('expanded')){
        document.getElementById('inside').className = '';
        $('#inside').addClass('link1');
        $('#inside').addClass('expanded');
    }else{
       $('#inside').addClass('link1');
    $('#inside').addClass('expanded');
    }
});

(function() {
  // Init
  var container = document.getElementById("container"),
    inner = document.getElementById("inner");

  // Mouse
  var mouse = {
    _x: 0,
    _y: 0,
    x: 0,
    y: 0,
    
    updatePosition: function(event) {
      var e = event || window.event;
        var mousex = e.clientX;
        var mousey = e.clientY + 550;
      this.x = mousex - this._x;
      this.y = (mousey - this._y) * -1;
    },
    setOrigin: function(e) {
      this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
      this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
    },
    show: function() {
      return "(" + this.x + ", " + this.y + ")";
    }
  };

  // Track the mouse position relative to the center of the container.
  mouse.setOrigin(container);

  //-----------------------------------------

  var counter = 0;
  var updateRate = 10;
  var isTimeToUpdate = function() {
    return counter++ % updateRate === 0;
  };

  //-----------------------------------------

  var onMouseEnterHandler = function(event) {
    update(event);
  };

  var onMouseLeaveHandler = function() {
    inner.style = "";
  };

  var onMouseMoveHandler = function(event) {
    if (isTimeToUpdate()) {
      update(event);
    }
  };

  //-----------------------------------------

  var update = function(event) {
    mouse.updatePosition(event);
    updateTransformStyle(
      (mouse.y / inner.offsetHeight / 2).toFixed(2),
      (mouse.x / inner.offsetWidth / 2).toFixed(2)
    );
  };
    
  var updateTransformStyle = function(x, y) {
    var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
    inner.style.transform = style;
    inner.style.webkitTransform = style;
    inner.style.mozTransform = style;
    inner.style.msTransform = style;
    inner.style.oTransform = style;
  };

  //-----------------------------------------

  container.onmouseenter = onMouseEnterHandler;
  container.onmouseleave = onMouseLeaveHandler;
  container.onmousemove = onMouseMoveHandler;
})();

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.6";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));