let tl = gsap.timeline();
tl.from(".navbar-brand img , .navbar-nav , .nav-item", {
  y: -100,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
});

gsap.from(".left-content", {
  x: "-100%",
  opacity: 0,
  duration: 2,
  stagger: 0.2,
});
gsap.from(".right-form", {
  x: 150,
  opacity: 0,
  duration: 2,
  stagger: 0.2,
});
gsap.from(".social-left", {
  x: "-150%",
  opacity: 0,
  duration: 2,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".social-left",
    scroller: "body",
    scrub: 2,
    start: "top 250%",
    // end: "bottom 100",
    // markers: true,
  },
});
gsap.from(".social-menu li", {
  opacity: 0,
  x: 300,
  duration: 2,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".social-left",
    scroller: "body",
    scrub: 2,
    start: "top 250%",
  },
});
gsap.from(".sub-list .left-image", {
  opacity: 0,
  // Y: 300,
  duration: 2,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".sub-list .left-image",
    scroller: "body",
    scrub: 2,
    start: "top 100%",
  },
});
