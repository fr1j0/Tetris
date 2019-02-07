import config from '../config/game'

export const getConfigForBlockName = blockName =>
    config.assets.find(asset => asset.name === blockName.toUpperCase())
