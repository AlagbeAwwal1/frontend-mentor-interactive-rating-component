const mainContainer = document.querySelector(".container");
const thankYou = document.querySelector(".thanks");
const submitBtn = document.querySelector(".submit-btn");
const rating = document.querySelector(".rate-num");
const rates = document.querySelectorAll(".btn");

rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    rating.innerHTML = rate.innerHTML;
  });
});

submitBtn.addEventListener("click", () => {
  mainContainer.style.display = "none";
  thankYou.style.display = "flex";
});
