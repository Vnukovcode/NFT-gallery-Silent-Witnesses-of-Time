import { createEntity, setPosition } from '../utils/objectsUtils';
import { shapesMap } from '../consts/resources';

export const createTower = (parent?: Entity) => createEntity({
    name: 'tower',
    shapeSource: shapesMap.tower,
    position: setPosition(15.5, 0, 16.5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(6, 6, 6),
    parent
});