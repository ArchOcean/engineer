const canvas = document.getElementById("mainCanvas");
const btn = document.getElementById("enterDegree");
const input = document.getElementById("fdegree");

canvas.width = 800;

const originalHeight = canvas.height;
const originalWidth = canvas.width;

const ctx = canvas.getContext("2d");
const box = new Object(300, 400, 100, 100);

let arrow = [
  0,
  -Math.PI / 6,
  -Math.PI / 4,
  -Math.PI / 3,
  -Math.PI / 2,
  -Math.PI,
  (3 * -Math.PI) / 2,
];

btn.addEventListener("click", (event) => {
  event.preventDefault();
  arrow.push(-Math.PI * (parseInt(input.value, 10) / 180));
});

animate();

function animate() {
  let ratio = Math.min(
    canvas.clientWidth / originalWidth,
    canvas.clientHeight / originalHeight
  );
  ctx.scale(ratio, ratio);
  box.update();
  canvas.height = window.innerHeight;
  box.draw(ctx);

  for (let angle of arrow) {
    drawArrow(
      ctx,
      box.origin.x,
      box.origin.y,
      box.origin.x + 200 * Math.cos(angle),
      box.origin.y + 200 * Math.sin(angle),
      4,
      "gray",
      angle
    );
  }

  requestAnimationFrame(animate);
}
