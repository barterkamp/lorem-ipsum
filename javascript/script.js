"use strict";

const btnSmall = document.querySelectorAll(".btn--small");
const navLink = document.querySelectorAll(".navigation__link");
const hamburger = document.querySelector(".navigation__hamburger");
const navMenu = document.querySelector(".navigation__list");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".modal__overlay");
const btnCloseModal = document.querySelector(".btn--close");
const showModal = document.querySelectorAll(".show-modal");
const gallery = document.querySelector(".gallery");
const body = document.querySelector("body");

console.log(document.activeElement);

// Toggle active class for language
btnSmall.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    btnSmall.forEach((btn) => {
      btn.classList.remove("btn--active");
      if (e.target.textContent === btn.textContent) {
        btn.classList.add("btn--active");
      }
    });
  });
});

// Set the "aria-current" attribute to show the active link in the navigation
navLink.forEach((link) => {
  if (link.href === window.location.href) {
    link.classList.add("navigation__link--active");
  }
});

// Mobile navigation functionality

// Set the aria-expanded to true or false when the hamburger menu is toggled.
const handleAriaExpanded = () => {
  hamburger.getAttribute("aria-expanded") === "false"
    ? hamburger.setAttribute("aria-expanded", "true")
    : hamburger.setAttribute("aria-expanded", "false");
};

const toggleMenu = () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  handleAriaExpanded();
};

const collapseMenu = () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
  handleAriaExpanded();
};

console.log(hamburger);
hamburger.addEventListener("click", toggleMenu);

navLink.forEach((link) => {
  link.addEventListener("click", collapseMenu);
});

// Modal functionality

const openModal = (e) => {
  const clicked = e.target.closest(".gallery__image");
  if (!clicked) {
    return;
  }
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  body.classList.add("modal-open");
};

const closeModal = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  body.classList.remove("modal-open");
};

// open modal
gallery.addEventListener("click", openModal);

// close modal with close button
btnCloseModal.addEventListener("click", closeModal);

// close modal by clicking on the overlay
overlay.addEventListener("click", closeModal);

// close modal by pressing esc key
document.addEventListener("keydown", (e) => {
  if (e.key !== "Escape") return;
  else closeModal();
});

// function getScrollbarWidth() {
//  window.innerWidth - document.documentElement.clientWidth;
