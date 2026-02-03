document.addEventListener("DOMContentLoaded", () => {

    // ENABLE MOBILE MENU 
    // const sitenav = document.querySelector(".site-nav");
    // const menubutton = document.querySelector(".menubutton");

    // menubutton.onclick = () => {
    //     // IF MENU IS CLOSED, OPEN IT, ELSE CLOSE IT
    //     if (sitenav.getAttribute("data-menustate") === "open" ) {
    //         sitenav.setAttribute("data-menustate", "closed");
    //     } else {
    //         sitenav.setAttribute("data-menustate", "open");
    //     };
    // };

    // // Remove the data-attribute on resize to fix drawer nav animation
    // window.onresize = () => {
    //     sitenav.removeAttribute("data-menustate");
    // };

    // SCROLL-TRIGGERED ANIMATION
    // CHANGE ACTIVE STATE FOR ALL TARGET ELEMENTS WITH INTERSECTION OBSERVER
    const myobserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
            entry.target.setAttribute("data-viewstate", "active");
            } else {
            entry.target.setAttribute("data-viewstate", "inactive");
            };   
        });  
    });

    const mytargets = document.querySelectorAll('.observe-me');
    mytargets.forEach((el) => {
        myobserver.observe(el);
    });

    
    // PARALLAX SCROLLING
    // PARALLAX
    function parallax({ el, ease = "linear" }) {
  
        let scrolling = false;

        const pageWidth = window.innerWidth;
    
        function runParallax() {
            const pageTop = window.pageYOffset;
            const pageMid = pageTop + window.innerHeight / 2;
            const topSection = el.offsetTop;
            const midSection = topSection + el.offsetHeight / 2;
            const viewDistanceLeft = pageMid - midSection;
            const parallaxSpeed = parseFloat(el.getAttribute("data-parallax-speed"));

            // Set the parallax movement
            el.style.transform = `translate3d(0, ${ (viewDistanceLeft * parallaxSpeed) / 3 }px, 0)`;
            el.style.transition = `transform ${ease}`;
        }
        
        window.addEventListener("scroll", () => {
            const pageWidth = window.innerWidth;

            if ((!scrolling) && (pageWidth > 768)) {
                window.requestAnimationFrame(() => {
                runParallax();
                scrolling = false;
                });
            }
            scrolling = true;
        });
        
        runParallax();
    
    };
  
    // Parallax
    const parallaxElements = document.querySelectorAll(".parallax-onscroll");
    parallaxElements.forEach((el) => parallax({ el }));
  
  
      
});