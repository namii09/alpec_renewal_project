//main nav.js

/*
$(function(){
    $('#gnb > .depth1 > li').hover(
        function(){
            $('.depth2').stop().show();
            $('#gnb_bg').addClass('show');
            $('header').css('background-color','white');
        },
        function(){
            $('.depth2').stop().hide();
            $('#gnb_bg').removeClass('show');
            
        }
    )
  });*/
  메뉴 하나씩
  $(function(){
    $('header  nav > ul > li').hover(
        function(){
            $(this).find('.depth2').stop().fadeIn();
        },
        function(){
            $(this).find('.depth2').stop().fadeOut();
        }
    );


});