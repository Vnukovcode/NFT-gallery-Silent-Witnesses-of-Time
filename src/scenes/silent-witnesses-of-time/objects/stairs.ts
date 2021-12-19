import { createEntity, setPosition } from '../utils/objectsUtils';
import { shapesMap } from '../consts/consts';

export const createStairs = (parent?: Entity) => createEntity({
    name: 'stairs',
    shapeSource: shapesMap.stairs,
    position: setPosition(15.831280708312988, 0.69733726978302, 15.877528190612793),
    rotation: new Quaternion(-1.5357708950180593e-15, -0.7056770324707031, 8.412325058770875e-8, 0.7085337042808533),
    scale: new Vector3(3.9187393188476562, 2.7098987102508545, 3.9187393188476562),
    parent
});