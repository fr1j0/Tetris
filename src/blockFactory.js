import Block from './block';

export default class BlockFactory {

    constructor(assets, resources) {
        this.assets = assets
        this.resources = resources
    }

    getBlock() {
        const rnd = (Math.random() * this.assets.length) | 0;
        const randomAsset = this.assets[rnd]

        let block = new Block(this.resources[randomAsset.tile], randomAsset.matrix);
        block.x = Math.random() * 100;
        block.y = Math.random() * 200;

        return block
    }
}