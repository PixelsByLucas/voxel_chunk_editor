class Block {
  constructor(type, update, placeHolder, instance) {
    this.type = type
    this.needsUpdate = update
    this.placeHolder = placeHolder
    this.instance = instance
  }

  addInstance(instance) {
    this.instance = instance
  }

  removeInstance() {
    this.instance = undefined
  }
}

module.exports = Block