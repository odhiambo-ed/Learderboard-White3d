import 'bootstrap';
import './scss/index.scss';
import tableData from './js/displayLB.js';

const scoreForm = document.querySelector('#score-form');

const getData = () => {
  fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/VwaMYCtnuP7TunvNhm2w/scores/',
    {
      method: 'GET',
    },
  )
    .then((res) => res.json())
    .then((final) => {
      const data = final.result;
      data.forEach((val) => {
        tableData(val.user, val.score);
      });
    });
};

document.addEventListener('DOMContentLoaded', () => {
  getData();
});

// Refresh page
document.getElementById('getter').addEventListener('click', () => {
  getData();
  window.location.reload(true); // Refresh browser
});

scoreForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const formName = document.querySelector('#lb-name');
  const formScore = document.querySelector('#lb-score');

  const alertBox = document.querySelector('#alert');

  const formObject = {
    user: formName.value,
    score: formScore.value,
  };

  fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/VwaMYCtnuP7TunvNhm2w/scores/',
    {
      method: 'POST',
      body: JSON.stringify(formObject),
      headers: {
        'Content-Type': 'application/json', // Specify the type of data you are sending
      },
    },
  ) // Post data to the API
  // Actions after posting the data
    .then((res) => res.json())
    .then((final) => {
      formName.value = '';
      formScore.value = '';
      alertBox.innerHTML = final.result;
      alertBox.style.opacity = 1;
      alertBox.style.PointerEvents = 'all';
      setTimeout(() => {
        alertBox.style.opacity = 0;
        alertBox.style.PointerEvents = 'none';
      }, 2500);
    });
});