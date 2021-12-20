import { createEntity, setPosition } from '../utils/objectsUtils';

export const createIndoors = (parent?: Entity) => createEntity({
    name: 'sceneOutdoors',
    position: setPosition(16, 0, 16),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1),
    parent
});
