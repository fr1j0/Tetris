import * as PIXI from 'pixi.js'
import style from './style/style.css'

class Main {
    Application = PIXI.Application
    app = new this.Application({
        width: 240,
        height: 400,
        antialias: true,
        transparent: false,
        resolution: 1
    })
    loader = PIXI.loader
    resources = PIXI.loader.resources
    sprite = PIXI.sprite

    constructor() {
        this.initLayout()
    }

    initLayout() {
        document.getElementById('app').appendChild(this.app.renderer.view);
    }
}

const main = new Main()