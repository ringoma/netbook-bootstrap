import "../scss/styles.scss";
import "bootstrap-icons/font/bootstrap-icons.scss";

import "bootstrap/js/dist/dropdown.js";
import "bootstrap/js/dist/offcanvas.js";
// Animation
import { IntroAnimation } from "./animations/intro-animation";
import { AboutAnimation } from "./animations/about-animation";
import { AchievementAnimation } from "./animations/achievement-animation";
import { MemberAnimation } from "./animations/member-animation";

// Components
import { initTabMenu, handleCardSelectedState } from "./components/tab-menu";

const buttons = document.querySelectorAll("[href='#']");
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    return true;
  });
});

// Animations with scrollTrigger
IntroAnimation();
AboutAnimation();
AchievementAnimation();
MemberAnimation();

// Components
initTabMenu();

// Set member card state as active
handleCardSelectedState("active");
