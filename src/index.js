import * as PIXI from 'pixi.js'
import './style/style.css'
import config from './config/game'
import BlockFactory from './blockFactory';
import KeyLogger from './keyLogger';
import blueTile from './assets/images/blue.png'
import cyanTile from './assets/images/cyan.png'
import greenTile from './assets/images/green.png'
import orangeTile from './assets/images/orange.png'
import purpleTile from './assets/images/purple.png'
import redTile from './assets/images/red.png'
import yellowTile from './assets/images/yellow.png'

/*
let req = require.context('./assets/images/', false, /.*\.png$/)
req.keys().forEach(key => {

    console.log(key)
    req(key)
})*/

class Main {

    constructor() {
        this.app = new PIXI.Application({
            width: config.columns * config.block_size,
            height: config.rows * config.block_size,
            antialias: true,
            transparent: false,
            resolution: 1
        })
        this.loader = PIXI.loader
        this.resources = PIXI.loader.resources

        this.initLayout()

        this.activeBlock = null

        this.keyLogger = new KeyLogger()
        this.keyLogger.on('keyDown', this.handleKeyDown.bind(this))
        this.blockFactory = new BlockFactory(config.assets, this.resources)

        this.interval = 1
        this.cumulatedDelta = 0

        this.stageMatrix = this.buildStageMatrix()
        console.log(this.stageMatrix)
    }

    initLayout() {
        document.getElementById('app').appendChild(this.app.renderer.view);

        this.loader
        //.add(config.assets.map(asset => ({ name: asset.name, url: asset.tile })))
            .add([
                { name: 'blueTile', url: blueTile },
                { name: 'cyanTile', url: cyanTile },
                { name: 'greenTile', url: greenTile },
                { name: 'orangeTile', url: orangeTile },
                { name: 'purpleTile', url: purpleTile },
                { name: 'redTile', url: redTile },
                { name: 'yellowTile', url: yellowTile }
            ])
            .on('progress', this.loadProgressHandler)
            .load(this.setup.bind(this));
    }

    buildStageMatrix() {
        return new Array(config.rows).fill([])
            .map(col => new Array(config.columns).fill(0))
    }

    loadProgressHandler(loader, resource) {
        //console.log('loading: ', resource);
        //console.log('progress: ' + loader.progress + '%');
    }

    setup() {
        this.addNewBlock()
        this.app.ticker.speed = .01
        this.app.ticker.add(delta => this.update(delta))
    }

    addNewBlock() {
        const block = this.blockFactory.getBlock()
        this.activeBlock = this.app.stage.addChild(block)
        this.activeBlock.move(0, 0)
    }

    update(delta) {
        this.cumulatedDelta += delta
        if (this.cumulatedDelta > this.interval) {
            this.cumulatedDelta = 0
            this.activeBlock.move(0, 1)
            this.mergeMatrix()
        }
    }

    mergeMatrix() {
        console.log(this.activeBlock.getMatrix())
    }

    handleKeyDown(keyCode) {
        switch (keyCode) {
            case KeyLogger.KEYCODES.UP:
                this.activeBlock.rotate();
                break;
            case KeyLogger.KEYCODES.DOWN:
                this.activeBlock.move(0, 1);
                break;
            case KeyLogger.KEYCODES.RIGHT:
                this.activeBlock.move(1, 0);
                break;
            case KeyLogger.KEYCODES.LEFT:
                this.activeBlock.move(-1, 0);
                break;
        }
    }
}

new Main()