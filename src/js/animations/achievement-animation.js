import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

import { withInBreakpoint } from "../helpers/helpers";

gsap.registerPlugin(ScrollTrigger);

export const AchievementAnimation = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#achievement",
      markers: false,
      start: "top center",
    },
  });

  // member counter effect
  tl.to(
    "#memberCount",
    {
      textContent: 836,
      duration: 1.8,
      ease: "power1.out",
      snap: {
        textContent: 1,
      },
      stagger: 1,
    },
    0
  );

  tl.fromTo(
    "#card-rating,#card-award",
    { opacity: 0, y: -30 },
    { opacity: 1, y: 0, duration: 1.5, ease: "power1.out", stagger: 0.5 },
    0
  );

  tl.fromTo(
    "#card-rating .figure__avatars img",
    {
      x: (i) => {
        return i * -12;
      },
    },
    { x: 0, duration: 1.5, ease: "power2.inOut", stagger: 0.25 },
    0
  );

  tl.fromTo(
    "#card-achievement",
    { opacity: 0 },
    { opacity: 1, duration: 1.5, ease: "power2.out" },
    withInBreakpoint("lg") === true ? 0 : 1.5
  ).fromTo(
    "#card-achievement .card-cta",
    { opacity: 0 },
    { opacity: 1, duration: 1.5, ease: "power2.out" },
    withInBreakpoint("lg") === true ? .5 : 1.8
  );
};

export default AchievementAnimation;
