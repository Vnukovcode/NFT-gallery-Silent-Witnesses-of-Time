import { createEntity, createShape, ICreateEntityParams, setPosition } from '../utils/objectsUtils';
import { shapesMap } from '../localConsts/resources';

const plantShape = createShape(shapesMap.junglePlant);

function createPlant (params: ICreateEntityParams): Entity {
    return createEntity({ ...params, shape: plantShape });
};

export const createPlant1 = (parent?: Entity) => createPlant({
    name: 'plant1',
    position: setPosition(8.087072372436523, 0.023927927017211914, 20.254690170288086),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(3.3670473098754883, 3.3670473098754883, 3.3670473098754883),
    parent
});

export const createPlant2 = (parent?: Entity) => createPlant({
    name: 'plant2',
    position: setPosition(8.255424499511719, 0.023927927017211914, 10.826957702636719),
    rotation: new Quaternion(-4.157467251052812e-15, -0.9238795638084412, 1.1013501932666259e-7, 0.3826834559440613),
    scale: new Vector3(3.367058277130127, 3.3670473098754883, 3.367058277130127),
    parent
});