class Sistema {
  constructor(_x, _y, _color) {
    this.pos = createVector(_x, _y);
    this.isAlive = true;
    this.side = random(3, 15);
    this.color = _color;
    this.lifespan = Math.ceil(random(10, 200));
  }

  update() {
    let r = random(100);

    if (r < 20) {
      this.pos.y -= this.side;
    } else if (r < 40) {
      this.pos.x += this.side;
    } else if (r < 80) {
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
    fill(this.color.levels[0], this.color.levels[1], this.color.levels[2]);
    stroke(255);
    square(this.pos.x, this.pos.y, this.side);
  }
}

let sistemas = [];

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 5; i++) {
    let colorSistema = color(random(255), random(255), random(255));
    sistemas.push(new Sistema(random(width), random(height), colorSistema));
  }
}

function draw() {
  background(220);
  for (let i = 0; i < sistemas.length; i++) {
    sistemas[i].update();
    sistemas[i].display();
  }
}
