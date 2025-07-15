function navbar(){
    let tl=gsap.timeline();
    tl.from("#page1 h1 span",{
        y:100,
        opacity:0,
        duration:0.8,
        delay:2,
        stagger:0.2
    })
    tl.from("#page1 h3",{
        opacity:0,
        duration:0.8,
        delay:0.1,
    })
    tl.from("#circle",{
        opacity:0,
        rotate:45,
        duration:1
    })
    var active=3
    var mncircles = document.querySelectorAll(".mncircle");
    gsap.to(mncircles[active-1],{
        opacity:1
    })
    mncircles.forEach(function(val,index){
        val.addEventListener("click",function(){
            gsap.to("#circle",{
                rotate:(3-(index+1))*20
            })
            greyout();
            gsap.to(this,{
                opacity:1
            })
        })
    })
    function greyout(){
        gsap.to(".mncircle",{
            opacity:0.2
        })
    }
}
navbar()
function page2(){
    var box1 = document.querySelector("#c1")

    box1.addEventListener("click",function(){
        gsap.to(".c1",{
            bottom:"0"
        })
    })

    box1.addEventListener("mouseleave",function(){
        gsap.to(".c1",{
            bottom:"-100%"
        })
    })

    var box2 = document.querySelector("#c2")

    box2.addEventListener("click",function(){
        gsap.to(".c2",{
            bottom:"0"
        })
    })

    box2.addEventListener("mouseleave",function(){
        gsap.to(".c2",{
            bottom:"-100%"
        })
    })

    var box3 = document.querySelector("#c3")

    box3.addEventListener("click",function(){
        gsap.to(".c3",{
            bottom:"0"
        })
    })
    
    box3.addEventListener("mouseleave",function(){
        gsap.to(".c3",{
            bottom:"-100%"
        })
    })


    var box4 = document.querySelector("#c4")

    box4.addEventListener("click",function(){
        gsap.to(".c4",{
            bottom:"0"
        })
    })

    box4.addEventListener("mouseleave",function(){
        gsap.to(".c4",{
            bottom:"-100%"
        })
    })
}
page2()
function page4(){
        var box5a = document.querySelector("#chandrayaan h3")
        var box5 = document.querySelector("#chandrayaan")
        box5.addEventListener("click",function(){
            if (box5a.style.display === 'flex') {
                gsap.to("#chandrayaan",{
                    height:"100%",
                    padding:"5%"
                })
                gsap.to("#chandrayaan img",{
                    display:"flex"
                })
                gsap.to(".mission-header1",{
                    display:"flex"
                })
                gsap.to("#chandrayaan h3",{
                    display:"none"
                })
            } else {
                gsap.to("#chandrayaan img",{
                    display:"none"
                })
                gsap.to(".mission-header1",{
                    display:"none"
                })
                gsap.to("#chandrayaan",{
                    height:"12%",
                    padding:"1%"
                })
                gsap.to("#chandrayaan h3",{
                    display:"flex"
                })
            } 
        })
        var box6a = document.querySelector("#mangalyaan h3")
        var box6 = document.querySelector("#mangalyaan ")
        box6.addEventListener("click",function(){
            if (box6a.style.display === 'flex') {
                gsap.to("#mangalyaan",{
                    height:"100%",
                    padding:"5%"
                })
                gsap.to("#mangalyaan img",{
                    display:"flex"
                })
                gsap.to(".mission-header2",{
                    display:"flex"
                })
                gsap.to("#mangalyaan h3",{
                    display:"none"
                })
            } else {
                gsap.to("#mangalyaan img",{
                    display:"none"
                })
                gsap.to(".mission-header2",{
                    display:"none"
                })
                gsap.to("#mangalyaan",{
                    height:"10%",
                    padding:"1%"
                })
                gsap.to("#mangalyaan h3",{
                    display:"flex"
                })
            } 
        })
        var box7a = document.querySelector("#aditya h3")
        var box7 = document.querySelector("#aditya ")
        box7.addEventListener("click",function(){
            if (box7a.style.display === 'flex') {
                gsap.to("#aditya",{
                    height:"100%",
                    padding:"5%"
                })
                gsap.to("#aditya img",{
                    display:"flex"
                })
                gsap.to(".mission-header3",{
                    display:"flex"
                })
                gsap.to("#aditya h3",{
                    display:"none"
                })
            } else {
                gsap.to("#aditya img",{
                    display:"none"
                })
                gsap.to(".mission-header3",{
                    display:"none"
                })
                gsap.to("#aditya",{
                    height:"10%",
                    padding:"1%"
                })
                gsap.to("#aditya h3",{
                    display:"flex"
                })
            } 
        })
        var box8a = document.querySelector("#gaganyaan h3")
        var box8 = document.querySelector("#gaganyaan ")
        box8.addEventListener("click",function(){
            if (box8a.style.display === 'flex') {
                gsap.to("#gaganyaan",{
                    height:"100%",
                    padding:"5%"
                })
                gsap.to("#gaganyaan img",{
                    display:"flex"
                })
                gsap.to(".mission-header4",{
                    display:"flex"
                })
                gsap.to("#gaganyaan h3",{
                    display:"none"
                })
            } else {
                gsap.to("#gaganyaan img",{
                    display:"none"
                })
                gsap.to(".mission-header4",{
                    display:"none"
                })
                gsap.to("#gaganyaan",{
                    height:"10%",
                    padding:"1%"
                })
                gsap.to("#gaganyaan h3",{
                    display:"flex"
                })
            } 
        })
}
page4()
function page6(){
    var vid=document.querySelector("#page6 video");
    vid.addEventListener("mouseenter",function(){
        vid.play();
    })
    vid.addEventListener("mouseleave",function(){
        vid.pause();
    })
    var vid=document.querySelector("#page6 video");
    vid.addEventListener("touchstart",function(){
        vid.play();
    })
    vid.addEventListener("touchend",function(){
        vid.pause();
    })
    vid.addEventListener("click",function(){
        vid.muted=!vid.muted;
    })
}
page6()
function page7(){
        gsap.from(".member h2,.member h3,.member img",{
            opacity:0,
            y:1000,
            delay:1,
            duration:1,
            scrollTrigger:{
                trigger:".member h2,h3,img",
                scroller:"body"
            }
        })
}
page7()
function page8(){
        gsap.from(".event",{
            opacity:0,
            duration:4,
            delay:0.5,
            stagger:1,
            scrollTrigger:{
                trigger:".event",
                scroller:"body"
            }
        })
        gsap.to("#vertical-ruler",{
            height:"100%",
            duration:4,
            delay:0.5,
            scrollTrigger:{
                trigger:"#vertical-ruler",
                scroller:"body"
            }
        })
    
        
}   
page8()
function page5(){
            gsap.to("#rockets",{
                transform:"translateX(-100%)",
                duration:8,
                delay:1,
                scrollTrigger:{
                    trigger:"#page5",
                    scroller:"body",
                    scrub:4,
                    pin:true
                }
            })
}
page5()     
function page10(){
    gsap.to("#planet-container1",{
        rotate:40,
        delay:0.5,
        scrollTrigger:{
            trigger:"#planet-container1",
            scroller:"body",
            scrub:2
        }
    })
    gsap.to("#planet-container2",{
        rotate:60,
        delay:0.5,
        scrollTrigger:{
            trigger:"#planet-container2",
            scroller:"body",
            scrub:2
        }
    })
    gsap.to("#satellite",{
        rotate:180,
        delay:0.5,
        scrollTrigger:{
            trigger:"#satellite",
            scroller:"body",
            scrub:2
        }
    })
}
page10()