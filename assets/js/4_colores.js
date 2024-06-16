const ele1 = document.getElementById('ele1');
const ele2 = document.getElementById('ele2');
const ele3 = document.getElementById('ele3');
const ele4 = document.getElementById('ele4');
let color = 'green'; //VAriable global

function pintar(e, color = 'red') {
  e.target.style.backgroundColor = color;
}

ele1.addEventListener('click', (e) => {
  pintar(e);
});

ele2.addEventListener('click', (e) => {
  pintar(e, 'yellow');
});

ele3.addEventListener('click', (e) => {
  pintar(e, 'black');
});

ele4.addEventListener('click', (e) => {
  pintar(e, 'blue');
});
