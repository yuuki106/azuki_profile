$(function(){


    $(".openbtn").click(function () {

        var $menuBar= $('.menu-wrapper').find('.menu-inner');

        if($menuBar.hasClass('open')){
            $menuBar.removeClass('open')
            $menuBar.slideUp('fast');
        }else{
            $menuBar.addClass('open')
            $menuBar.slideDown('fast');
        };

        $(this).toggleClass('active');
    });



});
