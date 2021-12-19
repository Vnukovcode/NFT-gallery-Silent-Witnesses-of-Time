import { createEntity, setPosition } from '../utils/objectsUtils';

export const createOutdoors = () => createEntity({
    name: 'sceneOutdoors',
    position: setPosition(64, 0, 0),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
});
