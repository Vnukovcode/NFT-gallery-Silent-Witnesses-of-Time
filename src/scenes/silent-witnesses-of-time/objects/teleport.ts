import { createEntity,setPosition } from "../utils/objectsUtils"
import { TriggerComponent, TriggerBoxShape } from '@dcl/ecs-scene-utils';

function changeScene (oldScene: Entity, newScene: Entity) {
  if (oldScene.alive) {
      engine.removeEntity(oldScene);
      engine.addEntity(newScene);
  }
}

export const createTeleport = (outdoors: Entity, indoors: Entity): void => {
  const entity = createEntity({
    parent: outdoors,
    name: 'teleport',
    shape: new BoxShape(),
    position: setPosition(16, 2.4, 16)
  });

  entity.addComponent(
    new OnPointerDown(
      () => changeScene(outdoors, indoors),
      { button: ActionButton.POINTER, hoverText: 'Show the hidden' }
    )
  );
}

export const createLeaveGalleryTrigger = (parent: Entity, indoors: Entity, outdoors: Entity): Entity => {
  const trigger = createEntity({
    name: 'trigger',
    parent,
    position: new Vector3(16.327768325805664, 0, 14.899538040161133),
  })

  engine.addEntity(trigger);

  trigger.addComponent(new TriggerComponent(
    new TriggerBoxShape(new Vector3(20, 80, 20)),
    {
      enableDebug: false, // Переключить в true, чтобы увидеть очертания бокса для дебага.
      onCameraExit: () => changeScene(indoors, outdoors),
    }
  ))

  return trigger;
}