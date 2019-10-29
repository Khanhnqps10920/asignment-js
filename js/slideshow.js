const heroBanner = document.querySelector('#imgs');
const btnPre = document.querySelector('.pre');
const btnNext = document.querySelector('.next');
let count = 0;
const next = () => {
  if (count < 5) {
    ++count;
    console.log(count);
    imgs.src = `images/m${count}.jpg`;
  }
};

const pre = () => {
  if (count > 0) {
    console.log(count);
    --count;
    imgs.src = `images/m${count}.jpg`;
  }
};

btnPre.addEventListener('click', pre);
btnNext.addEventListener('click', next);
