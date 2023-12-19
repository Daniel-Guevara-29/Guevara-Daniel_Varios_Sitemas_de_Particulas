class Sistema {
  constructor() {
    this.pos = createVector(width / 2, height / 2);
    this.ps = [];
    this.t = random(100);

    let colores = [color(0, 0, 255), color(255, 0, 0), color(0, 255, 0)];
    this.color = random(colores);
  }
  update() {
    this.t += 0.01;

    this.pos.x = map(noise(this.t), 0, 1, 0, width);
    this.pos.y = map(noise(this.t + 10), 0, 1, 0, height);

    this.p = new Particula(this.pos.x, this.pos.y, this.color);
    this.ps.push(this.p);

    for (let i = 0; i < this.ps.length; i++) {
      if (!this.ps[i].isAlive) {
        this.ps.splice(i, 1);
      }
    }
  }
  display() {
    for (let i = 0; i < this.ps.length; i++) {
      this.ps[i].update();
      this.ps[i].display();
    }
  }
}
