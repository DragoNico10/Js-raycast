var camera_dir, collectables, DIR, Draw_IDX, DV, FOV, FPS, Ghost, health, height, RES, DELTA
var gui
var FOVMin = 0
var FOVMax=120
var FOVStep=1
var RESMin = 0
var RESMax=120
var RESStep=1
function preload(){

}
function setup(){
  createCanvas(480,360)
  FOV=60
  RES=8
  gui = createGui()
  gui.addGlobals('FOV', 'RES')
}
function draw(){
 clear()
 background("green")
 push()

 pop()
}