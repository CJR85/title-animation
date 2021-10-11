let tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.home',
    start: '0%',
    end: '100%',
    scrub: 1,
  },
});

tl.fromTo('.sliding-text', { y: 0 }, { y: -400 });

let tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: '.home',
    start: '0%',
    end: '100%',
    scrub: 1,
    pin: true,
  },
});
