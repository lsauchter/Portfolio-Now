function menu() {
    $(".cross").hide();
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
    };

    $(document).ready(function() {
        menu();
    });