import { createEntity, createShape, ICreateEntityParams, setPosition } from '../utils/objectsUtils';
import { shapesMap } from '../consts/consts';

const sandShape = createShape(shapesMap.sand);

function createSand (params: ICreateEntityParams): Entity {
    return createEntity({ ...params, shape: sandShape });
};

export const sand1 = (parent?: Entity) => createSand({
    name: 'sand1',
    position: setPosition(8, 0, 8),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1),
    parent
});

export const sand2 = (parent?: Entity) => createSand({
    name: 'sand2',
    position: setPosition(24, 0, 8),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1),
    parent
});

export const sand3 = (parent?: Entity) => createSand({
    name: 'sand3',
    position: setPosition(8, 0, 24),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1),
    parent
});

export const sand4 = (parent?: Entity) => createSand({
    name: 'sand4',
    position: setPosition(24, 0, 24),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1),
    parent
});