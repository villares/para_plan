var img, a1, a2, a3, a4, a5;
var mw, mh;
var slider;

function preload() {
  img = loadImage('ESPACO.png');
  prd = loadImage('parede.png');
  a1 = loadImage('01.png');
  a2 = loadImage('02.png');
  a3 = loadImage('03.png');
  a4 = loadImage('04.png');
  a5 = loadImage('05.png');
}

function setup() {
  //createCanvas(1200, 600);
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  rectMode(CENTER);
  slider = createSlider(350, 750, 500);
  slider.position(10, 10);
  slider.style('width', '');
}


function draw() {
  translate(width / 2, height / 2)
    background(200);
  var W = iw(img);
  //console.log( iw(prd));
  fill(0);
  rect(0, 0, W - iw(prd)/2, ih(img)); 
  image(img, 0, 0, iw(img), ih(img) );
  var val = slider.value();
  val = floor(val / 50)* 50;
  //text(val, 100, 100);
  of = iw(prd) * 2;
  off = iw(prd) * 4;
  if (val <= 350) {
    image(a1, - off - W/2 + ih(a1)/2, 0, iw(a1), ih(a1) );
    scale(-1, 1);
    image(a5, + off - W/2 + ih(a5)/2, 0, iw(a5), ih(a5) );
  } else if (val <= 450) {
    image(a2, - of - W/2 + ih(a2)/2, 0, iw(a2), ih(a2) );
    scale(-1, 1);
    image(a4, + of - W/2 + ih(a4)/2, 0, iw(a4), ih(a4) );
  } else if (val <= 550) {
    image(a3, - W/2 + ih(a3)/2, 0, iw(a3), ih(a3) );
    scale(-1, 1);
    image(a3, - W/2 + ih(a3)/2, 0, iw(a3), ih(a3) );
  } else if (val <= 650) {
    image(a4, + of - W/2 + ih(a4)/2, 0, iw(a4), ih(a4) );
    scale(-1, 1);
    image(a2, - of - W/2 + ih(a2)/2, 0, iw(a2), ih(a2) );
  } else if (val <= 750) {
    image(a5, + off - W/2 + ih(a5)/2, 0, iw(a5), ih(a5) );
    scale(-1, 1);
    image(a1, - off - W/2 + ih(a1)/2, 0, iw(a1), ih(a1) );
  }   //image(prd, mw - 750 + val, mh, iw(prd), ih(prd) );
}

function ih(img) {
  return img.height / 6;
}

function iw(img) {
  return img.width / 6;
}
