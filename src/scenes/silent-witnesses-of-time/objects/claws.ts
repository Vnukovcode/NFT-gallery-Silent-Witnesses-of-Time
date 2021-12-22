import { createEntity, setPosition } from '../utils/objectsUtils';
import { shapesMap } from '../consts/resources';

export const createClaw1 = (parent?: Entity) => createEntity({
    name: 'claw1',
    shapeSource: shapesMap.claw1,
    position: setPosition(0.5, 1, 24.5),
    rotation: new Quaternion(-4.1536568733395885e-15, -0.9569404125213623, 1.1407618671910313e-7, 0.2902847230434418),
    scale: new Vector3(2.9209885597229004, 2.9209578037261963, 2.9209885597229004),
    parent
});

export const createClaw2 = (parent?: Entity) => createEntity({
    name: 'claw2',
    shapeSource: shapesMap.claw2,
    position: setPosition(19, 0.792421817779541, 14.5),
    rotation: new Quaternion(-4.998604425477749e-15, -0.9569404125213623, 1.1407617961367578e-7, 0.2902847230434418),
    scale: new Vector3(3.1073765754699707, 3.4830706119537354, 3.1073765754699707),
    parent
});