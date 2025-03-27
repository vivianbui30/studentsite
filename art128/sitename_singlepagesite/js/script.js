document.addEventListener('DOMContentLoaded', function() {

    //JAVASCRIPT FUNCTIONS GO HERE
    console.log (' Javascript IS READY');







    //TOGGLE MENU NAV VIA ADDING/REMOVING A DATA-ATTRIBUTE
    const menubutton = document.querySelector('.menu-button');
    const menunav = document.querySelector('.toggle-nav');
    menubutton.addEventListener('click', function () {
        if (menunav.getAttribute('data-navstate') === 'open') {
            menunav.setAttribute('data-navstate', 'closed');
        } else {
            menunav.setAttribute('data-navstate', 'open');
        }
    });

    //TOGGLE ACCORDIAN VIA ADDING/REMOVING A CLASS
    var acc = document.querySelectorAll('.accordian');
    var i;
    for (i = 0; i < acc.length; i++) {
        acc[i].getElementsByTagName('h4')[0].onclick = function () {
            this.parentElement.classList.toggle("open");
        };
    };


    // STICKY NAV SCROLL LINKS FOR SINGLE PAGE SITES
    var stickynavlinks = document.querySelectorAll(".sticky nav a");
    var j;
    for (j = 0; j < stickynavlinks.length; j++) {
        stickynavlinks[j].onclick = function() {
            menunav.setAttribute('data-navstate', 'closed');
            // console.log("click");
        }; 
    };
            
        

});