const s1 = document.getElementById("station1");
const markers=document.querySelectorAll(".marker");
s1.addEventListener("click", () => {
markers.forEach(marker => {
    marker.setAttribute("fill", "#00bcd4");
  });
s1.setAttribute("fill", "#1b2735");
gsap.to(".elem h2, .elem p",{
    color:"#2c5364"
});
gsap.to("#st1 h2",{
    color:"#00bcd4"
});
gsap.to("#st1 p",{
    color:"wheat"
});
});

// On mouse leave, revert color
s1.addEventListener("mouseleave", () => {
s1.setAttribute("fill", "#00bcd4");
gsap.to(".elem h2, .elem p",{
    color:"#2c5364"
});
});



const s2 = document.getElementById("station2");

s2.addEventListener("click", () => {
markers.forEach(marker => {
    marker.setAttribute("fill", "#00bcd4");
  });
s2.setAttribute("fill", "#1b2735");
gsap.to(".elem h2, .elem p",{
    color:"#2c5364"
});
gsap.to("#st2 h2",{
    color:"#00bcd4"
});
gsap.to("#st2 p",{
    color:"wheat"
});
});

// On mouse leave, revert color
s2.addEventListener("mouseleave", () => {
s2.setAttribute("fill", "#00bcd4");
gsap.to(".elem h2, .elem p",{
    color:"#2c5364"
});
});


const s3 = document.getElementById("station3");

s3.addEventListener("click", () => {
markers.forEach(marker => {
    marker.setAttribute("fill", "#00bcd4");
  });
s3.setAttribute("fill", "#1b2735");
gsap.to(".elem h2, .elem p",{
    color:"#2c5364"
});
gsap.to("#st3 h2",{
    color:"#00bcd4"
});
gsap.to("#st3 p",{
    color:"wheat"
});
});

// On mouse leave, revert color
s3.addEventListener("mouseleave", () => {
s3.setAttribute("fill", "#00bcd4");
gsap.to(".elem h2, .elem p",{
    color:"#2c5364"
});
});