"use strict";

const navLink = document.querySelectorAll(".navigation__link");
const hamburger = document.querySelector(".navigation__hamburger");
const navMenu = document.querySelector(".navigation__list");

navLink.forEach((link) => {
  if (link.href === window.location.href) {
    link.setAttribute("aria-current", "page");
  }
});

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

navLink.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});
