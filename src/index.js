import * as PIXI from 'pixi.js'
import style from './style/style.css'
import config from './config/game'

class Main {
    Application = PIXI.Application
    app = new this.Application({
        width: config.width,
        height: config.height,
        antialias: true,
        transparent: false,
        resolution: 1
    })
    loader = PIXI.loader
    resources = PIXI.loader.resources
    sprite = PIXI.sprite

    constructor() {
        this.initLayout()
        style;
    }

    initLayout() {
        document.getElementById('app').appendChild(this.app.renderer.view);
        this.loader
            .add([config.assets.map(asset => asset)])
            .on("progress", this.loadProgressHandler)
            .load(this.setup);
    }

    loadProgressHandler(loader, resource) {
        console.log("loading: ", resource);
        console.log("progress: " + loader.progress + "%");
    }

    setup() {
        console.log("setup");
    }
}

const main = new Main()