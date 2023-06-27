const canvas = document.getElementById("mainCanvas");
const btn = document.getElementById("enterDegree");
const input = document.getElementById("fdegree");

canvas.width = 500;

const ctx = canvas.getContext("2d");
const box = new Object(300, 400, 50, 50);

let arrow = [0.1666, 0.25, 0, 2, 3 / 2, 1];

btn.addEventListener("click", (event) => {
  event.preventDefault();
  arrow.push(parseInt(input.value, 10) / 180);
});

animate();

function animate() {
  box.update();
  canvas.height = window.innerHeight;
  box.draw(ctx);
  for (let angle of arrow) {
    drawArrow(
      ctx,
      box.position.x - box.dimension.width / 2,
      box.position.y - box.dimension.height / 2,
      box.position.x -
        box.dimension.width / 2 +
        100 * Math.cos(-Math.PI * angle),
      box.position.y -
        box.dimension.height / 2 +
        100 * Math.sin(-Math.PI * angle),
      3,
      "gray"
    );
  }

  requestAnimationFrame(animate);
}
