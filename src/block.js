import * as PIXI from 'pixi.js';
import { hexToMatrix } from './utils/math';
import config from './config/game'

export default class Block extends PIXI.Container {

    constructor(resource, matrix) {
        super()
        this.resource = resource
        this.matrix = matrix
        this.pos = 0  // matrix index
        this._draw()
        this.coordinates = [0, 0]
    }

    getMatrix() {
        return hexToMatrix(this.matrix[this.pos])
    }

    rotate() {
        this.pos = this.pos < this.matrix.length - 1 ? this.pos + 1 : 0
        this._draw()
    }

    move(xDiff, yDiff) {
        this.coordinates[0] += xDiff
        this.coordinates[1] += yDiff
        //console.log('this.coordinates', this.coordinates)
        this.setTransform(this.coordinates[0] * config.block_size, this.coordinates[1] * config.block_size)
        //this.setTransform(this.position.x + xDiff * config.block_size, this.position.y + yDiff * config.block_size)
        //console.log('position: ', '(', this.position.x)
    }

    _draw() {
        this.removeChildren()
        const binaryMatrix = hexToMatrix(this.matrix[this.pos])
        binaryMatrix.forEach(
            (row, i) => row.forEach(
                (col, j) => {
                    if (row[j]) {
                        const tile = new PIXI.Sprite(this.resource.texture)
                        tile.width = tile.height = config.block_size
                        tile.x = j * tile.width
                        tile.y = i * tile.width
                        this.addChild(tile)
                    }
                })
        )
    }
}