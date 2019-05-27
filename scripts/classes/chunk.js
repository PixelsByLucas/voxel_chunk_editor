const Block = require('./block.js')
const Babylon = require('babylonjs')
const { CHUNK_SIZE, TYPE_EMPTY, TYPE_GRASS, TYPE_DIRT } = require('../constants.js')
const { objectsHaveSameVal, getXYZ, getVoxelFromFace } = require('../utils')


class Chunk {
  constructor(blocks, state) {
    this.blocks = blocks
    this.state = state
    this.voxels = []
    this.placeHolder = {
      lastTarget: undefined
    }

    for(let x = 0; x < CHUNK_SIZE; x++) {
      this.voxels[x] = []

      for(let y = 0; y < CHUNK_SIZE; y++) {
        this.voxels[x][y] = []

        for(let z = 0; z < CHUNK_SIZE; z++) {
          this.voxels[x][y][z] = new Block(TYPE_EMPTY, false, false)
          // this.voxels[x][y][z].alwaysSelectAsActiveMesh = true

          if(y === 0) {
            if(z === 0 || z === 15 || x === 0 || x === 15) {
              this.voxels[x][y][z] = new Block(TYPE_GRASS, true, false)
            } else {
              this.voxels[x][y][z] = new Block(TYPE_DIRT, true, false)
            }
          }
        }
      }
    }
  }

  getVoxel(x, y, z) {
    return this.voxels[x][y][z]
  }

  getTarget(pickInfo) {
    let result = {}
    
    if(pickInfo.pickedMesh.id === 'groundMesh') {
      result = getXYZ(pickInfo.pickedPoint)
    } else {
      result = getVoxelFromFace(pickInfo.faceId, pickInfo.pickedMesh.absolutePosition)
    }

    if(result === null) {
      const activePlaceHolder = this.getActivePlaceHolder()
      const { x, y, z } = activePlaceHolder

      if(activePlaceHolder && this.voxels[x][y][z].placeHolder) {
        this.removeBlock(x,y,z)
      }
    }
    return result
  }

  getActivePlaceHolder() {
    const {lastTarget} = this.placeHolder
    let result = {}

    if(!lastTarget || Object.entries(lastTarget).length === 0) {
      return false
    } else {
      const {x, y, z} = lastTarget
      result = {x, y, z}
      return result
    }
  }

  getNeighbours(x, y, z, origin) {
    let result = []

    result.push(z < 15 ? this.voxels[x][y][z+1] : null)
    result.push(x < 15 ? this.voxels[x+1][y][z] : null)
    result.push(z > 0 ? this.voxels[x][y][z-1] : null)
    result.push(x > 0 ? this.voxels[x-1][y][z] : null)

    if(origin) {
      const originCoords = { x: origin.x, y: origin.y, z: origin.z }

      if(objectsHaveSameVal({ x: x, y:y, z: z+1 }, originCoords)) {
        result[0] = null
      }
      if(objectsHaveSameVal({ x: x+1, y: y, z: z}, originCoords)) {
        result[1] = null
      }
      if(objectsHaveSameVal({ x: x, y: y, z: z-1}, originCoords)) {
        result[2] = null
      }
      if(objectsHaveSameVal({ x: x-1, y: y, z: z}, originCoords)) {
        result[3] = null
      }
    }
    return result
  }

  getGrassBlock(x, y, z) {
    let result
    const neighbours = this.getNeighbours(x, y, z)
    let grassNeighbours = neighbours.filter((n) => n && n.type === TYPE_GRASS)

    switch(grassNeighbours.length) {
      case 0:
        result = this.blocks.list[4]
      break
      case 1:
        // single neighbour to left
        if(grassNeighbours.includes(neighbours[0]) ) {
          result = this.blocks.list[17]
          break
        }

        // single neighbour to the front
        if(grassNeighbours.includes(neighbours[1])) {
          result = this.blocks.list[18]
          break
        }

        // single neighbour to the right
        if(grassNeighbours.includes(neighbours[2])) {
          result = this.blocks.list[8]
          break
        }

        // single neighbour to the rear
        if(grassNeighbours.includes(neighbours[3])) {
          result = this.blocks.list[9]
          break
        }

        result = this.blocks.list[6]
      break
      case 2:

        if(grassNeighbours.includes(neighbours[0]) && grassNeighbours.includes(neighbours[2])) {
          result = this.blocks.list[14]
          break
        }
        if(grassNeighbours.includes(neighbours[1]) && grassNeighbours.includes(neighbours[3])) {
          result = this.blocks.list[19]
          break
        }
        if(grassNeighbours.includes(neighbours[0]) && grassNeighbours.includes(neighbours[1])) {
          result = this.blocks.list[15]
          break
        }
        if(!grassNeighbours.includes(neighbours[0]) && !grassNeighbours.includes(neighbours[1])) {
          result = this.blocks.list[20]
          break
        }

        // corner block
        if(grassNeighbours.includes(neighbours[0]) && grassNeighbours.includes(neighbours[3])) {
          result = this.blocks.list[16]
          break
        }
        if(!grassNeighbours.includes(neighbours[0]) && !grassNeighbours.includes(neighbours[3])) {
          result = this.blocks.list[21]
          break
        }

      case 3:
        // single dirt neighbour to the left
        if(!grassNeighbours.includes(neighbours[0]) ) {
          result = this.blocks.list[12]
          break
        }

        // single dirt neighbour to the front
        if(!grassNeighbours.includes(neighbours[1])) {
          result = this.blocks.list[11]
          break
        }

        // single dirt neighbour to the right
        if(!grassNeighbours.includes(neighbours[2])) {
          result = this.blocks.list[10]
          break
        }

        // single dirt neighbour to the rear
        if(!grassNeighbours.includes(neighbours[3])) {
          result = this.blocks.list[13]
          break
        }
        break
      case 4:
        result = this.blocks.list[6]
      break
      default:
        result = this.blocks.list[6]
    }
    return result
  }

