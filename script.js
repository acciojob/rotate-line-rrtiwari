const line = document.getElementById('line');
let angle = 0;

setInterval(() => {
  angle += 2;
  if (angle >= 360) angle -= 360;
  line.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
}, 20);

