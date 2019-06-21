from pyp5js import *

img = None

def setup():
	global img
	createCanvas(1000, 500)
	imageMode(CENTER)
	img = loadImage('ESPACO.png')
	# a1 = loadImage('assets/01.png')

def draw():
	w, h = img.width / 5, img.height / 5
	rect(10, 10, 10, 10)
    image(img, width / 2, height /2 , 5, 5)
    # print("{} {}"
    # 	.format(img.width, img.height))
