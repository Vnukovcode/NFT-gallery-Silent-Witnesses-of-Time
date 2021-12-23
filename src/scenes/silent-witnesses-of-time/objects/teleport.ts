import { movePlayerTo } from "@decentraland/RestrictedActions";
import { createEntity, ICreateEntityParams, setPosition } from "../utils/objectsUtils"

const jumpVector = new Vector3(0, 3, 0);

export const createTeleport = (parent: Entity, newScene: Entity, createParams: ICreateEntityParams): void => {
  const entity = createEntity({
    ...createParams,
    parent
  });

  entity.addComponent(
    new OnPointerDown(
      (e) => {
        if (parent.alive) {
            engine.removeEntity(parent);
            engine.addEntity(newScene);

            movePlayerTo(Camera.instance.feetPosition.add(jumpVector));
        }
      },
      { button: ActionButton.POINTER }
    )
  );
}

export const createTeleport1 = (parent: Entity, newScene: Entity): void => createTeleport(
  parent,
  newScene,
  {
    name: 'teleport',
    shape: new BoxShape(),
    position: setPosition(16, 2.4, 16)
  }
);

export const createTeleport2 = (parent: Entity, newScene: Entity): void => createTeleport(
  parent,
  newScene,
  {
    name: 'teleport2',
    shape: new SphereShape(),
    position: setPosition(16.35, 1.5, 14.83),
    scale: new Vector3(0.3, 0.3, 0.3)
  }
);