  updateGrassBlock(x, y, z) {
    this.removeBlock(x, y, z)

    const instance = this.getGrassBlock(x, y, z).createInstance(''+x*100+y*10+z)
    instance.position = new Babylon.Vector3(x * 16, y * 16 ,z * 16)
    this.voxels[x][y][z] = new Block (TYPE_GRASS, false, false, instance)
  }

  refreshPlaceHolder(x, y, z) {
    this.removeBlock(x, y, z)
    this.placeHolder.lastTarget = undefined
    this.addVoxel({x, y, z}, true, this.state.getBlockType())
    this.update()
  }


  addVoxel(target, isPlaceHolder, type) {
    const {x, y, z} = target
    // prevents double placement of blocks
    if(this.voxels[x][y][z].instance && !this.voxels[x][y][z].placeHolder) { 
      return 
    }

    if(isPlaceHolder) {
      const { lastTarget } = this.placeHolder

        if(objectsHaveSameVal(lastTarget, target) ) {
          return
          
        } else {
          this.voxels[x][y][z] = new Block(type, true, true)
          this.placeHolder.lastTarget = {x, y, z}

          // DELETE PREVIOUS PLACEHOLDER
          if(lastTarget) {
            if(this.voxels[lastTarget.x][lastTarget.y][lastTarget.z].placeHolder) {
              this.removeBlock(lastTarget.x, lastTarget.y, lastTarget.z)
            }
          }
        }
      return
    }

    if(!isPlaceHolder) {
      if(this.voxels[x][y][z].placeHolder) {
        this.removeBlock(x, y, z)
        this.placeHolder.lastTarget = undefined
      }
      this.voxels[x][y][z] = new Block(type, true, false)
    }
  }

  removeVoxel(x, y, z) {
    const placeHolder = this.getActivePlaceHolder()
    if(placeHolder) {
      this.removeBlock(placeHolder.x, placeHolder.y, placeHolder.z)
      this.placeHolder.lastTarget = undefined
    }
    
    const { instance: prevInstance } = this.voxels[x][y][z]
    this.voxels[x][y][z] = new Block(TYPE_EMPTY, true, false, prevInstance)
  }

  removeBlock(x, y, z) {
    if(this.voxels[x][y][z].instance) {
      this.voxels[x][y][z].instance.dispose()
    }
    this.voxels[x][y][z] = new Block(TYPE_EMPTY, false, false)
  }
  
