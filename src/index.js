import "./css/main.css";

document.querySelectorAll('#mobile-menu a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });

    document
      .getElementById("mobile-menu")
      .classList.toggle("-translate-y-full");
  });
});

document.querySelectorAll('#menu a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

document
  .getElementById("mobile-menu-toggle")
  .addEventListener("click", function () {
    document
      .getElementById("mobile-menu")
      .classList.toggle("-translate-y-full");
  });
