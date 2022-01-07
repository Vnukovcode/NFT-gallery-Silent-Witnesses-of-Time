import { createEntity } from '../utils/objectsUtils';
import { shapesMap } from '../localConsts/resources';

export const createStairs = (parent?: Entity) => createEntity({
    name: 'stairs',
    parent,
    shapeSource: shapesMap.stairs,
    position: new Vector3(16.438007354736328, 0, 14.864051818847656),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(0.48599955439567566, 0.48599955439567566, 0.48599955439567566)
});