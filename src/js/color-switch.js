import colors from './colors';

const refs = {
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
};

let timerId = null;
let isActive = false;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function onStartChange(items) {
if(isActive){
   refs.startBtn.disabled = true; 
}
  const currentColor = randomIntegerFromInterval(0, this.length);
  refs.body.style.backgroundColor = this[currentColor];
  isActive = true;
};

refs.startBtn.addEventListener('click', () => {
    timerId = setInterval(onStartChange.bind(colors), 1000)   
});

refs.stopBtn.addEventListener("click", () => {
    clearInterval(timerId);
    isActive = false;
    refs.startBtn.disabled = false;
  });



  



