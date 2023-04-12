//0. a클릭시 위로 튕기는 이벤트제거
$(document).on('click', 'a[href="#"]',function(e){
    e.preventDefault();
});

// 1 scrolla
$(function(){
    $('.animate').scrolla({
        // default
        mobile: false, // disable animation on mobiles
        once: true, // only once animation play on scroll        
    });
});

// 2 text animation (splitting)
$(function(){Splitting()
});

// 3 gnb menu.on
$(function(){
    $('header .gnbBtn').on('click', function(){
        $('header nav.gnb').toggleClass('on')
    });
    $('.contents').on('click', function(){
        $('header nav.gnb').removeClass('on')
    });
});

// 4 approach 
$(window).on('scroll resize', function(){
    var scrollPos = 0;
    scrollPos = $(document).scrollTop();
    // alert(scrollPos)

    fix();
    fixHeader();
    fixList();

    function fix(){
        if(scrollPos > 1150 ) {$('.fix .text').addClass('on')}
        else {$('.fix .text').removeClass('on')}
        if(scrollPos > 2600 ) {$('.fix .text').removeClass('on')}
    }
    function fixHeader(){
        if(scrollPos > 80 ) {$('header').addClass('on')}
        else {$('header').removeClass('on')}
    }
    function fixList(){
        $('section.approach .inner .list li a').removeClass('on')

        if(scrollPos > 1150 ) {
            $('section.approach .inner .list li a').removeClass('on')
            $('section.approach .inner .list li:eq(0) a').addClass('on')
        }
            //":eq(0)" 해당 항목의 인덱스 지정 메소드
        if(scrollPos > 1550 ) {
            $('section.approach .inner .list li a').removeClass('on')
            $('section.approach .inner .list li:eq(1) a').addClass('on')
        }
        if(scrollPos > 1950 ) {
            $('section.approach .inner .list li a').removeClass('on')
            $('section.approach .inner .list li:eq(2) a').addClass('on')
        }
        if(scrollPos > 2450 ) {
            $('section.approach .inner .list li a').removeClass('on')
            $('section.approach .inner .list li:eq(3) a').addClass('on')
        }
        if(scrollPos > 2900 ) {
            $('section.approach .inner .list li a').removeClass('on')
        }
    }
});