const Babylon = require('babylonjs')

class BlockSetup {
  constructor(scene) {
    this.scene = scene
    this.list = []
    this.blockTypes = [
      'dirtTop', 'dirtBottom', 'dirtTopPH', 'dirtBottomPH', 'grass', 'grassPH', 'grass4', 'grass4PH', 'grass1a', 'grass1b', 
      'grass3a', 'grass3b', 'grass3c', 'grass3d', 'grass2a', 'grass2b', 'grass2c', 'grass1c', 'grass1d', 'grass2ar', 'grass2d', 'grass2e'
    ]
    this.blockOptions = {
      width: 16,
      height: 16,
      depth:16,
      faceUV: {
        dirtTop: null,
        dirtBottom: null,
        dirtTopPH: null,
        dirtBottomPH: null,
        grass: null,
        grassPH: null,
        grass4: null,
        grass4PH: null,
        grass1a: null,
        grass1b: null,
        grass3a: null,
        grass3b:null,
        grass3c: null,
        grass3d: null,
        grass2a: null,
        grass2ar: null,
        grass2b: null,
        grass2c: null,
        grass2d: null,
        grass2e: null,
        grass1c: null,
        grass1d: null
      }
    }
    this.materials = {
      dirtTop: null,
      dirtBottom: null,
      dirtTopPH: null,
      dirtBottomPH: null,
      grass: null,
      grassPH: null,
      grass4: null,
      grass4PH: null,
      grass1a: null,
      grass1b: null,
      grass3a: null,
      grass3b: null,
      grass3c: null,
      grass3d: null,
      grass2a: null,
      grass2ar: null,
      grass2b: null,
      grass2c: null,
      grass2d: null,
      grass2e: null,
      grass1c: null,
      grass1d: null
    }
  }

