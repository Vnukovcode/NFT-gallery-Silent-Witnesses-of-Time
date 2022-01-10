import { createEntity, ICreateEntityParams, createShape } from '../utils/objectsUtils';
import { shapesMap } from '../localConsts/resources';
import { MoveTransformComponent } from '@dcl/ecs-scene-utils';

interface ICreatePlatformParams extends ICreateEntityParams {
    distance: number;
}

const platformShape = createShape(shapesMap.platform);

function movePlatform (start: Vector3, end: Vector3, entity: Entity) {
    const duration = Scalar.RandomRange(4, 7);

    entity.addComponentOrReplace(new MoveTransformComponent(start, end, duration, () => movePlatform(end, start, entity)))
}

function createPlatform ({ distance, ...params}: ICreatePlatformParams): Entity {
    const startPosition = params.position;
    const endPosition = startPosition.add(new Vector3(0, distance, 0));

    const entity = createEntity({ ...params, shape: platformShape });
    movePlatform(startPosition, endPosition, entity);


    return entity;
};

export const createPlatform1 = (parent: Entity) => createPlatform({
    name: 'verticalMagicRock1',
    parent,
    position: new Vector3(16.327768325805664, 0.6310981512069702, 14.899538040161133),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(0.5824489593505859, 0.5824489593505859, 0.5824489593505859),
    distance: 25,
});

export const createPlatform2 = (parent: Entity) => createPlatform({
    name: 'verticalMagicRock2',
    parent,
    position: new Vector3(19.87057113647461, 9.538742065429688, 17.263107299804688),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(0.5824489593505859, 0.5824489593505859, 0.5824489593505859),
    distance: 20
});

export const createPlatform3 = (parent: Entity) => createPlatform({
    name: 'verticalMagicRock3',
    parent,
    position: new Vector3(12.5, 20.90174674987793, 12),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(0.5824489593505859, 0.5824489593505859, 0.5824489593505859),
    distance: 15
});