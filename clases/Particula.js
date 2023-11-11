class Particula {
  constructor(_x, _y, _color) {
    this.pos = createVector(_x, _y);
    this.isAlive = true;
    this.side = random(3, 15);
    this.color = _color || color(random(255), random(255), random(255));
    this.lifespan = Math.ceil(random(10, 200));
  }

  update() {
    let r = random(100);

    if (r < 20 && this.pos.y > height / 4) {
      this.pos.y -= this.side;
    } else if (r < 40 && this.pos.x < (3 * width) / 4) {
      this.pos.x += this.side;
    } else if (r < 80 && this.pos.y < (3 * height) / 4) {
      this.pos.y += this.side;
    } else if (this.pos.x > width / 4) {
      this.pos.x -= this.side;
    }

    this.lifespan -= 1;
    if (this.lifespan <= 0) {
      this.isAlive = false;
    }
  }

  display() {
    console.log(this.color);
    fill(this.color.levels[0], this.color.levels[1], this.color.levels[2]);
    stroke(255);
    square(this.pos.x, this.pos.y, this.side);
  }
}
