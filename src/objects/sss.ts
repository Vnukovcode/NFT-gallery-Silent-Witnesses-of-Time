import { createEntity } from '../utils/objectsUtils';
import { shapesMap } from '../consts/shapes';

export const sss = (parent?: Entity) => createEntity({
    name: 'sss',
    shapeSource: shapesMap.sss,
    position: new Vector3(15.5, 0, 16.5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(6, 6, 6),
    parent
});