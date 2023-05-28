// Defining color items
let colorIndex = 0;
let targetColor;
let currentColor;
let colors = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], []];

function setup() {
  createCanvas(400, 400);

  // Filling color list
  for (let i = 0; i < colors.length; i++){
    colors[i][0] = random(90);
    colors[i][1] = random(90, 255);
    colors[i][2] = random(100, 255);
  }

  targetColor = color(colors[colorIndex][0],
    colors[colorIndex][1], colors[colorIndex][2]);
  currentColor = targetColor;
}

function draw() {
  currentColor = lerpColor(currentColor, targetColor, 0.01);
  background(currentColor);

  // Updating current and projected color values
  if (frameCount % 25 === 0) {
    colorIndex = (colorIndex + 1) % colors.length;
    targetColor = color(colors[colorIndex][0],
        colors[colorIndex][1], colors[colorIndex][2]);
}
  // Resetting color values every 150 frames 
  if (frameCount % 150 === 0) {
    for (let i = 0; i < colors.length; i++){
      colors[i][0] = random(90);
      colors[i][1] = random(90, 255);
      colors[i][2] = random(100, 255);
    }
  }
}
