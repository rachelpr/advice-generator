// Variables
const dice = document.getElementById("dice");
const num = document.getElementById("advice-id");
const advice = document.querySelector(".advice-text");

const getAdvice = () => {
  fetch("https://api.adviceslip.com/advice")
    .then((data) => data.json())
    .then((data) => data.slip)
    .then((data) => {
      num.textContent = data.id;
      advice.textContent = `"${data.advice}"`;
    });
};

dice.addEventListener("click", function () {
  getAdvice();
});

getAdvice();
