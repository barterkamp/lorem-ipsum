"use strict";

const btnSmall = document.querySelectorAll(".btn--small");
const navLink = document.querySelectorAll(".navigation__link");
const hamburger = document.querySelector(".navigation__hamburger");
const navMenu = document.querySelector(".navigation__list");

// toggle language

// const handleAriaPressed = () => {
//   btnSmall.getAttribute("aria-pressed") === "true"
//     ? btnSmall.setAttribute("aria-expanded", "false")
//     : btnSmall.setAttribute("aria-expanded", "true");
// };


btnSmall.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    btnSmall.forEach((btn) => {
      btn.classList.remove("active");
      if (e.target.textContent === btn.textContent) {
        btn.classList.add("active");
      }
    });
  });
});

// funtion to set the aria-expanded to true or false when the hamburger menu is toggled.
const handleAriaExpanded = () => {
  hamburger.getAttribute("aria-expanded") === "false"
    ? hamburger.setAttribute("aria-expanded", "true")
    : hamburger.setAttribute("aria-expanded", "false");
};

// loop to set the "aria-current" attribute to show the active link in the navigation
navLink.forEach((link) => {
  if (link.href === window.location.href) {
    link.setAttribute("aria-current", "page");
  }
});

// expands or collapses the hamburger menu
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  handleAriaExpanded();
});

// collapses the hamburger menu when a link is clicked
navLink.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    handleAriaExpanded();
  });
});
