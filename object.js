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
      y: 0,
    };
    this.velocity = {
      x: 0,
      y: 0,
    };
    this.origin = {
      x: 0,
      y: 0,
    };
  }

  update() {
    // this.velocity.y += this.acceleration.y;
    if (this.position.y >= 800) {
      this.velocity.y = -this.velocity.y * 0.95;
    } else {
      this.velocity.y += this.acceleration.y;
    }
    this.position.y += this.velocity.y;

    this.origin = {
      x: box.position.x - box.dimension.width / 2,
      y: box.position.y - box.dimension.height / 2,
    };
  }

  draw(ctx) {
    ctx.save();

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
