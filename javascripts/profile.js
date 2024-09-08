let navLinks = document.querySelectorAll("ul li ");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((otherLink) => {
      otherLink.classList.remove("highlight");
    });
    link.classList.add("highlight");
  });
});

let uname=document.querySelector("#UserName");
uname.innerText="Sanjana";