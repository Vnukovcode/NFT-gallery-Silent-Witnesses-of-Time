import { createEntity, setPosition } from '../utils/objectsUtils';
import { shapesMap } from '../consts/consts';

export const createWalls1 = (parent?: Entity) => createEntity({
    name: 'walls1',
    parent,
    shapeSource: shapesMap.walls1,
    position: setPosition(22, 0, 0),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
})

export const createWalls2 = (parent?: Entity) => createEntity({
    name: 'walls2',
    parent,
    shapeSource: shapesMap.walls2,
    position: setPosition(16.2236270904541, 0, 16.5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(0.16167378425598145, 0.16167378425598145, 0.16167378425598145)
})
