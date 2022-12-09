"use strict";

const navLink = document.querySelectorAll(".navigation__link");

navLink.forEach((link) => {

  console.log(link.href, window.location.href);
  if (link.href === window.location.href) {
    link.setAttribute("aria-current", "page");
  }
});
