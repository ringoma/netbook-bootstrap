export const initTabMenu = () => {
  const navLinks = document.querySelectorAll("#member-tab-menu .nav-link");

  [...navLinks].forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const tag = handleTabButtonClick(link);
      handleCardSelectedState(tag);
    });
  });
};

export const handleTabButtonClick = (link) => {
  const active = document.querySelector("#member-tab-menu .active");
  active.classList.remove("active");
  link.classList.add("active");
  const tag = link.getAttribute("data-tag");
  return tag;
};

export const handleCardSelectedState = (tag) => {
  const cards = document.querySelectorAll("#members-cards .card-member");
  cards.forEach((card) => {
    if (card.getAttribute("data-tag").split(",").includes(tag)) {
      card.classList.add("active");
    } else {
      card.classList.remove("active");
    }
  });
};
