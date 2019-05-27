const { TYPE_DIRT, TYPE_GRASS } = require('../constants')

const state = {
  blockType: TYPE_DIRT,
  lastBlockInteractionY: undefined
}

class State {
   constructor() {
     
   }

  setBlockType(wheelDelta) {
    const types = [TYPE_DIRT, TYPE_GRASS]
    const currentIndex = types.indexOf(state.blockType)

    if(wheelDelta > 0) {
      if(currentIndex === types.length - 1) {
        state.blockType = types[0]
      } else {
        state.blockType = types[currentIndex + 1]
      }
      return
    }

    if(wheelDelta < 0) {
      if(currentIndex === 0) {
        state.blockType = types[types.length - 1]
      } else {
        state.blockType = types[currentIndex - 1]
      }
    }
  }
  
  getBlockType() {
    return state.blockType
  }
}

module.exports = State