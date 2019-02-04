export default class Block extends PIXI.Sprite{
    constructor(texture, type){
        super(texture)
        this.type = type

        console.log(this.type, texture)
    }
}