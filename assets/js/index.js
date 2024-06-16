let colorGlobal = '';
const colorMap = {
  a: 'pink',
  s: 'orange',
  d: 'skyblue',
  q: 'purple',
  w: 'gray',
  e: 'brown',
};

const keyDiv = document.querySelector('#key');

function newdiv(color) {
  const newDiv = document.createElement('div');
  newDiv.className = 'new-div';
  newDiv.style.backgroundColor = color;
  document.body.appendChild(newDiv);
}

document.addEventListener('keydown', function (event) {
  if (event.key === 'a' || event.key === 'A') {
    keyDiv.style.backgroundColor = 'pink';
  } else if (event.key === 's' || event.key === 'S') {
    keyDiv.style.backgroundColor = 'orange';
  } else if (event.key === 'd' || event.key === 'D') {
    keyDiv.style.backgroundColor = 'skyblue';
  } else if (event.key === 'q' || event.key === 'Q') {
    newdiv('purple');
  } else if (event.key === 'w' || event.key === 'W') {
    newdiv('gray');
  } else if (event.key === 'e' || event.key === 'E') {
    newdiv('brown');
  }
});
