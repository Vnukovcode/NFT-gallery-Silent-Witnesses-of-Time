import { createEntity } from '../utils/objectsUtils';
import { shapesMap } from '../consts/shapes';

export const createFf3 = (parent?: Entity) => createEntity({
    name: 'ff3',
    shapeSource: shapesMap.ff3,
    position: new Vector3(15.831280708312988, 0.69733726978302, 15.877528190612793),
    rotation: new Quaternion(-1.5357708950180593e-15, -0.7056770324707031, 8.412325058770875e-8, 0.7085337042808533),
    scale: new Vector3(3.9187393188476562, 2.7098987102508545, 3.9187393188476562),
    parent
});