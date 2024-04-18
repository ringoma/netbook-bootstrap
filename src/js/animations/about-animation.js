import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const AboutAnimation = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#about",
      markers: false,
      start: "top center",
    },
  });

  // Set images group original status
  gsap.set(".about-images img", {
    opacity: 0,
    x: (i) => {
      return [-100, 50, 80][i];
    },
    y: (i) => {
      return [-80, -90, 50][i];
    },
    z: 10,
    transform: "perspective(50px)",
  });

  tl.fromTo(
    "#about h2",
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1,
      ease: "power1.out",
    },
    0
  );

  tl.fromTo(
    "#about h3",
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "power2.out",
    },
    .1
  );

  tl.fromTo(
    "#about p",
    { opacity: 0 },
    {
      opacity: 1,
      duration: 0.8,
      ease: "power1.out",
    },
    .45
  );

  tl.fromTo(
    "#about ul.list-blue-bullet li",
    { opacity: 0 },
    {
      opacity: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: "power1.out",
    },
    .65
  );

  // Animate images group
  tl.to(".about-images img", {
    opacity: 1,
    transformOrigin: "0% 100%",
    x: 0,
    y: 0,
    z: 0,
    duration: 2,
    stagger: 0.15,
    ease: "power2.out",
  },0);
};

export default AboutAnimation;
