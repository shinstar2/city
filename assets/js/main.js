$(function(){//로드후실행

    /**
     * 
     * 
     * @자바스크립트새창열기 
     * 
     */
    $('#btnGo').click(function(){
        url=$(selectList).val();
        window.open(url)
    })

/**
 * @비주얼슬라이드
 * 
 * @자바스크립트새창열기
 * 
 */
const visualSlide = new Swiper(".visual-slide", {
    loop:true,
    //  option
    autoplay: {
        delay: 3000,
     disableOnInteraction: false,//내가 손으로 컨트롤 하고 나서 실행되는거,,
      },
    pagination:{
        el:'.fraction',
        type: "fraction"
    },

    navigation:{
        nextEl:'.btn-next',
        prevEl:'.btn-prev'
    }
});

$('.sc-visual .group-nav button').click(function(){
    idx=$(this).data('index');
  $(this).addClass('active').siblings().removeClass('active')
  visualSlide.slideToLoop( idx )
})


$('.visual-slide .btn-autoplay').click(function(){
  // $(this).addClass('on');
    // visualSlide.autoplay.stop()
   // visualSlide.autoplay.start()
   if($(this).hasClass('on')){//은 가지고있어?
    visualSlide.autoplay.start()
    $(this).find('.blind').text('자동재생정지')
   }else{//아뇨 업성요 
    visualSlide.autoplay.stop()
    $(this).find('.blind').text('자동재생적용')
   }
   $(this).toggleClass('on');
})
   
        /**
         * 
         * @배너슬라이드
         * 
         * 
         */ 

        const bannerSlide = new Swiper('.banner-slide',{
            slidesPerView:3,
            spaceBetween:43,
            autoplay: {
                delay: 5000,
             disableOnInteraction: false,//내가 손으로 컨트롤 하고 나서 실행되는거,,
              },
            pagination:{
                el:'.fraction',
                type: "fraction"
            },
        
            navigation:{
                nextEl:'.btn-next',
                prevEl:'.btn-prev'
            }
        })

        $('.banner-slide .btn-autoplay').click(function(){
             if($(this).hasClass('on')){//은 가지고있어?
              bannerSlide.autoplay.start()
              $(this).find('.blind').text('자동재생정지')
             }else{//아뇨 업성요 
              bannerSlide.autoplay.stop()
              $(this).find('.blind').text('자동재생적용')
             }
             $(this).toggleClass('on');
          })


/**
 * 
 * 
 *
 */
$('.sc-related .related').click(function(e){
    
    //있을 떄 
    if($(this).siblings('.sub').length > 0){
        e.preventDefault();


        if($(this).hasClass('active')){
            $(this).removeClass('active');
            $('.sc-related .sub').slideUp()
        }else{
            $('.sc-related .related').removeClass('active')
            $(this).addClass('active');


            $('.sc-related .sub').slideUp()
            $(this).siblings('.sub').slideDown()
        }













    }
    





})




/**
 * 
 * 
 * 
 */
$(window).scroll(function(){
    curr=$(this).scrollTop()

    if(curr >=50){
        $('.fixed-top').addClass('show');
    }else{
        $('.fixed-top').removeClass('show');
    }
})

$('.fixed-top').click(function(e){
    e.preventDefault();
    window.scrollTo({top:0,behavior:"smooth"})
})
 

    //호버이벤트 (.sub > li 에 호버를 줘야 마우스를 떼었을 때도 서브메뉴보임)
    $('.gnb > li').hover(function(){
        //올렸을 때 
        // $('.sub').stop().slideDown()
        $(this).children('.sub')
    },function(){
        //떼었을 때
        $('.sub').stop().slideUp()
    })


})//지우지마쇼