  initMaterials() {
    this.materials.dirtTop = new Babylon.StandardMaterial('dirtTop', this.scene)
    this.materials.dirtTop.diffuseTexture = new Babylon.Texture('./public/assets/map-dirt-top.png', this.scene)
  
    this.materials.dirtBottom = new Babylon.StandardMaterial('dirtBottom', this.scene)
    this.materials.dirtBottom.diffuseTexture = new Babylon.Texture('./public/assets/map-dirt-bottom.png', this.scene)

    this.materials.dirtTopPH = new Babylon.StandardMaterial('dirtTopPH')
    this.materials.dirtTopPH.diffuseTexture = new Babylon.Texture('./public/assets/map-dirt-top.png', this.scene)

    this.materials.dirtBottomPH = new Babylon.StandardMaterial('dirtBottomPH', this.scene)
    this.materials.dirtBottomPH.diffuseTexture = new Babylon.Texture('./public/assets/map-dirt-bottom.png', this.scene)

    this.materials.grass = new Babylon.StandardMaterial('grass', this.scene)
    this.materials.grass.diffuseTexture = new Babylon.Texture('./public/assets/map-grass.png', this.scene)

    this.materials.grassPH = new Babylon.StandardMaterial('grassPH', this.scene)
    this.materials.grassPH.diffuseTexture = new Babylon.Texture('./public/assets/map-grass.png', this.scene)

    this.materials.grass4 = new Babylon.StandardMaterial('grass4', this.scene)
    this.materials.grass4.diffuseTexture = new Babylon.Texture('./public/assets/grass-block4.png', this.scene)

    this.materials.grass4PH = new Babylon.StandardMaterial('grass4PH', this.scene)
    this.materials.grass4PH.diffuseTexture = new Babylon.Texture('./public/assets/grass-block4.png', this.scene)

    this.materials.grass1a = new Babylon.StandardMaterial('grass1a', this.scene)
    this.materials.grass1a.diffuseTexture = new Babylon.Texture('./public/assets/grass-block1a.png', this.scene)

    this.materials.grass1b = new Babylon.StandardMaterial('grass1b', this.scene)
    this.materials.grass1b.diffuseTexture = new Babylon.Texture('./public/assets/grass-block1b.png', this.scene)

    this.materials.grass1c = new Babylon.StandardMaterial('grass1c', this.scene)
    this.materials.grass1c.diffuseTexture = new Babylon.Texture('./public/assets/grass-block1c.png', this.scene)

    this.materials.grass1d = new Babylon.StandardMaterial('grass1d', this.scene)
    this.materials.grass1d.diffuseTexture = new Babylon.Texture('./public/assets/grass-block1d.png', this.scene)
    
    this.materials.grass3a = new Babylon.StandardMaterial('grass3a', this.scene)
    this.materials.grass3a.diffuseTexture = new Babylon.Texture('./public/assets/grass-block3a.png', this.scene)
    
    this.materials.grass3b = new Babylon.StandardMaterial('grass3b', this.scene)
    this.materials.grass3b.diffuseTexture = new Babylon.Texture('./public/assets/grass-block3b.png', this.scene)
    
    this.materials.grass3c = new Babylon.StandardMaterial('grass3c', this.scene)
    this.materials.grass3c.diffuseTexture = new Babylon.Texture('./public/assets/grass-block3c.png', this.scene)
    
    this.materials.grass3d = new Babylon.StandardMaterial('grass3d', this.scene)
    this.materials.grass3d.diffuseTexture = new Babylon.Texture('./public/assets/grass-block3d.png', this.scene)
    
    this.materials.grass2a = new Babylon.StandardMaterial('grass2a', this.scene)
    this.materials.grass2a.diffuseTexture = new Babylon.Texture('./public/assets/grass-block2a.png', this.scene)

    this.materials.grass2ar = new Babylon.StandardMaterial('grass2ar', this.scene)
    this.materials.grass2ar.diffuseTexture = new Babylon.Texture('./public/assets/grass-block2a-rotated.png', this.scene)
    
    this.materials.grass2b = new Babylon.StandardMaterial('grass2b', this.scene)
    this.materials.grass2b.diffuseTexture = new Babylon.Texture('./public/assets/grass-block2b-corner.png', this.scene)
    
    this.materials.grass2c = new Babylon.StandardMaterial('grass2c', this.scene)
    this.materials.grass2c.diffuseTexture = new Babylon.Texture('./public/assets/grass-block2c-corner.png', this.scene)

    this.materials.grass2d = new Babylon.StandardMaterial('grass2d', this.scene)
    this.materials.grass2d.diffuseTexture = new Babylon.Texture('./public/assets/grass-block2d-corner.png', this.scene)

    this.materials.grass2e = new Babylon.StandardMaterial('grass2e', this.scene)
    this.materials.grass2e.diffuseTexture = new Babylon.Texture('./public/assets/grass-block2e-corner.png', this.scene)

    
  }

