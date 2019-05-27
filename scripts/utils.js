// FACEID NOTES:
  // TOP: 8-9
  // BOTTOM: 10-11
  // FRONT: 1-0
  // BACK: 2-3
  // RIGHT: 4-5
  // LEFT: 6-7

function getVoxelFromFace(faceId, absolutePosition) {
  if(typeof faceId !== 'number' || !absolutePosition) { return null }

  const result = {}
    
    if(faceId === 0 || faceId === 1) {
      if(absolutePosition.z >= 240) {

        return null
      }
      result.x = Math.max(Math.round(absolutePosition.x / 16), 0)
      result.y = Math.max(Math.round((absolutePosition.y + 7) / 16), 0)
      result.z = (Math.max(Math.round(absolutePosition.z / 16), 0) + 1)
    }
  
    if(faceId === 2 || faceId === 3) {
      if(absolutePosition.z <= 0) return null
      result.x = Math.max(Math.round(absolutePosition.x / 16), 0)
      result.y = Math.max(Math.round((absolutePosition.y + 7) / 16), 0)
      result.z = (Math.max(Math.round(absolutePosition.z / 16), 0) - 1)
    }
  
    if(faceId === 4 || faceId === 5) {
      if(absolutePosition.x >= 240) return null
      result.x = (Math.max(Math.round(absolutePosition.x / 16), 0) + 1)
      result.y = Math.max(Math.round((absolutePosition.y + 7) / 16), 0)
      result.z = Math.max(Math.round(absolutePosition.z / 16), 0)
    }
  
    if(faceId === 6 || faceId === 7) {
      if(absolutePosition.x <= 0) return null
      result.x = (Math.max(Math.round(absolutePosition.x / 16), 0) - 1)
      result.y = Math.max(Math.round((absolutePosition.y + 7) / 16), 0)
      result.z = Math.max(Math.round(absolutePosition.z / 16), 0)
  
    }
  
    if(faceId === 8 || faceId === 9) {
      if(absolutePosition.y >= 240) return null
      result.x = Math.max(Math.round(absolutePosition.x / 16), 0)
      result.y = (Math.max(Math.round((absolutePosition.y + 7) / 16), 0) + 1)
      result.z = Math.max(Math.round(absolutePosition.z / 16), 0)
    }
  
    if(faceId === 10 || faceId === 11) {
      if(absolutePosition.y <= 0) return null
      result.x = Math.max(Math.round(absolutePosition.x / 16), 0)
      result.y = (Math.max(Math.round((absolutePosition.y + 7) / 16), 0) - 1)
      result.z = Math.max(Math.round(absolutePosition.z / 16), 0)
    }
  return Object.assign({}, result)
}

function getXYZ(absolutePosition) {
  const coords = {}
  coords.x = Math.max(Math.round(absolutePosition.x / 16), 0)
  coords.y = Math.max(Math.round((absolutePosition.y) / 16), 0)
  coords.z = Math.max(Math.round(absolutePosition.z / 16), 0)

  return coords
}

function objectsHaveSameVal(obj1, obj2) {
  if (!obj1 || !obj2) return false

  for(prop in obj2) {
    if (obj1[prop] === undefined || obj2[prop] !== obj1[prop]) return false
  }
  return true
}

module.exports = {
  getVoxelFromFace,
  getXYZ,
  objectsHaveSameVal
}