import * as PIXI from 'pixi.js';

export default class Block extends PIXI.Container {
    constructor(resource, matrix) {
        super()
        this.resource = resource
        this.matrix = matrix
        this.pos = 0
        this._draw();
    }

    nextPosition() {
        this.pos = this.pos < this.matrix.length - 1 ? this.pos + 1 : 0
    }

    hexToMatrix(hex) {
        return parseInt(hex, 16).toString(2).padStart(16, 0)
            .match(/[01]{1,4}/g)
            .map(bit => bit.split('').map(bit => parseInt(bit)))
    }

    _draw() {
        this.removeChildren()
        const matrixBin = this.hexToMatrix(this.matrix[this.pos])
        matrixBin.forEach(
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