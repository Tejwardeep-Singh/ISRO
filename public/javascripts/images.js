function nav(){
    tl = gsap.timeline();

    tl.from("#menu",{
        opacity:0,
        duration:1,
        delay:0.5
    }) 

    tl.from("#nl img,#search-bar,.nl img ,.nr span,.nr i",{
        y:-100,
        duration:1,
        delay:0.5,
        opacity:0,
        stagger:0.5
    })

    var box2 = document.querySelector("#menu")
    var box3= document.querySelector("#nr")

    box2.addEventListener('click', function() {
        if (box3.style.display === 'none') {
            box3.style.display = 'flex';
        } else {
            box3.style.display = 'none';
        }
    });

}
nav()