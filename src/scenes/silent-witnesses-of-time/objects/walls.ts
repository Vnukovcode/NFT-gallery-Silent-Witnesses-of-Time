import { createEntity } from '../utils/objectsUtils';
import { shapesMap } from '../localConsts/resources';

export const createWalls = (parent: Entity) => createEntity({
    name: 'walls',
    parent,
    shapeSource: shapesMap.walls,
    position: new Vector3(16.2236270904541, 0, 16.5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(0.16167378425598145, 0.16167378425598145, 0.16167378425598145)
})

export const createCeiling1 = (parent: Entity) => createEntity({
    name: 'ceiling1',
    parent,
    shapeSource: shapesMap.ceiling,
    position: new Vector3(15.80251693725586, 39.057044982910156, 14.873197555541992),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(0.21709692478179932, 0.17202985286712646, 0.21709692478179932)
})

export const createCeiling2 = (parent: Entity) => createEntity({
    name: 'ceiling2',
    parent,
    shapeSource: shapesMap.ceiling,
    position: new Vector3(16.30251693725586, 24.40047836303711, 14.873197555541992),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(0.05701419338583946, 0.3099122643470764, 0.05701419338583946)
})
