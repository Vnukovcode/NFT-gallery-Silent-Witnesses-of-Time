import { createEntity, setPosition, ICreateEntityParams, createShape } from '../utils/objectsUtils';
import { shapesMap } from '../consts/consts';

const grassShape = createShape(shapesMap.grass)

function createGrass (params: ICreateEntityParams): Entity {
    return createEntity({ ...params, shape: grassShape });
};

export const createGrass1 = (parent?: Entity) => createGrass({
    name: 'grass',
    parent,
    position: setPosition(8, 0, 8),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
})

export const createGrass2 = (parent?: Entity) => createGrass({
    name: 'grass2',
    parent,
    position: setPosition(24, 0, 8),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
})

export const createGrass3 = (parent?: Entity) => createGrass({
    name: 'grass3',
    parent,
    position: setPosition(8, 0, 24),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
})

export const createGrass4 = (parent?: Entity) => createGrass({
    name: 'grass4',
    parent,
    position: setPosition(24, 0, 24),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
})