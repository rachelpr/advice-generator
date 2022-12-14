const getAdvice = () => {
  fetch("https://api.adviceslip.com/advice")
    .then((data) => data.json())
    .then((data) => generateAdvice(data));
};

const generateAdvice = (data) => {
  const id = data.slip.id;
  const advice = data.slip.advice;
  //console.log(`${id}: ${advice}`);

  const adviceCard = `
      <h1>Advice #${id}</h1>
      <p>"${advice}"</p>
  `;

  document.querySelector(".advice-card").innerHTML += adviceCard;
};

getAdvice();
