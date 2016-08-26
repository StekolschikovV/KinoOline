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

// video block show
$( document ).ready(function () {
    $( '.showHideVideoBlock' ).click(function () {
        if ($( '.videoContainer' ).css("display") == 'block'){
            var el = $('.videoContainer')
            curHeight = el.height();
            $('.videoContainer').height(curHeight).animate({height: '0'}, 500);
            setTimeout(function(){
                el.css('display', 'none');
            }, 1000);
        } else {
            var el = $('.videoContainer')
            el.css('display', 'block');
            curHeight = el.height();
            autoHeight = el.css('height', 'auto').height();
            $('.videoContainer').height(curHeight).animate({height: autoHeight}, 500);
            $('.videoContainer').animate({ marginBottom: '20px' }, 500);
        }
    });
    $( window ).resize(function() {
        if ($( '.videoContainer' ).css("display") == 'block'){
            var el = $('.videoContainer');
            el.css('display', 'block');
            curHeight = el.height();
            autoHeight = el.css('height', 'auto').height();
            $('.videoContainer').height(curHeight).animate({height: autoHeight}, 0);
            $('.videoContainer').animate({ marginBottom: '0px' }, 500);
        }
    });
});
// video block show //