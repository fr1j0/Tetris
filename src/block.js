import * as PIXI from 'pixi.js';
import config from './config/game'

export default class Block extends PIXI.Container {
    constructor(resource, matrix) {
        super()
        this.resource = resource
        this.matrix = matrix
        this.pos = 0
        this._draw()
        this.coordinates = [0, 0]
    }

    getMatrix() {
        return this.hexToMatrix(this.matrix[this.pos])
    }

    rotate() {
        this.pos = this.pos < this.matrix.length - 1 ? this.pos + 1 : 0
        this._draw()
    }

    move(xDiff, yDiff) {
        this.coordinates[0] += xDiff
        this.coordinates[1] += yDiff
        console.log('this.coordinates', this.coordinates)
        this.setTransform(xDiff, yDiff)
        //this.setTransform(this.position.x + xDiff * config.block_size, this.position.y + yDiff * config.block_size)
        console.log('position: ', '(', this.position.x)
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