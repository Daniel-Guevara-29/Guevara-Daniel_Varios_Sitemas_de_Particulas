let s;
let v;
let p;

function setup() {
  createCanvas(windowWidth, windowHeight);
  s = new Particula();
  v = new Particula();
  p = new Particula();
}

function draw() {
  background(255, 20);
  s.update();
  s.display();
  p.update();
  p.display();
  v.update();
  v.display();
}
