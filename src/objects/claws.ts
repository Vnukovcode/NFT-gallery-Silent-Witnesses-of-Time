import { createEntity } from '../utils/objectsUtils';
import { shapesMap } from '../consts/shapes';

export const createClaw1 = (parent?: Entity) => createEntity({
    name: 'claw1',
    shapeSource: shapesMap.claw1,
    position: new Vector3(0.9999999403953552, 1, 24.5),
    rotation: new Quaternion(-5.6886160990359414e-15, -0.9569403529167175, 1.1407616540282106e-7, 0.290284663438797),
    scale: new Vector3(2.9501309394836426, 2.950129508972168, 2.9501309394836426),
    parent
});

export const createClaw2 = (parent?: Entity) => createEntity({
    name: 'claw2',
    shapeSource: shapesMap.claw2,
    position: new Vector3(16, 1, 17),
    rotation: new Quaternion(-3.414881089491492e-15, -0.9569404125213623, 1.1407617250824842e-7, 0.2902846932411194),
    scale: new Vector3(3.4819655418395996, 3.447460412979126, 3.4819655418395996),
    parent
});