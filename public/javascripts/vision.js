// gsap.from("#vpage1 img",{
//     y:"400",
//     opacity:0,
//     duration:2,
//     delay:1
// })
// var follow= document.querySelector("#vpage1 h1");
// follow.addEventListener("mousemove",function(dets){
//     gsap.to("#vpage1 img",{
//         x:dets.clientX-600,
//     })
// })

function page1(){
            gsap.to("#vision-container h2",{
                transform:"translateX(-400%)",
                duration:15,
                scrollTrigger:{
                    trigger:"#vision-container",
                    scroller:"body",
                    scrub:4,
                    pin:true
                }
            })
}
page1() 