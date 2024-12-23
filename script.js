Shery.mouseFollower();
Shery.makeMagnet(".magnet");
Shery.hoverWithMediaCircle(".hvr", {videos:["./1.mp4", "./2.mp4", "./3.mp4"]})



 

gsap.to(".fleftelm", {                 // gsap used to move the elements ups and downs
    scrollTrigger: {         // scroll tiger is used to stop the screens
        trigger: "#fimages",  //stop those 4 images
        pin: true,          //helps in stoping
        start: "top top",    // stop from where
        end: "bottom bottom",  // till where
        endTrigger: ".last", // when to stop the full enimation
        scrub: 1

    },
    y: "-300%",
    ease: Power1 
});

let sections = document.querySelectorAll(".fleftelm");
Shery.imageEffect(".images", {
    style: 5,
    slideStyle: (setScroll) => {
        sections.forEach(function(section, index ){
            ScrollTrigger.create({
                trigger: section,
                start: "top top",
                scrub: 1,
                onUpdate: function(prog){
                    setScroll(prog.progress+index)

                }
            })

        })

      
    },
});


