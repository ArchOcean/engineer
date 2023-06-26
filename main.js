const canvas = document.getElementById("mainCanvas");
const btn = document.getElementById("enterDegree");

canvas.width = 500;

const ctx = canvas.getContext("2d");
const box = new Object(300, 400, 50, 50);

btn.addEventListener("click", (event) => {
  event.preventDefault();
});

animate();

function animate() {
  box.update();
  canvas.height = window.innerHeight;
  box.draw(ctx);

  requestAnimationFrame(animate);
}
