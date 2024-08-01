// JavaScript for mobile menu toggle
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const closeMenu = document.getElementById("close-menu");
const navLinks = document.querySelectorAll("#mobile-menu a");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.remove("-translate-x-full");
});

closeMenu.addEventListener("click", () => {
  mobileMenu.classList.add("-translate-x-full");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("-translate-x-full");
  });
});

// Change navbar background on scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("toggleB");
  const relativeDiv = toggle.parentElement;

  toggle.addEventListener("change", function () {
    if (this.checked) {
      relativeDiv.classList.add("toggle-active");
    } else {
      relativeDiv.classList.remove("toggle-active");
    }
  });
});
