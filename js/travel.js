const bycicle = document.querySelector(".travelbycicle");
const train = document.querySelector(".traveltrain");
const switch_a = document.querySelector(".hobby-travel-switch-a");
const switch_b = document.querySelector(".hobby-travel-switch-b");

switch_a.addEventListener("click", function () {
  bycicle.style.display = "grid";
  train.style.display = "none";
  switch_a.style.opacity = 1;
  switch_b.style.opacity = 0.3;
});

switch_b.addEventListener("click", function () {
  train.style.display = "grid";
  bycicle.style.display = "none";
  switch_b.style.opacity = 1;
  switch_a.style.opacity = 0.3;
});
