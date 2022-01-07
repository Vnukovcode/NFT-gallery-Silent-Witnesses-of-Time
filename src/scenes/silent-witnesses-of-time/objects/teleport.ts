import { movePlayerTo } from "@decentraland/RestrictedActions";
import { createEntity, ICreateEntityParams, setPosition } from "../utils/objectsUtils"

interface ICreateTeleportParams extends ICreateEntityParams {
  parent: Entity;
  newScene: Entity;
  hoverText?: string;
}

const jumpVector = new Vector3(0, 3, 0);

export const createTeleport = ({ parent, newScene, hoverText, ...createParams }: ICreateTeleportParams): void => {
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
      { button: ActionButton.POINTER, hoverText }
    )
  );
}

export const createTeleport1 = (parent: Entity, newScene: Entity): void => createTeleport(
  {
    parent,
    newScene,
    hoverText: 'Show the hidden',
    name: 'teleport',
    shape: new BoxShape(),
    position: setPosition(16, 2.4, 16)
  }
);

export const createTeleport2 = (parent: Entity, newScene: Entity): void => createTeleport(
  {
    parent,
    newScene,
    hoverText: 'Go outside',
    name: 'teleport2',
    shape: new SphereShape(),
    position: setPosition(16.35, 1.5, 14.83),
    scale: new Vector3(0.3, 0.3, 0.3)
  }
);
