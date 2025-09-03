function current_launchers(){
    var sslv=document.querySelector("#cb1")
    sslv.addEventListener("click",function(){
        gsap.to("#current-launchers-wrapper .r-panel h3",{
            color:"#2c5364"
        })
        gsap.to("#current-launchers-wrapper .launcher-box",{
            display:"none"
        })
        gsap.to("#current-launchers-wrapper #r-sslv",{
            display:"flex",
        })
        gsap.to("#current-launchers-wrapper #cb1",{
            color:"#00bcd4"
        })
    })
    var pslv=document.querySelector("#cb2")
    pslv.addEventListener("click",function(){
        gsap.to("#current-launchers-wrapper .r-panel h3",{
            color:"#2c5364"
        })
        gsap.to("#current-launchers-wrapper .launcher-box",{
            display:"none"
        })
        gsap.to("#current-launchers-wrapper #r-pslv",{
            display:"flex"
        })
        gsap.to("#current-launchers-wrapper #cb2",{
            color:"#00bcd4"
        })
    })
    var gslv=document.querySelector("#cb3")
    gslv.addEventListener("click",function(){
        gsap.to("#current-launchers-wrapper .r-panel h3",{
            color:"#2c5364"
        })
        gsap.to("#current-launchers-wrapper .launcher-box",{
            display:"none"
        })
        gsap.to("#current-launchers-wrapper #r-gslv",{
            display:"flex"
        })
        gsap.to("#current-launchers-wrapper #cb3",{
            color:"#00bcd4"
        })
    })
    var lvm3=document.querySelector("#cb4")
    lvm3.addEventListener("click",function(){
        gsap.to("#current-launchers-wrapper .r-panel h3",{
            color:"#2c5364"
        })
        gsap.to("#current-launchers-wrapper .launcher-box",{
            display:"none"
        })
        gsap.to("#current-launchers-wrapper #r-lvm3",{
            display:"flex"
        })
        gsap.to("#current-launchers-wrapper #cb4",{
            color:"#00bcd4"
        })
    })
    
}
current_launchers()
function upcoming_launchers(){
    var hrlv=document.querySelector("#fb1")
    hrlv.addEventListener("click",function(){
        gsap.to(" #upcoming-launchers-wrapper  .r-panel2 h3",{
            color:"#2c5364"
        })
        gsap.to("#upcoming-launchers-wrapper .launcher-box2",{
            display:"none"
        })
        gsap.to(" #upcoming-launchers-wrapper  #r-hrlv",{
            display:"flex"
        })
        gsap.to("#upcoming-launchers-wrapper  #fb1",{
            color:"#00bcd4"
        })
    })
    var rlv=document.querySelector("#fb2")
    rlv.addEventListener("click",function(){
        gsap.to("#upcoming-launchers-wrapper  .r-panel2 h3",{
            color:"#2c5364"
        })
        gsap.to("#upcoming-launchers-wrapper  .launcher-box2",{
            display:"none"
        })
        gsap.to("#upcoming-launchers-wrapper  #r-rlv",{
            display:"flex"
        })
        gsap.to("#upcoming-launchers-wrapper  #fb2",{
            color:"#00bcd4"
        })
    })
    var td=document.querySelector("#fb3")
    td.addEventListener("click",function(){
        gsap.to("#upcoming-launchers-wrapper  .r-panel2 h3",{
            color:"#2c5364"
        })
        gsap.to("#upcoming-launchers-wrapper  .launcher-box2",{
            display:"none"
        })
        gsap.to("#upcoming-launchers-wrapper  #r-td",{
            display:"flex"
        })
        gsap.to("#upcoming-launchers-wrapper  #fb3",{
            color:"#00bcd4"
        })
    })
}
upcoming_launchers()