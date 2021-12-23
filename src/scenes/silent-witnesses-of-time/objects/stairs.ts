import { createEntity, setPosition } from '../utils/objectsUtils';
import { shapesMap } from '../localConsts/resources';

export const createStairs = (parent?: Entity) => createEntity({
    name: 'stairs',
    parent,
    shapeSource: shapesMap.stairs,
    position: setPosition(30, 0.10280227661132812, 20.055753707885742),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(0.25831764936447144, 0.25831764936447144, 0.25831764936447144)
});