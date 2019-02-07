import * as PIXI from 'pixi.js';

export default class Block extends PIXI.Container {
    constructor(resource, matrix) {
        super()
        this.resource = resource
        this.matrix = matrix
        this.draw();
    }

    draw() {
        this.matrix.forEach(
            (row, i) => row.forEach(
                (col, j) => {
                    if (row[j]) {
                        const tile = new PIXI.Sprite(this.resource.texture)
                        tile.x = j * tile.width
                        tile.y = i * tile.width
                        this.addChild(tile)
                    }
                })
        )
    }
}