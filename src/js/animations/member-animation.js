import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const MemberAnimation = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#members",
      markers: false,
      start: "-=15% center",
    },
  });

  // Animations: Heading 2
  tl.fromTo(
    "#members h2",
    { opacity: 0 },
    {
      opacity: 1,
      duration: 0.5,
      ease: "power1.out",
    },
    0.35
  );

  // Animations: Heading 3
  tl.fromTo(
    "#members h3",
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "power2.out",
    },
    0.45
  );
  // Animations: text
  tl.fromTo(
    "#members p",
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
    "#member-tab-menu",
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

  tl.fromTo(
    "#members .card-member",
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power2.out",
      clearProps:true
    },
    0.7
  );
};

export default MemberAnimation;
