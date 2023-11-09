class Particula {
  constructor(_x, _y) {
    this.pos = createVector(_x, _y);
    this.lifespan = Math.ceil(random(10, 200));
    this.isAlive = true;
    this.side = Math.ceil(random(3, 15));
    this.color = random(150);
  }
  update() {
    this.r = random(100);

    if (this.r < 20) {
      this.pos.y -= this.side;
    } else if (this.r < 40) {
      this.pos.x += this.side;
    } else if (this.r < 80) {
      this.pos.y += this.side;
    } else {
      this.pos.x -= this.side;
    }
    this.lifespan -= 1;
    if (this.lifespan <= 0) {
      this.isAlive = false;
    }
  }
  display() {
    Fill(this.color);
    stroke(255);
    square(this.pos.x, this.pos.y, this.side);
  }
}
