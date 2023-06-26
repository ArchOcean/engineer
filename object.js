class Object {
  constructor(x, y, width, height) {
    this.position = {
      x: x,
      y: y,
    };
    this.width = width;
    this.height = height;
    this.acceleration = {
      x: 0,
      y: 0.0981,
    };
    this.velocity = {
      x: 0,
      y: 0,
    };
  }

  update() {
    // this.velocity.y += this.acceleration.y;
    // this.position.y += this.velocity.y;
  }

  draw(ctx) {
    ctx.save();
    // ctx.translate(this.position.x, this.position.y);

    ctx.beginPath();
    ctx.rect(
      this.position.x - this.width,
      this.position.y - this.height,
      this.width,
      this.height
    );
    ctx.fill();
    drawArrow(
      ctx,
      this.position.x - this.width / 2,
      this.position.y - this.height / 2,
      this.position.x - this.width / 2 + 100 * Math.cos(Math.PI / 2),
      this.position.y - this.height / 2 + 100 * Math.sin(Math.PI / 2),
      3,
      "gray"
    );
    ctx.restore();
  }
}
