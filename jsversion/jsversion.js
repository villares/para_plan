var img;

function preload(){
img = loadImage('ESPACO.png');
}

function setup() {
  createCanvas(1000, 500);
}


function draw() {
  w = img.width;
  h = img.height;
  rect(10, 10, 10 + w/10, 10 + h/10);
  
}
