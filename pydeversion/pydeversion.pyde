def setup():
  global img
  size(1000, 500)
  imageMode(CENTER)
  img = loadImage('ESPACO.png')
  # a1 = loadImage('assets/01.png')

def draw():
  w, h = img.width / 5, img.height / 5
  rect(10, 10, 10, 10)
  image(img, width / 2, height /2 , w, h)
