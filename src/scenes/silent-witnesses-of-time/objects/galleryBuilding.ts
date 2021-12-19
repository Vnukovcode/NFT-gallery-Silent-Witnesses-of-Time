import { createEntity, setPosition } from '../utils/objectsUtils';
import { shapesMap } from '../consts/consts';

export const createGalleryBuilding = (parent?: Entity) => createEntity({
  name: 'galleryBuilding',
  position: setPosition(15.999632835388184, 1.3707467317581177, 15.877528190612793),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.0101141929626465, 0.5050570964813232, 1.0101141929626465),
  parent
});

