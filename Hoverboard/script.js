const container = document.getElementById('container');

const colors = [
  '#f6edab',
  '#e69827',
  '#ffd427',
  '#b1fff8',
  '#fffb9a',
  '#94c297',
  '#ad9c76',
  '#90d0bc',
  '#f2c48a',
  '#75d3f0',
  '#6ea7a8',
  '#7b9739',
  '#f7c0f2',
  '#b94088',
  '#910c11',
];

const SQUARES = 500;

for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', () => setColor(square));

  square.addEventListener('mouseout', () => removeColor(square));

  container.appendChild(square);
}

//setColor function - This function runs when we hover over square
function setColor(element) {
  const color = getRandomColor();
  element.style.background = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

//getColor function - This function runs when we hover out of square
function removeColor(element) {
  element.style.background = '#1d1d1d';
  element.style.boxShadow = '0 0 2px #000';
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