  update() {
    for(let x = 0; x < CHUNK_SIZE; x++) {
      for(let y = 0; y < CHUNK_SIZE; y++) {
        for(let z = 0; z < CHUNK_SIZE; z++) {
          if(!this.voxels[x][y][z].needsUpdate) {
            continue
          } else {
            // RESET UPDATE PROPERTY OF BLOCK
          this.voxels[x][y][z].needsUpdate = false 
          }

          // VOXEL NEEDS ADDED
          if(this.voxels[x][y][z].type !== TYPE_EMPTY && !this.voxels[x][y][z].instance) {
            // ADD DIRT
            if(this.voxels[x][y][z].type === TYPE_DIRT) {
              // UPDATE VOXEL ITSELF
              if(y === 15 || this.voxels[x][y + 1][z].type === TYPE_EMPTY) {
                // CREATE PLACEHOLDER DIRTTOP
                if(this.voxels[x][y][z].placeHolder) {
                  const instance = this.blocks.list[2].createInstance(''+x*100+y*10+z)
                  instance.position = new Babylon.Vector3(x * 16, y * 16 ,z * 16)
                  instance.isPickable = false

                  this.voxels[x][y][z] = new Block(TYPE_DIRT, false, true, instance)

                // else CREATE DIRTTOP
                } else {
                  const instance = this.blocks.list[0].createInstance(''+x*100+y*10+z)
                  instance.position = new Babylon.Vector3(x * 16, y * 16 ,z * 16)

                  this.voxels[x][y][z] = new Block(TYPE_DIRT, false, false, instance)
                }
              } else {

                // else CREATE PLACEHOLDER DIRTBOTTOM
                if(this.voxels[x][y][z].placeHolder) {
                  const instance = this.blocks.list[3].createInstance(''+x*100+y*10+z)
                  instance.position = new Babylon.Vector3(x * 16, y * 16 ,z * 16)
                  instance.isPickable = false

                  this.voxels[x][y][z] = new Block(TYPE_DIRT, false, true, instance)

                // else CREATE DIRTBOTTOM
                } else {
                  const instance = this.blocks.list[1].createInstance(''+x*100+y*10+z)
                  instance.position = new Babylon.Vector3(x * 16, y * 16 ,z * 16)

                  this.voxels[x][y][z] = new Block(TYPE_DIRT, false, false, instance)
                }
              }

              // UPDATE NEIGHBOURS
              if(!this.voxels[x][y][z].placeHolder) {
                const neighbours = this.getNeighbours(x, y, z)

                for(const n of neighbours) {
                  if(n && n.instance && n.type === TYPE_GRASS) {
                    const {x, y, z} = getXYZ(n.instance.absolutePosition)
                    this.updateGrassBlock(x, y, z)
                  }
                }
              }
            }
            // else ADD GRASS
            if(this.voxels[x][y][z].type === TYPE_GRASS) {
              // UPDATE VOXEL ITSELF
              if(this.voxels[x][y][z].placeHolder) {
                const instance = this.blocks.list[7].createInstance(''+x*100+y*10+z)
                instance.position = new Babylon.Vector3(x * 16, y * 16 ,z * 16)
                instance.isPickable = false
                this.voxels[x][y][z] = new Block(this.voxels[x][y][z].type, false, true, instance)
              } else {

                if(y === 15 || this.voxels[x][y+1][z].type === TYPE_EMPTY) {
                  const instance = this.getGrassBlock(x, y, z).createInstance(''+x*100+y*10+z)
                  instance.position = new Babylon.Vector3(x * 16, y * 16 ,z * 16)
                  this.voxels[x][y][z] = new Block(TYPE_GRASS, false, false, instance)
                } else {

                  const instance = this.blocks.list[1].createInstance(''+x*100+y*10+z)
                  instance.position = new Babylon.Vector3(x * 16, y * 16 ,z * 16)
                  this.voxels[x][y][z] = new Block(TYPE_DIRT, false, false, instance)
                }

                // UPDATE NEIGHBOURS
                const neighbours = this.getNeighbours(x, y, z)
  
                for(const n of neighbours) {
                  if(n && n.instance && n.type === TYPE_GRASS) {
                    const { x: nx, y: ny, z: nz } = getXYZ(n.instance.absolutePosition)
                    this.updateGrassBlock(nx, ny, nz)
                  }
                }
              }
            }
            // UPDATE VOXEL BELOW
            if(y !== 0 && this.voxels[x][y-1][z].instance && !this.voxels[x][y][z].placeHolder) {
              if(this.voxels[x][y-1][z].instance.material.id !== 'dirtBottom') {
                const targetWasGrass = this.voxels[x][y-1][z].type === TYPE_GRASS
                this.removeBlock(x, y-1, z)

                const instance = this.blocks.list[1].createInstance(''+x*100+(y-16)*10+z)
                instance.position = new Babylon.Vector3(x * 16, (y-1) * 16 ,z * 16)
                this.voxels[x][y-1][z] = new Block(TYPE_DIRT, false, false, instance)

                if(targetWasGrass) {
                  const neighbours = this.getNeighbours(x, y-1, z)

                  for(const n of neighbours) {
                    if(n && n.instance && n.type === TYPE_GRASS) {
                      const {x, y, z} = getXYZ(n.instance.absolutePosition)
                      this.updateGrassBlock(x, y, z)                  
                    }
                  }
                }
              }
            }
          }
          // VOXEL NEEDS REMOVED
          if(this.voxels[x][y][z].type === TYPE_EMPTY && this.voxels[x][y][z].instance) {
            // UPDATE VOXEL ITSELF
            this.removeBlock(x, y, z)

            // UPDATE VOXEL BELOW
            if(y !== 0 && this.voxels[x][y-1][z].instance && !this.voxels[x][y][z].placeHolder) {
              if(this.voxels[x][y-1][z].instance.material.id === 'dirtBottom') {
                this.removeBlock(x, y-1, z)
                const instance = this.blocks.list[0].createInstance(''+x*100+(y-16)*10+z)
                instance.position = new Babylon.Vector3(x * 16, (y-1) * 16 ,z * 16)
                this.voxels[x][y-1][z].addInstance(instance)
              }
            }
            
            // UPDATE NEIGHBOURS
            if(!this.voxels[x][y][z].placeHolder) {
              const neighbours = this.getNeighbours(x, y, z)

              for(const n of neighbours) {
                if(n && n.instance && n.type === TYPE_GRASS) {
                  const {x, y, z} = getXYZ(n.instance.absolutePosition)
                  this.updateGrassBlock(x, y, z)                  
                }
              }
            }
          }
        }
      }
    }
  }
}
module.exports = Chunk