  initBlockOptions() {
    const columns = 3
    const rows = 3

    let dirtTopFaceUV = new Array(6)
      // left
      dirtTopFaceUV[0] = new Babylon.Vector4(0/columns, 0/rows, (0+1)/columns, (0+1)/rows)
      dirtTopFaceUV[1] = new Babylon.Vector4(2/columns, 0, (2+1)/columns,(0+1)/rows)
      dirtTopFaceUV[2] = new Babylon.Vector4(1/columns, 1/rows, (1+1)/columns, (1 + 1)/rows)
      dirtTopFaceUV[3] = new Babylon.Vector4(1/columns, 1/rows, (1+1)/columns, (1 + 1)/rows)
      // top
      dirtTopFaceUV[4] = new Babylon.Vector4(1/columns, 0, (1+1)/columns, (0+1)/rows)
      // bottom
      dirtTopFaceUV[5] = new Babylon.Vector4(0/columns, 1/rows, (0+1)/columns, (1+1)/rows) 
      this.blockOptions.faceUV.dirtTop = dirtTopFaceUV
      this.blockOptions.faceUV.dirtTopPH = dirtTopFaceUV

    let dirtBottomFaceUV = new Array(6)
      dirtBottomFaceUV[0] = new Babylon.Vector4(0/columns, 2/rows, (0+1)/columns, (2+1)/rows)
      dirtBottomFaceUV[1] = new Babylon.Vector4((0+1)/columns, (2+1)/rows, 0/columns, 2/rows)
      dirtBottomFaceUV[2] = new Babylon.Vector4(1/columns, 0/rows, (1+1)/columns, (0+1)/rows)
      dirtBottomFaceUV[3] = new Babylon.Vector4(1/columns, 0/rows, (1+1)/columns, (0 + 1)/rows)
      // top
      dirtBottomFaceUV[4] = new Babylon.Vector4(2/columns, 0/rows, (2+1)/columns, (0+1)/rows)
      // bottom
      dirtBottomFaceUV[5] = new Babylon.Vector4(0/columns, 1/rows, (0+1)/columns, (1+1)/rows) 

      this.blockOptions.faceUV.dirtBottom = dirtBottomFaceUV
      this.blockOptions.faceUV.dirtBottomPH = dirtBottomFaceUV
    
    let grassFaceUV = new Array(6)
      grassFaceUV[0] = new Babylon.Vector4(0/columns, 0/rows, (0+1)/columns, (0+1)/rows)
      grassFaceUV[1] = new Babylon.Vector4(0/columns, 2/rows, (0+1)/columns, (2+1)/rows)
      grassFaceUV[2] = new Babylon.Vector4((2+1)/columns, (0+1)/rows, 2/columns, 0/rows)
      grassFaceUV[3] = new Babylon.Vector4((2+1)/columns, (0+1)/rows, 2/columns, 0/rows)
      grassFaceUV[4] = new Babylon.Vector4(1/columns, 0, (1+1)/columns, 1/rows)
      grassFaceUV[5] = new Babylon.Vector4(1/columns, 1/rows, (1+1)/columns, (1 + 1)/rows)

      this.blockOptions.faceUV.grass = grassFaceUV
      this.blockOptions.faceUV.grassPH = grassFaceUV

    let grass4FaceUV = new Array(6)
      grass4FaceUV[0] = new Babylon.Vector4(2/columns, 0/rows, (2+1)/columns, (0+1)/rows)
      grass4FaceUV[1] = new Babylon.Vector4(0/columns, 2/rows, (0+1)/columns, (2+1)/rows)
      grass4FaceUV[2] = new Babylon.Vector4((2+1)/columns, (0+1)/rows, 2/columns, 0/rows)
      grass4FaceUV[3] = new Babylon.Vector4((2+1)/columns, (0+1)/rows, 2/columns, 0/rows)

      grass4FaceUV[4] = new Babylon.Vector4(1/columns, 1/rows, (1+1)/columns, (1+1)/rows)
      grass4FaceUV[5] = new Babylon.Vector4(0/columns, 2/rows, (0+1)/columns, (2 + 1)/rows)

      this.blockOptions.faceUV.grass4 = grass4FaceUV
      this.blockOptions.faceUV.grass4PH = grass4FaceUV

      let grass1aFaceUV = new Array(6)
      //end face 
      grass1aFaceUV[0] = new Babylon.Vector4(1/columns, 1/rows, (1+1)/columns, (1+1)/rows)
      // unseen face
      grass1aFaceUV[1] = new Babylon.Vector4(0/columns, 0/rows, (0+1)/columns, (0+1)/rows)
      // front face
      grass1aFaceUV[2] = new Babylon.Vector4(0/columns, 0/rows, (0+1)/columns, (0+1)/rows)
      // back face
      grass1aFaceUV[3] = new Babylon.Vector4(0/columns, 2/rows, (0+1)/columns, (2+1)/rows)
      // top
      grass1aFaceUV[4] = new Babylon.Vector4(0/columns, 1/rows, (0+1)/columns, (1+1)/rows)
      grass1aFaceUV[5] = new Babylon.Vector4(2/columns, 0/rows, (2+1)/columns, (0+1)/rows)

      this.blockOptions.faceUV.grass1a = grass1aFaceUV

    let grass1bFaceUV = new Array(6)

      grass1bFaceUV[0] = new Babylon.Vector4(1/columns, 1/rows, (1+1)/columns, (1+1)/rows)
      grass1bFaceUV[1] = new Babylon.Vector4(1/columns, 0/rows, (1+1)/columns, (0+1)/rows)
      // end face
      grass1bFaceUV[2] = new Babylon.Vector4(0/columns, 0/rows, (0+1)/columns, (0+1)/rows)
      // right
      grass1bFaceUV[3] = new Babylon.Vector4(1/columns, 1/rows, (1+1)/columns, (1+1)/rows)
      grass1bFaceUV[4] = new Babylon.Vector4(0/columns, 1/rows, (0+1)/columns, (1+1)/rows)
      grass1bFaceUV[5] = new Babylon.Vector4(0/columns, 2/rows, (0+1)/columns, (2+1)/rows)

      this.blockOptions.faceUV.grass1b = grass1bFaceUV

      
      let grass1cFaceUV = new Array(6)

      grass1cFaceUV[0] = new Babylon.Vector4(1/columns, 0/rows, (1+1)/columns, (0+1)/rows)
      // end face
      grass1cFaceUV[1] = new Babylon.Vector4(0/columns, 1/rows, (0+1)/columns, (1+1)/rows)
      grass1cFaceUV[2] = new Babylon.Vector4(0/columns, 0/rows, (0+1)/columns, (0+1)/rows)

      // front
      grass1cFaceUV[3] = new Babylon.Vector4(0/columns, 2/rows, (0+1)/columns, (2+1)/rows)

      grass1cFaceUV[4] = new Babylon.Vector4(1/columns, 1/rows, (1+1)/columns, (1+1)/rows)
      grass1cFaceUV[5] = new Babylon.Vector4(0/columns, 2/rows, (0+1)/columns, (2+1)/rows)

      this.blockOptions.faceUV.grass1c = grass1cFaceUV

      let grass1dFaceUV = new Array(6)

      grass1dFaceUV[0] = new Babylon.Vector4(1/columns, 1/rows, (1+1)/columns, (1+1)/rows)
      // left
      grass1dFaceUV[1] = new Babylon.Vector4(1/columns, 0/rows, (1+1)/columns, (0+1)/rows)
      // hidden face
      grass1dFaceUV[2] = new Babylon.Vector4(0/columns, 0/rows, (0+1)/columns, (0+1)/rows)
      // end face
      grass1dFaceUV[3] = new Babylon.Vector4(2/columns, 0/rows, (2+1)/columns, (0+1)/rows)

      grass1dFaceUV[4] = new Babylon.Vector4(0/columns, 1/rows, (0+1)/columns, (1+1)/rows)
      grass1dFaceUV[5] = new Babylon.Vector4(0/columns, 2/rows, (0+1)/columns, (2+1)/rows)

      this.blockOptions.faceUV.grass1d = grass1dFaceUV

      // RIGHT
      let grass3aFaceUV = new Array(6)
      grass3aFaceUV[0] = new Babylon.Vector4(2/columns, 0/rows, (2+1)/columns, (0+1)/rows)
      // outward face
      grass3aFaceUV[1] = new Babylon.Vector4(0/columns, 0/rows, (0+1)/columns, (0+1)/rows)
      grass3aFaceUV[2] = new Babylon.Vector4((2+1)/columns, (0+1)/rows, 2/columns, 0/rows)
      grass3aFaceUV[3] = new Babylon.Vector4((2+1)/columns, (0+1)/rows, 2/columns, 0/rows)
      grass3aFaceUV[4] = new Babylon.Vector4(0/columns, 1/rows, (0+1)/columns, (1+1)/rows)
      grass3aFaceUV[5] = new Babylon.Vector4(0/columns, 2/rows, (0+1)/columns, (2 + 1)/rows)
      
      this.blockOptions.faceUV.grass3a = grass3aFaceUV
      // BACK
      let grass3bFaceUV = new Array(6)
      grass3bFaceUV[0] = new Babylon.Vector4(2/columns, 0/rows, (2+1)/columns, (0+1)/rows)
      grass3bFaceUV[1] = new Babylon.Vector4(0/columns, 2/rows, (0+1)/columns, (2+1)/rows)
      // outward face
      grass3bFaceUV[2] = new Babylon.Vector4(0/columns, 0/rows, (0+1)/columns, (0+1)/rows)
      grass3bFaceUV[3] = new Babylon.Vector4((2+1)/columns, (0+1)/rows, 2/columns, 0/rows)
      
      grass3bFaceUV[4] = new Babylon.Vector4(1/columns, 1/rows, (1+1)/columns, (1+1)/rows)
      grass3bFaceUV[5] = new Babylon.Vector4(0/columns, 2/rows, (0+1)/columns, (2 + 1)/rows)
      
      this.blockOptions.faceUV.grass3b = grass3bFaceUV
      
      // LEFT
      let grass3cFaceUV = new Array(6)
      grass3cFaceUV[0] = new Babylon.Vector4(0/columns, 1/rows, (0+1)/columns, (1+1)/rows)
      grass3cFaceUV[1] = new Babylon.Vector4(0/columns, 2/rows, (0+1)/columns, (2+1)/rows)
      grass3cFaceUV[2] = new Babylon.Vector4((2+1)/columns, (0+1)/rows, 2/columns, 0/rows)
      grass3cFaceUV[3] = new Babylon.Vector4((2+1)/columns, (0+1)/rows, 2/columns, 0/rows)
      
      grass3cFaceUV[4] = new Babylon.Vector4(0/columns, 0/rows, (0+1)/columns, (0+1)/rows)
      grass3cFaceUV[5] = new Babylon.Vector4(0/columns, 2/rows, (0+1)/columns, (2 + 1)/rows)
      
      this.blockOptions.faceUV.grass3c = grass3cFaceUV
      
    // FRONT
    let grass3dFaceUV = new Array(6)
      grass3dFaceUV[0] = new Babylon.Vector4(1/columns, 1/rows, (1+1)/columns, (1+1)/rows)
      grass3dFaceUV[1] = new Babylon.Vector4(1/columns, 1/rows, (1+1)/columns, (1+1)/rows)
      grass3dFaceUV[2] = new Babylon.Vector4(1/columns, 1/rows, (1+1)/columns, (1+1)/rows)
      grass3dFaceUV[3] = new Babylon.Vector4(1/columns, 1/rows, (1+1)/columns, (1+1)/rows)

      grass3dFaceUV[4] = new Babylon.Vector4(0/columns, 0/rows, (0+1)/columns, (0+1)/rows)
      grass3dFaceUV[5] = new Babylon.Vector4(0/columns, 2/rows, (0+1)/columns, (2 + 1)/rows)

      this.blockOptions.faceUV.grass3d = grass3dFaceUV


      let grass2aFaceUV = new Array(6)
      
      grass2aFaceUV[0] = new Babylon.Vector4(0/columns, 0/rows, (0+1)/columns, (0+1)/rows)
      grass2aFaceUV[1] = new Babylon.Vector4(0/columns, 0/rows, (0+1)/columns, (0+1)/rows)
      grass2aFaceUV[2] = new Babylon.Vector4(0/columns, 0/rows, (0+1)/columns, (0+1)/rows)
      grass2aFaceUV[3] = new Babylon.Vector4(0/columns, 0/rows, (0+1)/columns, (0+1)/rows)
      
      grass2aFaceUV[4] = new Babylon.Vector4(1/columns, 1/rows, (1+1)/columns, (1+1)/rows)
      grass2aFaceUV[5] = new Babylon.Vector4(0/columns, 2/rows, (0+1)/columns, (2 + 1)/rows)
      
      this.blockOptions.faceUV.grass2a = grass2aFaceUV

    let grass2arFaceUV = new Array(6)
      grass2arFaceUV[0] = new Babylon.Vector4(0/columns, 1/rows, (0+1)/columns, (1+1)/rows)

      grass2arFaceUV[1] = new Babylon.Vector4(1/columns, 0/rows, (1+1)/columns, (0+1)/rows)
      // hidden face

      grass2arFaceUV[2] = new Babylon.Vector4(0/columns, 1/rows, (0+1)/columns, (1+1)/rows)
      // hidden face
      grass2arFaceUV[3] = new Babylon.Vector4(0/columns, 1/rows, (0+1)/columns, (1+1)/rows)
      
      grass2arFaceUV[4] = new Babylon.Vector4(1/columns, 1/rows, (1+1)/columns, (1+1)/rows)
      grass2arFaceUV[5] = new Babylon.Vector4(0/columns, 2/rows, (0+1)/columns, (2 + 1)/rows)
      
      this.blockOptions.faceUV.grass2ar = grass2arFaceUV
      
      
    let grass2bFaceUV = new Array(6)
      grass2bFaceUV[0] = new Babylon.Vector4(2/columns, 0/rows, (2+1)/columns, (0+1)/rows)
      // outward face
      grass2bFaceUV[1] = new Babylon.Vector4(0/columns, 1/rows, (0+1)/columns, (1+1)/rows)
      grass2bFaceUV[2] = new Babylon.Vector4(1/columns, 2/rows, (1+1)/columns, (2+1)/rows)
      // outward face
      grass2bFaceUV[3] = new Babylon.Vector4(2/columns, 0/rows, (2+1)/columns, (0+1)/rows)
      
      grass2bFaceUV[4] = new Babylon.Vector4(1/columns, 0/rows, (1+1)/columns, (0+1)/rows)
      grass2bFaceUV[5] = new Babylon.Vector4(0/columns, 2/rows, (0+1)/columns, (2 + 1)/rows)
      
      this.blockOptions.faceUV.grass2b = grass2bFaceUV
      
    let grass2cFaceUV = new Array(6)
      grass2cFaceUV[0] = new Babylon.Vector4(2/columns, 0/rows, (2+1)/columns, (0+1)/rows)
      // outward face
      grass2cFaceUV[1] = new Babylon.Vector4(1/columns, 0/rows, (1+1)/columns, (0+1)/rows)
      grass2cFaceUV[2] = new Babylon.Vector4((2+1)/columns, (0+1)/rows, 2/columns, 0/rows)
      // outward face
      grass2cFaceUV[3] = new Babylon.Vector4(2/columns, 0/rows, (2+1)/columns, (0+1)/rows)

      grass2cFaceUV[4] = new Babylon.Vector4(0/columns, 0/rows, (0+1)/columns, (0+1)/rows)
      grass2cFaceUV[5] = new Babylon.Vector4(0/columns, 2/rows, (0+1)/columns, (2+1)/rows)

      this.blockOptions.faceUV.grass2c = grass2cFaceUV

    let grass2dFaceUV = new Array(6)
      grass2dFaceUV[0] = new Babylon.Vector4(1/columns, 0/rows, (1+1)/columns, (0+1)/rows)
      grass2dFaceUV[1] = new Babylon.Vector4(1/columns, 0/rows, (1+1)/columns, (0+1)/rows)

      grass2dFaceUV[2] = new Babylon.Vector4(0/columns, 0/rows, (0+1)/columns, (0+1)/rows)
      grass2dFaceUV[3] = new Babylon.Vector4(2/columns, 0/rows, (2+1)/columns, (0+1)/rows)

      grass2dFaceUV[4] = new Babylon.Vector4(1/columns, 1/rows, (1+1)/columns, (1+1)/rows)
      grass2dFaceUV[5] = new Babylon.Vector4(0/columns, 2/rows, (0+1)/columns, (2+1)/rows)

      this.blockOptions.faceUV.grass2d = grass2dFaceUV

      let grass2eFaceUV = new Array(6)
      grass2eFaceUV[0] = new Babylon.Vector4(0/columns, 1/rows, (0+1)/columns, (1+1)/rows)
      grass2eFaceUV[1] = new Babylon.Vector4(0/columns, 1/rows, (0+1)/columns, (1+1)/rows)

      grass2eFaceUV[2] = new Babylon.Vector4(1/columns, 1/rows, (1+1)/columns, (1+1)/rows)
      grass2eFaceUV[3] = new Babylon.Vector4(1/columns, 1/rows, (1+1)/columns, (1+1)/rows)

      grass2eFaceUV[4] = new Babylon.Vector4(0/columns, 0/rows, (0+1)/columns, (0+1)/rows)
      grass2eFaceUV[5] = new Babylon.Vector4(0/columns, 2/rows, (0+1)/columns, (2+1)/rows)

      this.blockOptions.faceUV.grass2e = grass2eFaceUV
  }


