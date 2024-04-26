import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const IntroAnimation = () => {
  // Get the SVG element
  const svg = document.querySelector("#netbook-community");
  // Get all the dialog elements
  const dialogs = svg.querySelectorAll(".dialog");

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#intro",
      markers: false,
      start: "top center",
    },
  });

  // Set Chat bubble opacity as 0
  tl.set(dialogs, {
    y: 50,
    scale: 0.5,
    rotateZ: -45,
    opacity: 0,
    transformOrigin: "100% 100%",
  });

  tl.set(svg.querySelectorAll(".dialog.left"), {
    rotateZ: 45,
    transformOrigin: "50% 100%",
  });

  // Timeline Animations: Chat Bubble
  tl.fromTo(
    svg,
    { opacity: 0 },
    {
      opacity: 1,
      duration: 0.5,
      delay: 0.8,
      ease: "sine.out",
    }
  );

  tl.to(
    dialogs,
    {
      y: 0,
      scale: 1,
      rotateZ: 0,
      opacity: 1,
      duration: 1.5,
      stagger: 0.25,
      ease: "elastic.inOut",
    },
    "-=0.75"
  );

  // Animations: Chat Bubble
  tl.fromTo(
    "#intro h1",
    { opacity: 0 },
    {
      opacity: 1,
      duration: 0.5,
      ease: "power1.out",
    },
    0.35
  );

  // Animations: Heading 2
  tl.fromTo(
    "#intro h2",
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "power2.out",
    },
    0.45
  );
  // Animations: Lead
  tl.fromTo(
    "#intro .lead",
    { opacity: 0 },
    {
      opacity: 1,
      duration: 0.8,
      ease: "power1.out",
    },
    0.6
  );

  // Animations: CTA Button
  tl.fromTo(
    "#intro a.btn",
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.15,
      ease: "power2.out",
    },
    0.7
  );
};

export default IntroAnimation;
