function menu() {
    $(".navlinks").slideToggle( "slow", function() {
            $("#hamburger").hide();
            $("#cross").show();
            });
        }

function closeMenu() {
        console.log("close ran");
        $( ".navlinks" ).slideToggle( "slow", function() {
            $("#cross").hide();
            $("#hamburger").show();
            });
    }