function current_launchers(){
    var sslv=document.querySelector("#cb1")
    sslv.addEventListener("click",function(){
        gsap.to(".r-panel h3",{
            color:"#2c5364"
        })
        gsap.to(".launcher-box",{
            display:"none"
        })
        gsap.to("#r-sslv",{
            display:"flex",
        })
        gsap.to("#cb1",{
            color:"#00bcd4"
        })
    })
    var pslv=document.querySelector("#cb2")
    pslv.addEventListener("click",function(){
        gsap.to(".r-panel h3",{
            color:"#2c5364"
        })
        gsap.to(".launcher-box",{
            display:"none"
        })
        gsap.to("#r-pslv",{
            display:"flex"
        })
        gsap.to("#cb2",{
            color:"#00bcd4"
        })
    })
    var gslv=document.querySelector("#cb3")
    gslv.addEventListener("click",function(){
        gsap.to(".r-panel h3",{
            color:"#2c5364"
        })
        gsap.to(".launcher-box",{
            display:"none"
        })
        gsap.to("#r-gslv",{
            display:"flex"
        })
        gsap.to("#cb3",{
            color:"#00bcd4"
        })
    })
    var lvm3=document.querySelector("#cb4")
    lvm3.addEventListener("click",function(){
        gsap.to(".r-panel h3",{
            color:"#2c5364"
        })
        gsap.to(".launcher-box",{
            display:"none"
        })
        gsap.to("#r-lvm3",{
            display:"flex"
        })
        gsap.to("#cb4",{
            color:"#00bcd4"
        })
    })
    
}
current_launchers()
function upcoming_launchers(){
    var hrlv=document.querySelector("#fb1")
    hrlv.addEventListener("click",function(){
        gsap.to(".r-panel2 h3",{
            color:"#2c5364"
        })
        gsap.to(".launcher-box2",{
            display:"none"
        })
        gsap.to("#r-hrlv",{
            display:"flex"
        })
        gsap.to("#fb1",{
            color:"#00bcd4"
        })
    })
    var rlv=document.querySelector("#fb2")
    rlv.addEventListener("click",function(){
        gsap.to(".r-panel2 h3",{
            color:"#2c5364"
        })
        gsap.to(".launcher-box2",{
            display:"none"
        })
        gsap.to("#r-rlv",{
            display:"flex"
        })
        gsap.to("#fb2",{
            color:"#00bcd4"
        })
    })
    var td=document.querySelector("#fb3")
    td.addEventListener("click",function(){
        gsap.to(".r-panel2 h3",{
            color:"#2c5364"
        })
        gsap.to(".launcher-box2",{
            display:"none"
        })
        gsap.to("#r-td",{
            display:"flex"
        })
        gsap.to("#fb3",{
            color:"#00bcd4"
        })
    })
}
upcoming_launchers()