  getBlockOptions(block) {
    return {
      width: 16,
      height: 16,
      depth:16,
      faceUV: this.blockOptions.faceUV[block],
    }
  }

  initBlocks() {
    this.initMaterials()
    this.initBlockOptions()
    this.blockTypes.forEach((block, index) => {
      this.list[index] = new Babylon.MeshBuilder.CreateBox(block, this.getBlockOptions(block), this.scene)
      this.list[index].setEnabled(false)
      switch (block) {
        case 'dirtTop': 
          this.list[index].material = this.materials.dirtTop
          break
        case 'dirtBottom': 
          this.list[index].material = this.materials.dirtBottom
          break
        case 'dirtTopPH':
          this.list[index].material = this.materials.dirtTopPH
          this.list[index].visibility = 0.5
          break
        case 'dirtBottomPH':
          this.list[index].material = this.materials.dirtBottomPH
          this.list[index].visibility = 0.5
          break
        case 'grass':
          this.list[index].material = this.materials.grass
          break
        case 'grassPH':
          this.list[index].material = this.materials.grassPH
          this.list[index].visibility = 0.5
          break
        case 'grass4':
          this.list[index].material = this.materials.grass4
          break
        case 'grass4PH':
          this.list[index].material = this.materials.grass4PH
          this.list[index].visibility = 0.5
          break
        case 'grass1a': 
          this.list[index].material = this.materials.grass1a
          break
        case 'grass1b': 
          this.list[index].material = this.materials.grass1b
          break
        case 'grass1c': 
          this.list[index].material = this.materials.grass1c
          break
        case 'grass1d': 
          this.list[index].material = this.materials.grass1d
          break
        case 'grass3a':
          this.list[index].material = this.materials.grass3a
          break
        case 'grass3b':
          this.list[index].material = this.materials.grass3b
          break
        case 'grass3c':
          this.list[index].material = this.materials.grass3c
          break
        case 'grass3d':
          this.list[index].material = this.materials.grass3d
          break
        case 'grass2a':
          this.list[index].material = this.materials.grass2a
          break
        case 'grass2ar':
          this.list[index].material = this.materials.grass2ar
          break
        case 'grass2b':
          this.list[index].material = this.materials.grass2b
          break
        case 'grass2c':
          this.list[index].material = this.materials.grass2c
          break
        case 'grass2d':
          this.list[index].material = this.materials.grass2d
          break
        case 'grass2e':
          this.list[index].material = this.materials.grass2e
      }
      // this.list[index].material.freeze()
      this.list[index].freezeWorldMatrix()
    })
  }
}

module.exports = BlockSetup