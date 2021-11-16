let array =[];
let backgroundColor = 255;

function setup() {
  createCanvas(600, 600);
  drawGrid();
    strokeWeight (0);
      noFill ();

}

function draw() {


  if (mouseIsPressed){
    backgroundColor = -20;
    background(backgroundColor);

      array.push([mouseX, mouseY]);
}

function mousePressed (){
  array = [];
  backgroundColor = 255;
}

  function keyTyped () {
  if (key === 's'){
saveCanvas ('fileName' , 'png');
  } else if (key === 'd'){

beginShape ();
for ( let i =0; i < array.length; i++) {
curveVertex (array[i][0], array [i][1])
}
endShape ();
}
}

      return false;

}

function drawGrid(){
  numCells = 10;
fillColor = 80;
    noStroke ();
  for (let i = 0; i <=width; i += width/ numCells){
  for (let j = 0; j <=width; j += width/ numCells){
    if (fillColor === 255){
      fillColor = 150;
    } else {
      fillColor = 255;
    }
    fill (fillColor);
    rect (i, j, width / numCells, height / numCells);
    }
  }
   strokeWeight (5);

}
