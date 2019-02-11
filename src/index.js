import * as PIXI from 'pixi.js'
import style from './style/style.css'
import config from './config/game'
import BlockFactory from './blockFactory';
import KeyLogger from './keyLogger';

let req = require.context('./assets/images/', false, /.*\.png$/)
req.keys().forEach(key => req(key))

class Main {

    app = new PIXI.Application({
        width: config.width,
        height: config.height,
        antialias: true,
        transparent: false,
        resolution: 1
    })
    loader = PIXI.loader
    resources = PIXI.loader.resources
    Sprite = PIXI.Sprite

    constructor() {
        this.initLayout()
        style;

        this.activeBlock = null

        this.keyLogger = new KeyLogger()
        this.keyLogger.on('keyDown', this.handleKeyDown.bind(this))
        this.blockFactory = new BlockFactory(config.assets, this.resources)
    }

    initLayout() {
        document.getElementById('app').appendChild(this.app.renderer.view);

        this.loader
            .add(config.assets.map(asset => ({ name: asset.name, url: asset.tile })))
            .on('progress', this.loadProgressHandler)
            .load(this.setup.bind(this));
    }

    loadProgressHandler(loader, resource) {
        //console.log('loading: ', resource);
        //console.log('progress: ' + loader.progress + '%');
    }

    setup() {
        this.activeBlock = this.app.stage.addChild(this.blockFactory.getBlock())
        this.app.ticker.add(function(delta) {
            // just for fun, let's rotate mr rabbit a little
            // delta is 1 if running at 100% performance
            // creates frame-independent transformation
            if(this.activeBlock) this.activeBlock.y += 0.1 * delta;
        });
    }

    handleKeyDown(keyCode){
        console.log('handleKeyDown', keyCode)
        switch (keyCode) {
            case KeyLogger.KEYCODES.UP:
                this.activeBlock.rotate();

        }
    }
}

const main = new Main()