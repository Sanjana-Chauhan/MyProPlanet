let navLinks = document.querySelectorAll("ul li a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((otherLink) => {
      otherLink.classList.remove("highlight");
    });
    link.classList.add("highlight");
  });
});