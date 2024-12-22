document.addEventListener("DOMContentLoaded", () => {
  const hamburgerIcon = document.querySelector(".hamburger-icon");
  const menuLinks = document.querySelector(".menu-links");

  hamburgerIcon.addEventListener("click", () => {
    menuLinks.classList.toggle("show");
  });

  // Optional: Close menu when clicking on a menu link
  document.querySelectorAll(".menu-links li a").forEach((link) => {
    link.addEventListener("click", () => {
      menuLinks.classList.remove("show");
    });
  });
});
