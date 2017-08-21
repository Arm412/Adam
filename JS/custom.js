$(document).ready(function(){
    var div = $("#invis");
    var div2 = $("#aboutMe");
    var div3 = $("#languages");
    var div4 = $("#contactMe");
    var position = div.position();
    var nav = $("#mainNav");
    var animate = true;
    $("#largeButton, #scrollToAbout").on("click", function(){
        $('html,body').animate({
                scrollTop: $(div2).offset().top},
            2000, "swing");
    });
    $("#scrollToSkills").on("click", function(){
        $('html,body').animate({
                scrollTop: $(div3).offset().top - 50},
            2000, "swing");
    });
    $("#scrollToContact").on("click", function(){
        $('html,body').animate({
                scrollTop: $(div4).offset().top},
            2000, "swing");
    });
    $(window).scroll(function () {
        var windowpos = $(window).scrollTop();
        if (windowpos >= (position.top + 600)) {
            div.css("display", "block");
            div.animate({
                marginTop: "0"
            }, 1000, "linear");
        }
        if (windowpos > 0 && animate){
            /*nav.css("background-color", "black");*/
            nav.css("min-height", "50px");
            nav.animate({
                backgroundColor: "black",
                paddingTop: "0"
            }, "slow");
            animate = false;
        } else if (windowpos == 0){
            console.log(nav);
            console.log("Yeet");
            nav.css("min-height", "100px");
            nav.animate({
                paddingTop: "25px",
                backgroundColor: "rgba(0, 0, 0, 0)"
            }, "slow");
            animate = true;
        }
    });
});