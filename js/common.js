"use strict";

window.addEventListener("scroll", function () {
  const scrollPosition = window.pageYOffset;
  const backToTop = document.querySelector("#backtotop");

  if (scrollPosition > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
  backToTop.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
