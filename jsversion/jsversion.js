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
  mw = width / 2;
  mh = height / 2;
  imageMode(CENTER);
  slider = createSlider(200, 800, 500);
  slider.position(10, 10);
  slider.style('width', '');
}


function draw() {
  background(200);
  w = img.width;
  h = img.height;
  console.log( [iw(a1), iw(a2), iw(a3), iw(a4), iw(a5), iw(img)]
    );
  image(img, mw, mh, iw(img), ih(img) );
  var val = slider.value();
  val = floor(val / 100)* 100;
  text(val, 100, 100);
  if (val < 100) {
    image(a1, w / 2, mh, iw(a1), ih(a1) );
  }
  image(prd, mw - 500 + val, mh, iw(prd), ih(prd) );
}

function ih(img) {
  return img.height / 3;
}

function iw(img) {
  return img.width / 3;
}
