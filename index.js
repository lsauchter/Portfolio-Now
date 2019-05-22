function menu() {
    $(".navlinks").slideToggle( "slow", function() {
            $("#hamburger").hide();
            $("#cross").show();
            });
        }

function closeMenu() {
        $( ".navlinks" ).slideToggle( "slow", function() {
            $("#cross").hide();
            $("#hamburger").show();
            });
    }