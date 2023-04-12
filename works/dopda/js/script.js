
$(function() {
    $(".visual .slide").slick({
        arrows: false, //화살표
        dots: true, //인디케이터 해제
        autoplay :true, //자동재생
        fade: true, //페이드인 효과
        autoplay: true, //자동재생
        autoplaySpeed: 5000, //재생시간
        pauseOnHover:false, //마우스 오버, 포커스시 멈추는것 해제
        pauseOnFocus:false
    });
}); 

// 스크롤
$(function(){
    $('.animate').scrolla({
        mobile: true,
        once: true
    })
})

var scrollValue = 0;
scrollValue = $(document).scrollTop();
fixHeader();

$(window).on('scroll resize', function(){
    scrollValue = $(document).scrollTop();
    fixHeader();
})

function fixHeader(){
    if(scrollValue > 200) {
        $('header').addClass('on');
    } else {$('header').removeClass('on');}
}

$(function(){
    $('header .open').on('click', function(){
        $('body').css({'overflow': 'hidden'});
        $('header .bg').css({'display': 'block'});
        $('header nav').addClass('on');
    });
    $('header .close, header .bg').on('click', function(){
        $('body').css({'overflow': 'auto'});
        $('header .bg').css({'display': 'none'});
        $('header nav').removeClass('on');
    })
});