import { VECTOR_OFFSET } from "../consts"
import { createEntity, setPosition } from "../utils/objectsUtils"

  // Create an entity
export const createTeleport = (parent?: Entity): Entity => createEntity({
  name: 'teleport',
  shape: new BoxShape(),
  position: setPosition(16, 2.4, 16).add(VECTOR_OFFSET)
})
