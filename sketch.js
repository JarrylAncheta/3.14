let array = [];
let noiseOffset = 0.0;
let strokeWidth = 5

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(140, 190, 210);

  drawGrid();
//  strokeWeight(5);
  noFill();

}

function draw() {
  //background(1, 50, 32);

  background(190, 260, 100);
  strokeWeight(strokeWidth)

  noiseOffset += 0.05 //same as noiseOffset=noiseOffset+0.01
  strokeWidth = noise(noiseOffset) * 10;

  line(mouseX, mouseY, pmouseX, pmouseY);
  //  array.push([mouseX, mouseY]);

}


function keyTyped() {

  if (key === 's') {
    saveCanvas('fileName', 'jpg')
  } else if (key === 'c') {
    clear();
  }
  else if (key === 'd'){
    display();
  }
  return false;
}

function drawGrid() {
  numCells = 20;
  fillColor = 255;

  for (let i = 0; i <= width; i += width / numCells) {
    for (let j = 0; j <= height; j += height / numCells) {
if (fillColor === 255){
  fillColor = 200;
}else{
  fillColor = 255;
}
    fill(fillColor)
;      rect(i, j, width / numCells, height / numCells)

    }
  }
}
