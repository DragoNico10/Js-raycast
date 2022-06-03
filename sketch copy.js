var camera_dir, collectables, DIR, Draw_IDX, DV, FOV, FPS, Ghost, health, height, RES
var FOV_slider, RES_slider

function preload(){

}
function setup(){
  createCanvas(480,360)
  FOV_slider = createSlider(1, 120, 60, 1);
  FOV_slider.position(10, 20);
  RES_slider = createSlider(1, 16, 8, 1);
  RES_slider.position(335, 20);
}
function draw(){
 clear()
 background("green")
 push()
 fill(255)
 rect(5, 0, 140, 40)
 fill(10)
 textSize(20)
 text("FOV", 10, 20)
 rectMode(CENTER)
 fill(255, 140, 26)
 stroke(-1)
 rect(77, 12, 30, 15, 20)
 fill(10)
 stroke(0)
 textSize(15)
 textBounds(FOV_slider.value(), 70, 17.5)
 pop()
}