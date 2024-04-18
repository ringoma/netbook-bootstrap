import "../scss/styles.scss";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

// Animation
import { IntroAnimation } from "./animations/intro-animation";
import { AboutAnimation } from "./animations/about-animation";
import { AchievementAnimation } from "./animations/achievement-animation";
import { MemberAnimation } from "./animations/member-animation";

// Components
import { initTabMenu, handleCardSelectedState } from "./components/tab-menu";

// Animations with scrollTrigger
IntroAnimation();
AboutAnimation();
AchievementAnimation();
MemberAnimation();

// Components
initTabMenu();

// Set member card state as active
handleCardSelectedState("active");
