const toggleButton = document.getElementById("hamburger-button");
toggleButton.addEventListener("click", () => {
  const mobileMenu = document.getElementById("mobile-menu");
  mobileMenu.classList.toggle("active");
  toggleButton.classList.toggle("cross-button");
});
