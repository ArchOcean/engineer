class Object {
  constructor(x, y, width, height) {
    this.position = {
      x: x,
      y: y,
    };
    this.dimension = {
      width: width,
      height: height,
    };
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
      this.position.x - this.dimension.width,
      this.position.y - this.dimension.height,
      this.dimension.width,
      this.dimension.height
    );
    ctx.fill();

    ctx.restore();
  }
}
