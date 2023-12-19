let sistemas = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Crear múltiples sistemas con diferentes colores
  for (let i = 0; i < 3; i++) {
    sistemas.push(new Sistema());
  }
}

function draw() {
  background(255, 20);

  // Actualizar y mostrar cada sistema
  for (let i = 0; i < sistemas.length; i++) {
    sistemas[i].update();
    sistemas[i].display();
  }
}
