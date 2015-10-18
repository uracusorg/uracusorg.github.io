var document,
    $,
    window,
    winheight=$(window).height(),
    homeDiv = $('.main-page');


function resp_d(){
    homeDiv.css('height',winheight + 'px');//set the height of homepage
}
/*mobile page responsiveness*/
function resp_m(){
    if($(window).width()<=480){//check for mobile
        homeDiv.css('height',winheight + 'px');//set the height of homediv
    }
}

$(document).ready(function(){
    resp_d();
    resp_m();
});
/*for windows resize*/
$(window).resize(function(){
        winheight = $(window).height();
        //$('div').css("border","5px solid red");
        resp_d();
        resp_m();
    });


