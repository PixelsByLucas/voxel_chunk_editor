const Babylon = require('babylonjs')
require('babylonjs-loaders')
require('babylonjs-materials')
const { getVoxelFromFace, getXYZ } = require('./utils')
const Chunk = require('./classes/chunk')
const State  = require('./classes/state')
const BlockSetup = require('./classes/BlockSetup')

let canvas, engine, scene

document.addEventListener("DOMContentLoaded", function() {
  if(Babylon.Engine.isSupported()) {
    initScene()
  } else {
    alert("Your browser doesn't support WebGL")
  }
}, false)

function initScene() {
  
  canvas = document.getElementById('canvas')
  engine = new Babylon.Engine(canvas, false)
  scene = new Babylon.Scene(engine)
  
  // TURN OFF CONTEXT MENU
  document.addEventListener('contextmenu', event => event.preventDefault());
  
  // STATE
  const state = new State()

  // CAMERA
  var camera1 = new Babylon.ArcRotateCamera(
    "camera1", 
    0,
    Babylon.Tools.ToRadians(45), 
    500, 
    new Babylon.Vector3(120, 0, 120), 
    scene)
    camera1.inputs.clear()

    camera1.attachControl(canvas, true)
    camera1.setTarget

  // LIGHT
  const light = new Babylon.HemisphericLight("light1", new Babylon.Vector3(0, 1, 0), scene)
  light.intensity = 1.0

  scene.clearColor =  new Babylon.Color3(0.08, 0.08, 0.08)

  
  // BLOCKS
  const blocks = new BlockSetup(scene)
  blocks.initBlocks()

  // GROUND
  const gridMaterial = new Babylon.GridMaterial('gridMaterial', scene)
  gridMaterial.gridRatio = 1
  gridMaterial.majorUnitFrequency = 16
  gridMaterial.minorUnitVisibility = 0.1

  const groundMesh = Babylon.MeshBuilder.CreateGround("groundMesh", {width: 256, height: 256 }, scene)
  groundMesh.material = gridMaterial
  groundMesh.position = new BABYLON.Vector3(120, -8, 120)


  // CHUNK
  const chunk = new Chunk(blocks, state)
  chunk.update()


  // INPUT EVENTS
  var map = {}
    scene.actionManager = new Babylon.ActionManager(scene);

    scene.actionManager.registerAction(new Babylon.ExecuteCodeAction(Babylon.ActionManager.OnKeyDownTrigger, function (evt) {
        map[evt.sourceEvent.key] = evt.sourceEvent.type == "keydown";

    }))

    scene.actionManager.registerAction(new Babylon.ExecuteCodeAction(Babylon.ActionManager.OnKeyUpTrigger, function (evt) {
        map[evt.sourceEvent.key] = evt.sourceEvent.type == "keydown";
    }))

  // camera rotation and zoom
  scene.registerAfterRender(() => {
    if((map["w"] || map["W"])) {
      camera1.radius -= 10
    }

    if((map["s"] || map["S"])) {
      camera1.radius += 10
    }

    if((map["d"] || map["D"])) {
      camera1.alpha += 0.1
    }

    if((map["a"] || map["A"])) {
      camera1.alpha -= 0.1
    }
  })

  scene.onPointerObservable.add(
    (eventData) => {
      if(eventData.type === Babylon.PointerEventTypes.POINTERDOWN) {
        if(eventData.pickInfo.hit) {
          const { absolutePosition } = eventData.pickInfo.pickedMesh
          
          // LEFT CLICK
          if(eventData.event.button === 0) {
            const {faceId} = eventData.pickInfo
            const target = eventData.pickInfo.pickedMesh.id === 'groundMesh'
            ?
            getXYZ(eventData.pickInfo.pickedPoint)
            :
            getVoxelFromFace(faceId, absolutePosition)
            
            if(target) {
              console.log("target", target)
              chunk.addVoxel(target, false, state.getBlockType())
              chunk.update()
            }
          }
          // RIGHT CLICK
          if(eventData.event.button === 2) {
            const coords = getXYZ(absolutePosition)
            debugger
            chunk.removeVoxel(coords.x, coords.y, coords.z)
            chunk.update()
          }
        }
      }
      
      // HOVER
      if(eventData.type === Babylon.PointerEventTypes.POINTERMOVE) {
        let pickInfo = scene.pick(scene.pointerX, scene.pointerY)
        if(pickInfo.hit) {
          const target = chunk.getTarget(pickInfo)
          if(target) {
              chunk.addVoxel(target, true, state.getBlockType())
              chunk.update()
          }

        } else {
          let activePlaceHolder = chunk.getActivePlaceHolder()
          const {x, y, z} = activePlaceHolder


          if(activePlaceHolder && chunk.getVoxel(x, y, z).placeHolder) {
            chunk.removeBlock(x, y, z)
            // chunk.update()
          }
        }
      }

      // SCROLL
      if(eventData.type === Babylon.PointerEventTypes.POINTERWHEEL) {
        const { wheelDelta } = eventData.event
        if(wheelDelta) {
          const activePlaceHolder = chunk.getActivePlaceHolder()
          const {x, y, z} = activePlaceHolder

          state.setBlockType(wheelDelta)

          if(activePlaceHolder && chunk.getVoxel(x, y, z).placeHolder) {
            if(chunk.getVoxel(x, y, z).type !== state.getBlockType()) {
              chunk.refreshPlaceHolder(x, y, z)
            }
          }
        }
      }
    }
  )
  // scene.createOrUpdateSelectionOctree()

  window.addEventListener('resize', function() {
    engine.resize()
  })

  engine.runRenderLoop(function () {
    scene.render()
  })

  return scene
}

