// 1. gnb mouse over, focus underline


$(function(){
    $('.gnb li a').on('mouseenter focus', function(){
        var bar = $(this).position().left; 
        // 각각 gnb li a 의 position: left 값을 bar에 지정
        var width = $(this).width();
        // 각각 gnb li a 의 width 값을 width에 지정

        $('span.bar').css({'left': bar + 'px', 'width': width + 'px', 'opacity': '1'})
        // span.bar 의 css 를 각각의 변수 값으로 변경하고 opacity 변경
    });
    $('.gnb li a').on('mouseleave', function(){
        $('span.bar').css({'left': '0', 'width': '0', 'opacity': '0'})
    });
});

// 2.scroll animation

$(function(){
    $('.animate').scrolla({
        mobile: true,
        once: false
    });
});

// 3. background color exchange
$(window).on('scroll resize', function(){
    var scrollTop = 0;
    scrollTop = $(document).scrollTop();
    bgColor();

    function bgColor(){
        if(scrollTop > 1400){
            $('body').addClass('on');
        } else{
            $('body').removeClass('on');
        }
        if(scrollTop > 2700){
            $('body').removeClass('on');
        }
    }
});

// 5. 햄버거 메뉴???

$(function(){
    $('.menuOpen button.open').on('click', function(){
        $('.menuOpen .menuWrap').addClass('on');  
    });
    $('.menuOpen .menuWrap .close').on('click', function(){
        $('.menuOpen .menuWrap').removeClass('on');  
    });
});


// //  svg length
// $(function (){
//     $('.svgAni').find('path').each(function(i, path){
//         var length = path.getTotalLength();
//         alert(length);  
//     });
// })