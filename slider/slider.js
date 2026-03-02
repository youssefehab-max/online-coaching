let slides = document.querySelectorAll(".slide");
let current = 0;

document.getElementById("next").onclick = function () {
  slides[current].classList.remove("active");
  current = (current + 1) % slides.length;
  slides[current].classList.add("active");
};

document.getElementById("prev").onclick = function () {
  slides[current].classList.remove("active");
  current = (current - 1 + slides.length) % slides.length;
  slides[current].classList.add("active");
};