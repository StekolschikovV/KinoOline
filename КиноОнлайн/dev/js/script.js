// slide
$( document ).ready(function () {

    var ALLSLIDES = $(".slide").length;
    var NOWSLIDE = 1;

    function nextSlide() {
       if (ALLSLIDES != NOWSLIDE) {
           $('#slider').animate({scrollLeft: '+=' + $( '.slide' ).width() }, 500);
           NOWSLIDE += 1;
       } else {
           $('#slider').animate({scrollLeft: 0 }, 500);
           NOWSLIDE = 1;
       }
       setTimeout(function(){nextSlide()}, 5000);
    }
    setTimeout(function(){nextSlide()}, 5000);

    $( window ).resize(function() {
        NOWSLIDE = 1;
        $('#slider').animate({scrollLeft: 0 }, 1000);
    });

});
// slide //