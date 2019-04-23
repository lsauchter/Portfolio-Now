function startMenu() {
    if ($(window).width() >= 650) {
        $(".hambuger").hide();
        $(".cross").hide();
        $(".navlinks").show();
    }
    else {
    $(".hambuger").show();
    $(".navlinks").hide();
    $(".cross").hide();
    $(".hamburger").click(function() {
        $(".navlinks").slideToggle( "slow", function() {
            $(".hamburger").hide();
            $(".cross").show();
            });
        });
    $(".cross").click(function() {
        $( ".navlinks" ).slideToggle( "slow", function() {
            $(".cross").hide();
            $(".hamburger").show();
            });
         }); 
    }
    handleResize();
}

function handleResize(){
$(window).resize(function () {
    if($(window).width() < 650) {
        $(".hamburger").show();
        $(".navlinks").hide();
        $(".hamburger").click(function() {
            $(".navlinks").slideToggle( "slow", function() {
                $(".hamburger").hide();
                $(".cross").show();
                });
            });
        $(".cross").click(function() {
            $( ".navlinks" ).slideToggle( "slow", function() {
                $(".cross").hide();
                $(".hamburger").show();
                });
             }); 
    }
    else {
        $(".hambuger").hide();
        $(".cross").hide();
        $(".navlinks").show();
    };
})
}

$(document).ready(function() {
        startMenu();
    });