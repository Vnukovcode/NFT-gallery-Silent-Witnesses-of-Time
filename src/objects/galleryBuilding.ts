import { createEntity } from '../utils/objectsUtils';
import { shapesMap } from '../consts/shapes';

export const createGalleryBuilding = (parent?: Entity) => createEntity({
  name: 'galleryBuilding',
  shapeSource: shapesMap.galleryBuilding,
  position: new Vector3(15.999632835388184, 1.3707467317581177, 15.877528190612793),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(5, 5, 5),
  parent
});

