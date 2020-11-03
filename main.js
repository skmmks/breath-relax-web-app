const container = document.querySelector('.container');
const text = document.querySelector('#text');

const totaltime = 7500;
const breathTime = (totaltime / 5) * 2;
const holdTime = totalTime / 5;

function breathAnimation() {
  text.innerHTML = 'Breath In...';
  container.className = 'container grow';

  setTimeout(() => {
    text.innerText = 'Hold...';
  }, breathTime);
}
