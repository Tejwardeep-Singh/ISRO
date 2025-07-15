gsap.utils.toArray('.time-elem').forEach((elem, i) => {
  gsap.to(elem, {
    opacity: 1,
    y: 0,
    duration: 0.6,
    delay: i * 0.2,
    scrollTrigger: {
      trigger: elem,
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });
  gsap.to(".tvline",{
            height:"100%",
            duration:4,
            delay:0.5,
            scrollTrigger:{
                trigger:"#vertical-ruler",
                scroller:"body",
                scrub:3
            }
        })
});

const timeElems = document.querySelectorAll('.time-elem');

timeElems.forEach((elem) => {
  const img = elem.querySelector('img');

  // Start hidden
  gsap.set(img, {
    scale: 0.8
  });

  elem.addEventListener('mouseenter', () => {
    gsap.to(img, {
      display:"flex",
      scale: 1,
      duration: 0.3
    });
  });

  elem.addEventListener('mousemove', (e) => {
    const rect = elem.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    gsap.to(img, {
      x: x,
      y: y,
      duration: 0.2
    });
  });

  elem.addEventListener('mouseleave', () => {
    gsap.to(img, {
      display:"none",
      scale: 0.8,
      x: 0,
      y: 0,
      duration: 0.3
    });
  });
});
