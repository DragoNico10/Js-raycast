class Player{
    constructor(){
        this.costume0
        this.costume1
        this.player
    }
    preloadCostumes(){
        this.costume0=loadImage("./assets/Player/Player.png")
        this.costume1=loadImage("./assets/Player/Hitbox.png")
    }
    startup(){
        this.player = createSprite(0, 0)
        this.player.addImage("costume0", this.costume0)
        this.player.addImage("costume1", this.costume1)
        DELTA=0
        health=100
        FOV=60
        RES=8
    }
    run(){

    }
}